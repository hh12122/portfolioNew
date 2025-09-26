<template>
  <section id="contact" class="py-20 bg-light-secondary dark:bg-dark-secondary">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-dark-primary dark:text-light-primary mb-4">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-lg text-paragraph dark:text-gray-400 font-body">{{ $t('contact.subtitle') }}</p>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-dark-primary dark:text-light-primary mb-6 font-primary">
              {{ $t('contact.title') }}
            </h3>
            <p class="text-paragraph dark:text-gray-300 font-body mb-8">
              {{ $t('contact.subtitle') }}
            </p>
          </div>

          <!-- Contact Details -->
          <div class="space-y-4">
            <div class="flex items-center space-x-4 p-4 bg-white dark:bg-dark-primary rounded-lg border border-accent/20">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm text-paragraph dark:text-gray-400 font-body">Email</p>
                <a href="mailto:hocineprint@gmail.com" class="text-dark-primary dark:text-light-primary font-semibold hover:text-accent transition-colors font-body">
                   hocineprint@gmail.com 
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4 p-4 bg-white dark:bg-dark-primary rounded-lg border border-accent/20">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm text-paragraph dark:text-gray-400 font-body">Téléphone</p>
                <a href="tel:+213540036105" class="text-dark-primary dark:text-light-primary font-semibold hover:text-accent transition-colors font-body">
                  {{ $t('contact.info.phone') }}
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4 p-4 bg-white dark:bg-dark-primary rounded-lg border border-accent/20">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm text-paragraph dark:text-gray-400 font-body">Localisation</p>
                <p class="text-dark-primary dark:text-light-primary font-semibold font-body">
                  {{ $t('contact.info.location') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="text-lg font-semibold text-dark-primary dark:text-light-primary mb-4 font-primary">
              Retrouvez-moi sur
            </h4>
            <div class="flex space-x-4">
              <a href="https://github.com/hh12122" target="_blank"
                 class="w-12 h-12 bg-white dark:bg-dark-primary rounded-lg flex items-center justify-center border border-accent/20 hover:border-accent hover:bg-accent hover:text-white transition-all">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/hocine-amrane-print" target="_blank"
                 class="w-12 h-12 bg-white dark:bg-dark-primary rounded-lg flex items-center justify-center border border-accent/20 hover:border-accent hover:bg-accent hover:text-white transition-all">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Languages -->
          <div>
            <h4 class="text-lg font-semibold text-dark-primary dark:text-light-primary mb-4 font-primary">
              Langues
            </h4>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-accent/10 text-dark-primary dark:text-light-primary rounded-full text-sm font-body">
                🇩🇿 Kabyle (Natif)
              </span>
              <span class="px-4 py-2 bg-accent/10 text-dark-primary dark:text-light-primary rounded-full text-sm font-body">
                🇩🇿 Arabe (Courant)
              </span>
              <span class="px-4 py-2 bg-accent/10 text-dark-primary dark:text-light-primary rounded-full text-sm font-body">
                🇫🇷 Français (Avancé)
              </span>
              <span class="px-4 py-2 bg-accent/10 text-dark-primary dark:text-light-primary rounded-full text-sm font-body">
                🇬🇧 Anglais (Intermédiaire)
              </span>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <form @submit.prevent="handleContactSubmit" class="bg-white dark:bg-dark-primary rounded-lg p-8 shadow-xl">
            <!-- Status Messages -->
            <div v-if="formStatus.message" class="mb-6 p-4 rounded-lg" :class="{
              'bg-green-100 border border-green-300 text-green-700': formStatus.type === 'success',
              'bg-red-100 border border-red-300 text-red-700': formStatus.type === 'error'
            }">
              <div class="flex items-center">
                <svg v-if="formStatus.type === 'success'" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <svg v-else class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <span class="font-body">{{ formStatus.message }}</span>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-dark-primary dark:text-light-primary mb-2 font-body">
                  {{ $t('contact.form.name') }} *
                </label>
                <input
                  v-model="contactForm.name"
                  name="name"
                  type="text"
                  required
                  :disabled="isSubmitting"
                  class="w-full px-4 py-3 border border-accent/20 rounded-lg focus:outline-none focus:border-accent bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light-primary font-body disabled:opacity-50"
                  :placeholder="$t('contact.form.name')"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-dark-primary dark:text-light-primary mb-2 font-body">
                  {{ $t('contact.form.email') }} *
                </label>
                <input
                  v-model="contactForm.email"
                  name="_replyto"
                  type="email"
                  required
                  :disabled="isSubmitting"
                  class="w-full px-4 py-3 border border-accent/20 rounded-lg focus:outline-none focus:border-accent bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light-primary font-body disabled:opacity-50"
                  :placeholder="$t('contact.form.email')"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-dark-primary dark:text-light-primary mb-2 font-body">
                  {{ $t('contact.form.subject') }} *
                </label>
                <input
                  v-model="contactForm.subject"
                  name="_subject"
                  type="text"
                  required
                  :disabled="isSubmitting"
                  class="w-full px-4 py-3 border border-accent/20 rounded-lg focus:outline-none focus:border-accent bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light-primary font-body disabled:opacity-50"
                  :placeholder="$t('contact.form.subject')"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-dark-primary dark:text-light-primary mb-2 font-body">
                  {{ $t('contact.form.message') }} *
                </label>
                <textarea
                  v-model="contactForm.message"
                  name="message"
                  required
                  rows="5"
                  :disabled="isSubmitting"
                  class="w-full px-4 py-3 border border-accent/20 rounded-lg focus:outline-none focus:border-accent bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light-primary font-body resize-none disabled:opacity-50"
                  :placeholder="$t('contact.form.message')"
                ></textarea>
              </div>

              <!-- Honeypot field for spam protection -->
              <input type="text" name="_gotcha" style="display:none" />

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 font-body disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center">
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const contactForm = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const formStatus = reactive({
  message: '',
  type: '' // 'success' or 'error'
})

// Formspree endpoint - replace with your actual Formspree form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyznzqob'

const handleContactSubmit = async () => {
  isSubmitting.value = true
  formStatus.message = ''

  try {
    const formData = new FormData()
    formData.append('name', contactForm.name)
    formData.append('_replyto', contactForm.email)
    formData.append('_subject', `Portfolio Contact: ${contactForm.subject}`)
    formData.append('message', `
Nom: ${contactForm.name}
Email: ${contactForm.email}
Sujet: ${contactForm.subject}

Message:
${contactForm.message}

---
Envoyé depuis le portfolio de Hocine AMRANE
    `)

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      formStatus.message = '✅ Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.'
      formStatus.type = 'success'

      // Reset form
      contactForm.name = ''
      contactForm.email = ''
      contactForm.subject = ''
      contactForm.message = ''
    } else {
      throw new Error('Erreur lors de l\'envoi')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    formStatus.message = '❌ Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement à hocineprint@gmail.com'
    formStatus.type = 'error'
  }

  isSubmitting.value = false

  // Clear status message after 10 seconds
  setTimeout(() => {
    formStatus.message = ''
  }, 10000)
}

// Alternative: Direct mailto link handler
const handleDirectEmail = () => {
  const subject = encodeURIComponent(`Contact Portfolio: ${contactForm.subject || 'Nouveau message'}`)
  const body = encodeURIComponent(`
Bonjour Hocine,

${contactForm.message || '[Votre message ici]'}

Cordialement,
${contactForm.name || '[Votre nom]'}
${contactForm.email || '[Votre email]'}
  `)

  window.location.href = `mailto:hocineprint@gmail.com?subject=${subject}&body=${body}`
}
</script>