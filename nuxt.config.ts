export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
    redirectOptions: {
      login: '/admin/login',
      callback: '/admin',
      exclude: ['/', '/contact']
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    }
  }
})