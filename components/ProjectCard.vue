<template>
  <a
    :href="project.url || '#'"
    :target="project.url ? '_blank' : '_self'"
    :rel="project.url ? 'noopener noreferrer' : ''"
    class="group flex flex-col items-center text-center cursor-pointer"
    :class="{ 'pointer-events-none': !project.url }">

    <!-- Project Image -->
    <div class="mb-6 w-full">
      <div class="aspect-video bg-gray-200 dark:bg-dark-navy-500 relative overflow-hidden rounded-2xl">
        <img
          v-if="project.image_or_video"
          :src="project.image_or_video"
          :alt="project.name"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/10">
          <span class="text-6xl text-accent/50">🚀</span>
        </div>

        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-gradient-to-t from-dark-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span v-if="project.url" class="text-white font-body text-sm flex items-center">
            Voir le projet
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>

    <!-- Project Skills -->
    <div class="mb-3 flex flex-wrap justify-center gap-2">
      <span
        v-for="skill in displaySkills"
        :key="skill.id"
        class="group-hover:text-accent capitalize text-accent text-sm font-body px-2 py-1 bg-accent/10 rounded-full">
        {{ skill.name }}
      </span>
    </div>

    <!-- Project Title -->
    <h3 class="group-hover:text-accent text-xl md:text-2xl font-semibold mb-3 text-dark-primary dark:text-light-primary font-primary">
      {{ project.name }}
    </h3>

    <!-- Project Description -->
    <p v-if="project.description" class="text-paragraph dark:text-gray-300 text-sm font-body line-clamp-3 max-w-sm">
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
</style>