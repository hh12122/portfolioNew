<template>
  <div class="min-h-screen bg-light-primary dark:bg-dark-primary">
    <!-- Header Navigation -->
    <Header />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Skills Section -->
      <SkillsSection />

      <!-- Projects Section -->
      <ProjectsSection />

      <!-- Experience Section -->
      <ExperienceSection />

      <!-- Contact Section -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Import components
import Header from '~/components/Header.vue'
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import SkillsSection from '~/components/SkillsSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import Footer from '~/components/Footer.vue'

// SEO
useHead({
  title: 'AMRANE Hocine - Développeur Full-Stack',
  meta: [
    {
      name: 'description',
      content: 'Portfolio de AMRANE Hocine, Développeur Full-Stack spécialisé en Vue.js, Angular, Symfony et Laravel. Master en Génie Logiciel.'
    },
    { name: 'keywords', content: 'développeur, full-stack, vue.js, angular, symfony, laravel, portfolio, algérie, béjaia' },
    { property: 'og:title', content: 'AMRANE Hocine - Développeur Full-Stack' },
    { property: 'og:description', content: 'Développeur Full-Stack passionné par les technologies web modernes' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    // Add Google Fonts for Playfair Display and Work Sans
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Work+Sans:wght@300;400;500;600;700&display=swap'
    }
  ]
})
</script>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #ac6b34;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #925a2b;
}

/* Dark mode scrollbar */
.dark ::-webkit-scrollbar-track {
  background: #1C1D24;
}

.dark ::-webkit-scrollbar-thumb {
  background: #ac6b34;
}
</style>