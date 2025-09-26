<template>
  <section id="skills" class="bg-light-tail-100 dark:bg-dark-navy-500 py-12 overflow-hidden">
    <div class="container mx-auto">
      <div v-if="skills.length > 0" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <div
          v-for="(skill, index) in skills"
          :key="skill.id"
          :class="[
            'flex items-center justify-center group relative',
            'transform transition-all duration-700 ease-out',
            'hover:scale-110 hover:-translate-y-2 hover:rotate-3',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }">

          <!-- Animated background glow -->
          <div class="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-hover/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-xl"></div>

          <!-- Skill image/icon container -->
          <div class="relative z-10 p-2">
            <img
              v-if="skill.image"
              :src="skill.image"
              :alt="skill.name"
              :title="skill.name"
              class="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-500 rounded-full group-hover:shadow-2xl group-hover:shadow-accent/30"
            />
            <div
              v-else
              class="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 bg-accent/20 rounded-lg flex items-center justify-center text-accent font-bold group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent/30">
              {{ skill.name.charAt(0) }}
            </div>
          </div>

          <!-- Floating tooltip -->
          <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-2">
            <div class="bg-dark-primary dark:bg-light-primary text-light-primary dark:text-dark-primary px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-lg">
              {{ skill.name }}
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-primary dark:border-t-light-primary"></div>
            </div>
          </div>

          <!-- Ripple effect on hover -->
          <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping bg-accent transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- Fallback if no skills from database -->
      <div v-else class="text-center text-muted-foreground animate-on-scroll">
        <p class="text-lg font-body">{{ $t('skills.fallback.title') }}</p>
        <p class="text-sm mt-2 font-body">{{ $t('skills.fallback.subtitle') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
const { fetchSkills } = useSkills()

const skills = ref([])
const isVisible = ref(false)

onMounted(async () => {
  const result = await fetchSkills()
  if (result.data) {
    skills.value = result.data
  }

  // Trigger slide-in animation after skills are loaded
  await nextTick()
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>