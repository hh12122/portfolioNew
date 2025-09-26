<template>
  <nav class="w-full fixed z-20 border-gray-200 rounded transition-all duration-300"
    :class="{
      'bg-light-primary dark:bg-dark-primary shadow-lg': scrollBg,
      'bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm': !scrollBg
    }">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
      <a href="#home" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/assets/images/logo.png" class="h-20 w-20 object-contain" alt="Logo" />
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-4">
        <ul class="font-medium flex flex-row space-x-8 rtl:space-x-reverse">
          <li v-for="(navigation, index) in navigations" :key="index">
            <a
              :href="navigation.href"
              @click="smoothScroll(navigation.href)"
              class="block py-2 px-3 text-dark-primary dark:text-light-primary hover:text-accent dark:hover:text-accent transition-colors font-body"
              :class="{ 'text-accent': activeSection === navigation.href.substring(1) }">
              {{ navigation.name }}
            </a>
          </li>
        </ul>

        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors">
          <svg v-if="isDark" class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          <svg v-else class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center space-x-2">
        <!-- Dark Mode Toggle Mobile -->
        <button @click="toggleDarkMode" class="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors">
          <svg v-if="isDark" class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          <svg v-else class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        </button>

        <button
          @click="showMobileMenu = !showMobileMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open main menu</span>
          <svg v-if="!showMobileMenu" class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
          <svg v-else class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l8 6 8-6M1 13l8-6 8 6"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        class="w-full md:hidden"
        :class="{ hidden: !showMobileMenu }">
        <ul class="font-medium flex flex-col p-4 mt-4 border border-accent/20 rounded-lg bg-light-secondary dark:bg-dark-secondary">
          <li v-for="(navigation, index) in navigations" :key="index">
            <a
              :href="navigation.href"
              @click="closeMobileMenu(navigation.href)"
              class="block py-2 px-3 text-dark-primary dark:text-light-primary hover:text-accent dark:hover:text-accent transition-colors">
              {{ navigation.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showMobileMenu = ref(false)
const scrollBg = ref(false)
const activeSection = ref('home')
const isDark = ref(false)

const navigations = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#portfolio" },
  { name: "Expérience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

const setScrollBg = (value) => {
  scrollBg.value = value
}

const closeMobileMenu = (href) => {
  showMobileMenu.value = false
  smoothScroll(href)
}

const smoothScroll = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  updateDarkMode()
}

const updateDarkMode = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const handleScroll = () => {
  setScrollBg(window.scrollY > 50)

  // Update active section
  const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'contact']
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  // Initialize dark mode
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateDarkMode()

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>