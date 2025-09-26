<template>
  <section id="portfolio" class="py-20 bg-light-secondary dark:bg-dark-secondary">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-dark-primary dark:text-light-primary mb-4">
          Projets Réalisés
        </h2>
        <p class="text-lg text-paragraph dark:text-gray-400 font-body">Mes dernières réalisations</p>
      </div>

      <!-- Filter Navigation -->
      <div v-if="projects.length > 0 || skills.length > 0">
        <nav class="mb-12 border-b-2 border-accent/20">
          <ul class="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-2 lg:gap-4">
            <!-- All Filter -->
            <li class="cursor-pointer capitalize mt-4">
              <button
                @click="filterProjects('all')"
                class="flex text-center px-6 py-3 rounded-lg hover:text-accent transition-all font-body"
                :class="[
                  selectedSkill === 'all'
                    ? 'text-accent bg-accent/10 shadow-md'
                    : 'text-dark-primary dark:text-light-primary hover:bg-accent/5'
                ]">
                Tous ({{ projects.length }})
              </button>
            </li>

            <!-- Skill Filters -->
            <li
              v-for="skill in availableSkills"
              :key="skill.id"
              class="cursor-pointer capitalize mt-4">
              <button
                @click="filterProjects(skill.id)"
                :class="[
                  selectedSkill === skill.id
                    ? 'text-accent bg-accent/10 shadow-md'
                    : 'text-dark-primary dark:text-light-primary hover:bg-accent/5'
                ]"
                class="flex items-center text-center px-6 py-3 rounded-lg hover:text-accent transition-all font-body">
                <img
                  v-if="skill.image"
                  :src="skill.image"
                  :alt="skill.name"
                  class="w-5 h-5 mr-2 object-contain"
                />
                {{ skill.name }} ({{ getSkillProjectCount(skill.id) }})
              </button>
            </li>
          </ul>
        </nav>

        <!-- Projects Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- No projects message -->
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <div class="text-6xl mb-4">📭</div>
          <h3 class="text-xl font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary">
            Aucun projet trouvé
          </h3>
          <p class="text-paragraph dark:text-gray-300 font-body">
            Aucun projet ne correspond au filtre sélectionné.
          </p>
        </div>
      </div>

      <!-- No projects from database message -->
      <div v-else class="text-center py-12">
        <div class="text-6xl mb-4">📝</div>
        <h3 class="text-xl font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary">
          Aucun projet disponible
        </h3>
        <p class="text-paragraph dark:text-gray-300 font-body">
          Les projets seront chargés depuis la base de données. <br>
          Ajoutez des projets via le panneau d'administration.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

// Use composables - Nuxt auto-imports these
const { fetchProjects } = useProjects()
const { fetchSkills } = useSkills()

const projects = ref([])
const skills = ref([])
const selectedSkill = ref('all')
const filteredProjects = ref([])


// Get unique skills that are used in projects
const availableSkills = computed(() => {
  const projectSkills = new Set()
  const skillsMap = new Map()

  // First, add all skills to the map
  skills.value.forEach(skill => {
    skillsMap.set(skill.id, skill)
  })

  // Then collect skills used in projects (check both new skills array and old skill field)
  projects.value.forEach(project => {
    // Check new skills array first
    if (project.skills && project.skills.length > 0) {
      project.skills.forEach(skill => {
        projectSkills.add(skill.id)
        if (!skillsMap.has(skill.id)) {
          skillsMap.set(skill.id, skill)
        }
      })
    }
    // Fallback to old skill field for backward compatibility
    else if (project.skill) {
      // Find skill by name in skills array for backward compatibility
      const matchingSkill = skills.value.find(s => s.name === project.skill)
      if (matchingSkill) {
        projectSkills.add(matchingSkill.id)
      }
    }
  })

  // Return skills that are used in projects
  return Array.from(skillsMap.values()).filter(skill => projectSkills.has(skill.id))
})

// Get count of projects for a specific skill
const getSkillProjectCount = (skillId) => {
  return projects.value.filter(project => {
    // Check new skills array first
    if (project.skills && project.skills.length > 0) {
      return project.skills.some(skill => skill.id === skillId)
    }
    // Fallback to old skill field for backward compatibility
    else if (project.skill) {
      const matchingSkill = skills.value.find(s => s.name === project.skill)
      return matchingSkill && matchingSkill.id === skillId
    }
    return false
  }).length
}

// Filter projects by skill
const filterProjects = (skillId) => {
  selectedSkill.value = skillId

  if (skillId === 'all') {
    filteredProjects.value = projects.value
  } else {
    filteredProjects.value = projects.value.filter(project => {
      // Check new skills array first (project can have multiple skills)
      if (project.skills && project.skills.length > 0) {
        return project.skills.some(skill => skill.id === skillId)
      }
      // Fallback to old skill field for backward compatibility
      else if (project.skill) {
        const matchingSkill = skills.value.find(s => s.name === project.skill)
        return matchingSkill && matchingSkill.id === skillId
      }
      return false
    })
  }
}

onMounted(async () => {
  // Load projects and skills
  const [projectsResult, skillsResult] = await Promise.all([
    fetchProjects(),
    fetchSkills()
  ])

  if (projectsResult.data) {
    projects.value = projectsResult.data
    filteredProjects.value = projectsResult.data // Show all by default
  }

  if (skillsResult.data) {
    skills.value = skillsResult.data
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