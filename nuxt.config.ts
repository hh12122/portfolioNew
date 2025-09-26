export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
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
  i18n: {
    locales: [
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.json',
        flag: '🇫🇷'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        flag: '🇺🇸'
      },
      {
        code: 'ar',
        name: 'العربية',
        file: 'ar.json',
        flag: '🇩🇿',
        dir: 'rtl'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    compilation: {
      strictMessage: false,
      escapeHtml: true
    }
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    }
  }
})