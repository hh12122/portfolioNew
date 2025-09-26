export const useAuth = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      await navigateTo('/')
      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  }

  const isAuthenticated = computed(() => {
    return !!user.value
  })

  return {
    user: readonly(user),
    signIn,
    signOut,
    isAuthenticated
  }
}