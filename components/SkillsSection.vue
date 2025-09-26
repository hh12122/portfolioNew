<template>
  <section id="skills" class="py-20 bg-light-primary dark:bg-dark-primary">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-dark-primary dark:text-light-primary mb-4">
          Compétences & Technologies
        </h2>
        <p class="text-lg text-paragraph dark:text-gray-400 font-body">Mon arsenal technique</p>
      </div>

      <div v-if="skills.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="group flex flex-col items-center p-6 bg-white dark:bg-dark-secondary rounded-lg border border-accent/20 hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <img
            v-if="skill.image"
            :src="skill.image"
            :alt="skill.name"
            class="w-16 h-16 mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <h3 class="text-sm font-semibold text-center text-dark-primary dark:text-light-primary font-body">
            {{ skill.name }}
          </h3>
        </div>
      </div>

      <!-- Categories if no data from DB -->
      <div v-else>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Langages -->
          <div class="bg-white dark:bg-dark-secondary rounded-lg p-6 border border-accent/20">
            <h3 class="text-xl font-bold text-accent mb-4 font-primary">Langages</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="lang in ['PHP', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Python']"
                    :key="lang"
                    class="px-3 py-1 bg-accent/10 text-dark-primary dark:text-light-primary rounded-full text-sm font-body">
                {{ lang }}
              </span>
            </div>
          </div>

          <!-- Frontend -->
          <div class="bg-white dark:bg-dark-secondary rounded-lg p-6 border border-accent/20">
            <h3 class="text-xl font-bold text-accent mb-4 font-primary">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in ['Vue.js', 'Angular', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']"
                    :key="tech"
                    class="px-3 py-1 bg-accent/10 text-dark-primary dark:text-light-primary rounded-full text-sm font-body">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Backend -->
          <div class="bg-white dark:bg-dark-secondary rounded-lg p-6 border border-accent/20">
            <h3 class="text-xl font-bold text-accent mb-4 font-primary">Backend</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in ['Symfony', 'Laravel', 'Node.js', 'Express.js']"
                    :key="tech"
                    class="px-3 py-1 bg-accent/10 text-dark-primary dark:text-light-primary rounded-full text-sm font-body">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Bases de données -->
          <div class="bg-white dark:bg-dark-secondary rounded-lg p-6 border border-accent/20">
            <h3 class="text-xl font-bold text-accent mb-4 font-primary">Bases de données</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="db in ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis']"
                    :key="db"
                    class="px-3 py-1 bg-accent/10 text-dark-primary dark:text-light-primary rounded-full text-sm font-body">
                {{ db }}
              </span>
            </div>
          </div>

          <!-- Outils -->
          <div class="bg-white dark:bg-dark-secondary rounded-lg p-6 border border-accent/20">
            <h3 class="text-xl font-bold text-accent mb-4 font-primary">Outils & DevOps</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tool in ['Docker', 'Git', 'AWS', 'CI/CD', 'REST API', 'GraphQL']"
                    :key="tool"
                    class="px-3 py-1 bg-accent/10 text-dark-primary dark:text-light-primary rounded-full text-sm font-body">
                {{ tool }}
              </span>
            </div>
          </div>

          <!-- CMS & Autres -->
          <div class="bg-white dark:bg-dark-secondary rounded-lg p-6 border border-accent/20">
            <h3 class="text-xl font-bold text-accent mb-4 font-primary">CMS & Mobile</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="cms in ['WordPress', 'Elementor', 'WooCommerce', 'Capacitor']"
                    :key="cms"
                    class="px-3 py-1 bg-accent/10 text-dark-primary dark:text-light-primary rounded-full text-sm font-body">
                {{ cms }}
              </span>
            </div>
          </div>
        </div>
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