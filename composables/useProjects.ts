export interface Project {
  id: string
  name: string
  skill: string
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
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

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

  return {
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
    uploadProjectMedia
  }
}