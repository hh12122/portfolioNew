<template>
  <a
    :href="project.url || '#'"
    :target="project.url ? '_blank' : '_self'"
    :rel="project.url ? 'noopener noreferrer' : ''"
    class="group flex flex-col items-center text-center cursor-pointer transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20"
    :class="{ 'pointer-events-none': !project.url }">

    <!-- Project Image -->
    <div class="mb-6 w-full relative">
      <!-- Animated background glow -->
      <div class="absolute -inset-2 bg-gradient-to-r from-accent/20 via-accent-hover/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div class="aspect-video bg-gray-200 dark:bg-dark-navy-500 relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-500">
        <img
          v-if="project.image_or_video"
          :src="project.image_or_video"
          :alt="project.name"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/10 relative">
          <span class="text-6xl text-accent/50 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">🚀</span>
          <!-- Animated particles -->
          <div class="absolute inset-0 opacity-30">
            <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/40 rounded-full animate-ping animation-delay-100"></div>
            <div class="absolute top-3/4 right-1/3 w-1 h-1 bg-accent-hover/40 rounded-full animate-ping animation-delay-300"></div>
            <div class="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-ping animation-delay-500"></div>
          </div>
        </div>

        <!-- Enhanced overlay with animation -->
        <div class="absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-dark-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
          <span v-if="project.url" class="text-white font-body text-sm flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
            <span class="mr-2">Voir le projet</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </span>
        </div>

        <!-- Floating corner indicator -->
        <div v-if="project.url" class="absolute top-4 right-4 w-8 h-8 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-100">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- Project Skills -->
    <div class="mb-3 flex flex-wrap justify-center gap-2">
      <span
        v-for="(skill, index) in displaySkills"
        :key="skill.id"
        class="group-hover:text-accent capitalize text-accent text-sm font-body px-3 py-1.5 bg-accent/10 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-accent/20 hover:shadow-lg group-hover:translate-y-0"
        :style="{ transitionDelay: `${index * 100}ms` }">
        {{ skill.name }}
      </span>
    </div>

    <!-- Project Title -->
    <h3 class="group-hover:text-accent text-xl md:text-2xl font-semibold mb-3 text-dark-primary dark:text-light-primary font-primary transform transition-all duration-500 group-hover:scale-105">
      {{ project.name }}
    </h3>

    <!-- Project Description -->
    <p v-if="project.description" class="text-paragraph dark:text-gray-300 text-sm font-body line-clamp-3 max-w-sm transform transition-all duration-500 group-hover:text-gray-600 dark:group-hover:text-gray-200">
      {{ project.description }}
    </p>
  </a>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/useProjects'

const props = defineProps<{
  project: Project
}>()

// Display skills - use the new skills array if available, otherwise fall back to the old skill field
const displaySkills = computed(() => {
  if (props.project.skills && props.project.skills.length > 0) {
    return props.project.skills
  }

  // Fallback for backward compatibility
  if (props.project.skill) {
    return [{
      id: 'fallback',
      name: props.project.skill,
      image: null
    }]
  }

  return []
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom animation delays */
.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

/* Pulse effect for project cards on load */
@keyframes cardPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(var(--accent), 0.4);
  }
  70% {
    transform: scale(1.02);
    box-shadow: 0 0 0 20px rgba(var(--accent), 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(var(--accent), 0);
  }
}

/* Floating animation for empty state rocket */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.group:hover .animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Shimmer effect for loading states */
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}

.shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  background-size: 200px 100%;
  animation: shimmer 2s infinite;
}
</style>