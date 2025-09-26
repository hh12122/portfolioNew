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
import { onMounted, onUnmounted } from 'vue'

// Import components
import Header from '~/components/Header.vue'
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import SkillsSection from '~/components/SkillsSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import Footer from '~/components/Footer.vue'

// Animation handling
let observer = null

const initScrollAnimations = () => {
  // Intersection Observer for scroll animations
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach((el) => {
    observer.observe(el)
  })
}

onMounted(() => {
  // Initialize scroll animations after a short delay to ensure DOM is ready
  setTimeout(() => {
    initScrollAnimations()
  }, 100)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

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

/* Animation Utilities */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(40px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-40px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-up {
  animation: slideInUp 0.8s ease-out forwards;
  opacity: 0;
}

/* Scroll-triggered animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Animation delays */
.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-700 { animation-delay: 0.7s; }
.animation-delay-800 { animation-delay: 0.8s; }
.animation-delay-900 { animation-delay: 0.9s; }
.animation-delay-1000 { animation-delay: 1s; }

/* Responsive animations - reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .animate-on-scroll {
    opacity: 1;
    transform: none;
  }
}
</style>