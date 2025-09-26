<template>
  <section id="skills" class="bg-light-tail-100 dark:bg-dark-navy-500 py-12">
    <div class="container mx-auto">
      <div v-if="skills.length > 0" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="flex items-center justify-center group hover:scale-110 transition-transform duration-300">
          <img
            v-if="skill.image"
            :src="skill.image"
            :alt="skill.name"
            :title="skill.name"
            class="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 rounded-full"
          />
          <div
            v-else
            class="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 bg-accent/20 rounded-lg flex items-center justify-center text-accent font-bold">
            {{ skill.name.charAt(0) }}
          </div>
        </div>
      </div>

      <!-- Fallback if no skills from database -->
      <div v-else class="text-center text-muted-foreground">
        <p class="text-lg font-body">Les compétences seront chargées depuis la base de données.</p>
        <p class="text-sm mt-2 font-body">Ajoutez des compétences via le panneau d'administration.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const { fetchSkills } = useSkills()

const skills = ref([])

onMounted(async () => {
  const result = await fetchSkills()
  if (result.data) {
    skills.value = result.data
  }
})
</script>