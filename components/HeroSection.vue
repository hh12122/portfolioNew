<template>
  <section id="home" class="lg:h-[85vh] flex items-center bg-light-primary dark:bg-dark-primary py-32 lg:py-0 overflow-hidden">
    <div class="container mx-auto h-full">
      <div class="flex flex-col md:flex-row items-center h-full pt-8">
        <div class="flex-1 flex flex-col items-center lg:items-start">
          <!-- Greeting with typewriter effect -->
          <p class="text-lg text-accent font-body mb-[22px] opacity-0 animate-fade-in-up animation-delay-200">
            <span ref="greetingText" class="typewriter-text"></span>
            <span class="typewriter-cursor" :class="{ 'typing': isTypingGreeting, 'hidden': !isTypingGreeting && greetingComplete }">|</span>
          </p>

          <!-- Title with typewriter effect -->
          <h1 class="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] font-primary text-dark-primary dark:text-light-primary text-center lg:text-left opacity-0 animate-fade-in-up animation-delay-800">
            <span ref="titleText" class="typewriter-text"></span>
            <span class="typewriter-cursor" :class="{ 'typing': isTypingTitle, 'hidden': !isTypingTitle && titleComplete }">|</span>
          </h1>

          <!-- Description with typewriter effect -->
          <p class="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left text-paragraph dark:text-gray-300 font-body opacity-0 animate-fade-in-up animation-delay-1200">
            <span ref="descriptionText" class="typewriter-text"></span>
            <span class="typewriter-cursor" :class="{ 'typing': isTypingDescription, 'hidden': !isTypingDescription && descriptionComplete }">|</span>
          </p>
          <div class="flex flex-col sm:flex-row gap-4 opacity-0 transform translate-y-4 transition-all duration-700 ease-out" :class="{ 'opacity-100 translate-y-0': showButtons }">
            <a href="#contact" class="btn btn-md bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-body transition-all hover:scale-105 hover:shadow-lg">
              {{ $t('hero.cta.work') }}
            </a>
            <a href="#portfolio" class="btn btn-md border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-body transition-all hover:scale-105 hover:shadow-lg">
              {{ $t('hero.cta.projects') }}
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-6 mt-8 opacity-0 transform translate-y-4 transition-all duration-700 ease-out delay-500" :class="{ 'opacity-100 translate-y-0': showButtons }">
            <a href="https://github.com/hh12122" target="_blank"
               class="text-paragraph hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/hocine-amrane-print" target="_blank"
               class="text-paragraph hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:hocineprint@gmail.com"
               class="text-paragraph hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="flex flex-1 justify-end h-full items-center mt-8 md:mt-0 animate-fade-in-right animation-delay-600">
          <img src="/assets/images/hero.jpg" alt="Hero" class="rounded-lg shadow-2xl max-w-full h-auto hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const { t } = useI18n()

// Template refs
const greetingText = ref()
const titleText = ref()
const descriptionText = ref()

// Animation states
const isTypingGreeting = ref(false)
const isTypingTitle = ref(false)
const isTypingDescription = ref(false)
const showButtons = ref(false)

// Completion states
const greetingComplete = ref(false)
const titleComplete = ref(false)
const descriptionComplete = ref(false)

// Typewriter animation function
const typeWriter = async (element, text, speed = 50, startDelay = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let i = 0
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          element.value.textContent += text.charAt(i)
          i++
        } else {
          clearInterval(typeInterval)
          resolve()
        }
      }, speed)
    }, startDelay)
  })
}

// Start typewriter animations
const startTypewriterAnimations = async () => {
  // Wait for DOM to be ready
  await nextTick()

  // Clear existing content
  if (greetingText.value) greetingText.value.textContent = ''
  if (titleText.value) titleText.value.textContent = ''
  if (descriptionText.value) descriptionText.value.textContent = ''

  // Start greeting animation after fade-in
  setTimeout(async () => {
    if (greetingText.value) {
      isTypingGreeting.value = true
      await typeWriter(greetingText, t('hero.greeting'), 80)
      isTypingGreeting.value = false
      greetingComplete.value = true

      // Small pause before title
      setTimeout(async () => {
        if (titleText.value) {
          isTypingTitle.value = true
          await typeWriter(titleText, t('hero.title'), 60)
          isTypingTitle.value = false
          titleComplete.value = true

          // Small pause before description
          setTimeout(async () => {
            if (descriptionText.value) {
              isTypingDescription.value = true
              await typeWriter(descriptionText, t('hero.description'), 40)
              isTypingDescription.value = false
              descriptionComplete.value = true

              // Show buttons after all text is typed
              setTimeout(() => {
                showButtons.value = true
              }, 500)
            }
          }, 300)
        }
      }, 500)
    }
  }, 800) // Wait for fade-in animation to start
}

onMounted(() => {
  startTypewriterAnimations()
})
</script>

<style scoped>
/* Typewriter cursor animation */
.typewriter-cursor {
  display: inline-block;
  background-color: currentColor;
  margin-left: 2px;
  width: 2px;
  animation: blink 1s infinite;
  transition: opacity 0.3s ease-out;
}

.typewriter-cursor.typing {
  animation: blink 0.7s infinite;
}

.typewriter-cursor.hidden {
  opacity: 0;
  animation: none;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Enhanced text appearance during typing */
.typewriter-text {
  display: inline-block;
  min-height: 1em;
}

/* Smooth transitions for buttons and social links */
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

/* Ensure proper spacing and alignment */
.typewriter-text:empty::after {
  content: '\00a0'; /* non-breaking space to maintain height */
}

/* Add subtle glow effect to typing cursor */
.typewriter-cursor.typing {
  box-shadow: 0 0 8px currentColor;
  animation: blink 0.7s infinite, glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 0 4px currentColor;
  }
  to {
    box-shadow: 0 0 12px currentColor, 0 0 16px currentColor;
  }
}

/* Responsive cursor size */
@media (max-width: 768px) {
  .typewriter-cursor {
    width: 1.5px;
  }
}

@media (min-width: 1024px) {
  .typewriter-cursor {
    width: 3px;
  }
}
</style>