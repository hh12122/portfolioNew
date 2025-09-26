<template>
  <section id="portfolio" class="py-20 bg-light-secondary dark:bg-dark-secondary">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-dark-primary dark:text-light-primary mb-4">
          Projets Réalisés
        </h2>
        <p class="text-lg text-paragraph dark:text-gray-400 font-body">Mes dernières réalisations</p>
      </div>

      <div v-if="projects.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group bg-white dark:bg-dark-primary rounded-lg overflow-hidden border border-accent/20 hover:border-accent hover:shadow-2xl transition-all duration-300">
          <div class="aspect-video bg-gray-200 dark:bg-dark-navy-500 relative overflow-hidden">
            <img
              v-if="project.image_or_video"
              :src="project.image_or_video"
              :alt="project.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-medium text-accent font-body">{{ project.skill }}</span>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                class="text-paragraph hover:text-accent transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <h3 class="text-xl font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary">
              {{ project.name }}
            </h3>
            <p v-if="project.description" class="text-paragraph dark:text-gray-300 text-sm font-body line-clamp-3">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Static projects display -->
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in staticProjects" :key="index"
             class="group bg-white dark:bg-dark-primary rounded-lg overflow-hidden border border-accent/20 hover:border-accent hover:shadow-2xl transition-all duration-300">
          <div class="aspect-video bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
            <span class="text-6xl text-accent/50">{{ project.icon }}</span>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-medium text-accent font-body">{{ project.tech }}</span>
            </div>
            <h3 class="text-xl font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary">
              {{ project.name }}
            </h3>
            <p class="text-paragraph dark:text-gray-300 text-sm font-body line-clamp-3">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const { fetchProjects } = useProjects()

const projects = ref([])
const staticProjects = [
  {
    name: 'Carte Financement',
    tech: 'Symfony/Vue.js',
    description: 'Plateforme de courtage en crédit immobilier avec gestion complète des dossiers clients',
    icon: '💳'
  },
  {
    name: 'Ulerb',
    tech: 'Vue.js/MongoDB',
    description: 'Solution logistique pour transitaires avec suivi en temps réel des expéditions',
    icon: '📦'
  },
  {
    name: 'Koalife',
    tech: 'WordPress',
    description: 'Simulateur d\'assurance emprunteur avec calculs automatisés et comparaisons',
    icon: '🏠'
  },
  {
    name: 'SpartanJob',
    tech: 'Angular',
    description: 'Plateforme de recrutement dédiée au marché suisse avec matching intelligent',
    icon: '💼'
  },
  {
    name: 'FAST',
    tech: 'Angular/SaaS',
    description: 'Solution de gestion commerciale et facturation 100% algérienne en mode cloud',
    icon: '⚡'
  },
  {
    name: 'Sites WordPress',
    tech: 'WordPress/PHP',
    description: 'Maintenance et développement de fonctionnalités sur mesure pour plusieurs sites',
    icon: '🌐'
  }
]

onMounted(async () => {
  const result = await fetchProjects()
  if (result.data) {
    projects.value = result.data
  }
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>