<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="font-bold text-xl text-gray-900">Portfolio</div>
          <div class="hidden md:flex space-x-8">
            <a href="#hero" class="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#skills" class="text-gray-700 hover:text-gray-900 transition-colors">Skills</a>
            <a href="#projects" class="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" class="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span class="text-blue-600">Your Name</span>
        </h1>
        <p class="text-xl sm:text-2xl text-gray-600 mb-8">
          Full Stack Developer & Designer
        </p>
        <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          I create beautiful, functional, and user-friendly applications using modern technologies.
          Passionate about clean code and elegant solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UiButton size="lg" class="px-8">
            View My Work
          </UiButton>
          <UiButton variant="outline" size="lg" class="px-8">
            Get In Touch
          </UiButton>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p class="text-lg text-gray-600">Technologies I love to work with</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="skill in skills"
            :key="skill.id"
            class="flex flex-col items-center p-6 bg-white rounded-lg border hover:shadow-lg transition-shadow"
          >
            <img
              v-if="skill.image"
              :src="skill.image"
              :alt="skill.name"
              class="w-16 h-16 mb-4 rounded-lg object-cover"
            >
            <h3 class="font-semibold text-gray-900">{{ skill.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p class="text-lg text-gray-600">Some of my recent work</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UiCard
            v-for="project in projects"
            :key="project.id"
            class="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="aspect-video bg-gray-200 relative overflow-hidden">
              <img
                v-if="project.image_or_video"
                :src="project.image_or_video"
                :alt="project.name"
                class="w-full h-full object-cover"
              >
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-blue-600">{{ project.skill }}</span>
                <a
                  v-if="project.url"
                  :href="project.url"
                  target="_blank"
                  class="text-gray-400 hover:text-gray-600"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.name }}</h3>
              <p v-if="project.description" class="text-gray-600 text-sm">{{ project.description }}</p>
            </div>
          </UiCard>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p class="text-lg text-gray-600">Let's work together on your next project</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="text-gray-600">your.email@example.com</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-gray-600">Your City, Country</span>
              </div>
            </div>
          </div>

          <div>
            <form @submit.prevent="handleContactSubmit" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <UiInput
                  v-model="contactForm.name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <UiInput
                  v-model="contactForm.email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  v-model="contactForm.message"
                  placeholder="Your message..."
                  required
                  class="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
              </div>
              <UiButton type="submit" class="w-full">
                Send Message
              </UiButton>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { fetchSkills } = useSkills()
const { fetchProjects } = useProjects()

const skills = ref<any[]>([])
const projects = ref<any[]>([])

const contactForm = reactive({
  name: '',
  email: '',
  message: ''
})

const loadData = async () => {
  const [skillsResult, projectsResult] = await Promise.all([
    fetchSkills(),
    fetchProjects()
  ])

  if (skillsResult.data) skills.value = skillsResult.data
  if (projectsResult.data) projects.value = projectsResult.data
}

const handleContactSubmit = () => {
  // Handle contact form submission
  console.log('Contact form submitted:', contactForm)
  alert('Message sent! (This is a demo - implement your email service)')

  // Reset form
  contactForm.name = ''
  contactForm.email = ''
  contactForm.message = ''
}

onMounted(() => {
  loadData()
})

// SEO
useHead({
  title: 'Your Name - Full Stack Developer',
  meta: [
    { name: 'description', content: 'Full Stack Developer & Designer creating beautiful, functional applications' }
  ]
})
</script>