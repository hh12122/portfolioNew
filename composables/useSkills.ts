export interface Skill {
  id: string
  name: string
  image: string | null
  created_at: string
  updated_at: string
}

export const useSkills = () => {
  const supabase = useSupabaseClient()

  const fetchSkills = async (): Promise<{ data: Skill[] | null, error: string | null }> => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  const createSkill = async (skill: Omit<Skill, 'id' | 'created_at' | 'updated_at'>): Promise<{ data: Skill | null, error: string | null }> => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .insert([skill])
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  const updateSkill = async (id: string, skill: Partial<Omit<Skill, 'id' | 'created_at' | 'updated_at'>>): Promise<{ data: Skill | null, error: string | null }> => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .update({ ...skill, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  const deleteSkill = async (id: string): Promise<{ error: string | null }> => {
    try {
      const { error } = await supabase
        .from('skills')
        .delete()
        .eq('id', id)

      if (error) throw error

      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  }

  const uploadSkillImage = async (file: File): Promise<{ data: string | null, error: string | null }> => {
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `skills/${fileName}`

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
    fetchSkills,
    createSkill,
    updateSkill,
    deleteSkill,
    uploadSkillImage
  }
}