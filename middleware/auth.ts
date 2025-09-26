export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()

  if (to.path.startsWith('/admin') && !user.value) {
    return navigateTo('/admin/login')
  }
})