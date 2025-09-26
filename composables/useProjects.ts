export interface ProjectSkill {
  id: string
  name: string
  image: string | null
}

export interface Project {
  id: string
  name: string
  skill: string // Keep for backward compatibility
  skills: ProjectSkill[] // New field for multiple skills
  url: string | null
  image_or_video: string | null
  description: string | null
  created_at: string
  updated_at: string
}

export const useProjects = () => {
  const supabase = useSupabaseClient()

  const fetchProjects = async (): Promise<{ data: Project[] | null, error: string | null }> => {
    try {
      // First try to get projects with skills from the view
      const { data, error } = await supabase
        .from('projects_with_skills')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        // Fallback to regular projects table if view doesn't exist
        const { data: fallbackData, error: fallbackError } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })

        if (fallbackError) throw fallbackError

        // Map to new format with empty skills array
        const projectsWithEmptySkills = fallbackData?.map(project => ({
          ...project,
          skills: []
        })) || []

        return { data: projectsWithEmptySkills, error: null }
      }

      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  const createProject = async (project: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<{ data: Project | null, error: string | null }> => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([project])
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  const updateProject = async (id: string, project: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>): Promise<{ data: Project | null, error: string | null }> => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update({ ...project, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  const deleteProject = async (id: string): Promise<{ error: string | null }> => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)

      if (error) throw error

      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  }

  const uploadProjectMedia = async (file: File): Promise<{ data: string | null, error: string | null }> => {
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `projects/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('portfolio-media')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('portfolio-media')
        .getPublicUrl(filePath)

      return { data: publicUrl, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  const updateProjectSkills = async (projectId: string, skillIds: string[]): Promise<{ error: string | null }> => {
    try {
      // First, remove all existing project-skill relationships
      const { error: deleteError } = await supabase
        .from('project_skills')
        .delete()
        .eq('project_id', projectId)

      if (deleteError) throw deleteError

      // Then, insert new relationships if there are skills
      if (skillIds.length > 0) {
        const projectSkills = skillIds.map(skillId => ({
          project_id: projectId,
          skill_id: skillId
        }))

        const { error: insertError } = await supabase
          .from('project_skills')
          .insert(projectSkills)

        if (insertError) throw insertError
      }

      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  }

  const createProjectWithSkills = async (
    project: Omit<Project, 'id' | 'created_at' | 'updated_at' | 'skills'>,
    skillIds: string[]
  ): Promise<{ data: Project | null, error: string | null }> => {
    try {
      // Create the project first
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .insert([{
          name: project.name,
          skill: project.skill, // Keep for backward compatibility
          url: project.url,
          image_or_video: project.image_or_video,
          description: project.description
        }])
        .select()
        .single()

      if (projectError) throw projectError

      // Then add skill relationships
      if (skillIds.length > 0) {
        const { error: skillsError } = await updateProjectSkills(projectData.id, skillIds)
        if (skillsError) throw new Error(skillsError)
      }

      // Fetch the complete project with skills
      const { data: completeProject } = await supabase
        .from('projects_with_skills')
        .select('*')
        .eq('id', projectData.id)
        .single()

      return { data: completeProject || { ...projectData, skills: [] }, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  const updateProjectWithSkills = async (
    id: string,
    project: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at' | 'skills'>>,
    skillIds?: string[]
  ): Promise<{ data: Project | null, error: string | null }> => {
    try {
      // Update the project
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .update({ ...project, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (projectError) throw projectError

      // Update skills if provided
      if (skillIds !== undefined) {
        const { error: skillsError } = await updateProjectSkills(id, skillIds)
        if (skillsError) throw new Error(skillsError)
      }

      // Fetch the complete project with skills
      const { data: completeProject } = await supabase
        .from('projects_with_skills')
        .select('*')
        .eq('id', id)
        .single()

      return { data: completeProject || { ...projectData, skills: [] }, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  return {
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
    uploadProjectMedia,
    createProjectWithSkills,
    updateProjectWithSkills,
    updateProjectSkills
  }
}