<template>
  <section id="portfolio" class="py-20 bg-light-secondary dark:bg-dark-secondary overflow-hidden">
    <div class="container mx-auto">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-dark-primary dark:text-light-primary mb-4 transform transition-all duration-1000 ease-out"
            :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'">
          {{ $t('projects.title') }}
        </h2>
        <p class="text-lg text-paragraph dark:text-gray-400 font-body transform transition-all duration-1000 ease-out delay-200"
           :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'">{{ $t('projects.subtitle') }}</p>
      </div>

      <!-- Filter Navigation -->
      <div v-if="projects.length > 0 || skills.length > 0">
        <nav class="mb-12 border-b-2 border-accent/20 transform transition-all duration-1000 ease-out delay-400"
             :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'">
          <ul class="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-2 lg:gap-4">
            <!-- All Filter -->
            <li class="cursor-pointer capitalize mt-4 transform transition-all duration-500 ease-out hover:scale-105"
                :style="{ transitionDelay: `${600}ms` }"
                :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
              <button
                @click="filterProjects('all')"
                class="flex text-center px-6 py-3 rounded-lg hover:text-accent transition-all duration-300 font-body relative overflow-hidden group hover:shadow-lg hover:-translate-y-1"
                :class="[
                  selectedSkill === 'all'
                    ? 'text-accent bg-accent/10 shadow-md scale-105'
                    : 'text-dark-primary dark:text-light-primary hover:bg-accent/5'
                ]">
                <span class="relative z-10">{{ $t('projects.filter.all') }} ({{ projects.length }})</span>
                <div class="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-hover/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </li>

            <!-- Skill Filters -->
            <li
              v-for="(skill, index) in availableSkills"
              :key="skill.id"
              class="cursor-pointer capitalize mt-4 transform transition-all duration-500 ease-out hover:scale-105"
              :style="{ transitionDelay: `${700 + index * 100}ms` }"
              :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
              <button
                @click="filterProjects(skill.id)"
                :class="[
                  selectedSkill === skill.id
                    ? 'text-accent bg-accent/10 shadow-md scale-105'
                    : 'text-dark-primary dark:text-light-primary hover:bg-accent/5'
                ]"
                class="flex items-center text-center px-6 py-3 rounded-lg hover:text-accent transition-all duration-300 font-body relative overflow-hidden group hover:shadow-lg hover:-translate-y-1">
                <img
                  v-if="skill.image"
                  :src="skill.image"
                  :alt="skill.name"
                  class="w-5 h-5 mr-2 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span class="relative z-10">{{ skill.name }} ({{ getSkillProjectCount(skill.id) }})</span>
                <div class="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-hover/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </li>
          </ul>
        </nav>

        <!-- Projects Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] relative">
          <TransitionGroup
            name="project-filter"
            tag="div"
            class="contents"
            appear
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @leave="onLeave">
            <div
              v-for="(project, index) in filteredProjects"
              :key="project.id"
              :data-index="index"
              class="transform transition-all duration-500 ease-out will-change-transform">
              <ProjectCard :project="project" />
            </div>
          </TransitionGroup>

          <!-- Loading overlay during filter transitions -->
          <div
            v-if="isFilterTransitioning"
            class="absolute inset-0 bg-light-secondary/50 dark:bg-dark-secondary/50 backdrop-blur-sm flex items-center justify-center rounded-lg transition-opacity duration-300">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 border-3 border-accent/30 border-t-accent rounded-full animate-spin"></div>
              <span class="text-dark-primary dark:text-light-primary font-medium">Filtrage en cours...</span>
            </div>
          </div>
        </div>

        <!-- No projects message -->
        <div v-if="filteredProjects.length === 0"
             class="text-center py-12 transform transition-all duration-1000 ease-out"
             :class="projectsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'">
          <div class="text-6xl mb-4 animate-bounce">📭</div>
          <h3 class="text-xl font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary transform transition-all duration-700 ease-out delay-200"
              :class="projectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
            {{ $t('projects.empty.title') }}
          </h3>
          <p class="text-paragraph dark:text-gray-300 font-body transform transition-all duration-700 ease-out delay-400"
             :class="projectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
            {{ $t('projects.empty.description') }}
          </p>
        </div>
      </div>

      <!-- No projects from database message -->
      <div v-else class="text-center py-12 transform transition-all duration-1000 ease-out delay-600"
           :class="isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'">
        <div class="text-6xl mb-4 animate-pulse">📝</div>
        <h3 class="text-xl font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary transform transition-all duration-700 ease-out delay-800"
            :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
          {{ $t('projects.fallback.title') }}
        </h3>
        <p class="text-paragraph dark:text-gray-300 font-body transform transition-all duration-700 ease-out delay-1000"
           :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
          {{ $t('projects.fallback.description') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, nextTick, watch } from 'vue'
import ProjectCard from './ProjectCard.vue'

// Use composables - Nuxt auto-imports these
const { fetchProjects } = useProjects()
const { fetchSkills } = useSkills()

const projects = ref([])
const skills = ref([])
const selectedSkill = ref('all')
const filteredProjects = ref([])

// Animation states
const isVisible = ref(false)
const projectsVisible = ref(false)
const isFilterTransitioning = ref(false)


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

// Transition animation methods
const onBeforeEnter = (el) => {
  const index = parseInt(el.dataset.index)
  el.style.opacity = '0'
  el.style.transform = `translateY(30px) scale(0.95) rotateX(10deg)`
  el.style.transitionDelay = `${index * 100}ms`
}

const onEnter = (el, done) => {
  const index = parseInt(el.dataset.index)
  setTimeout(() => {
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    el.style.opacity = '1'
    el.style.transform = 'translateY(0) scale(1) rotateX(0deg)'

    // Add a subtle bounce effect
    setTimeout(() => {
      el.style.transform = 'translateY(-5px) scale(1.02) rotateX(0deg)'
      setTimeout(() => {
        el.style.transform = 'translateY(0) scale(1) rotateX(0deg)'
        done()
      }, 150)
    }, 300)
  }, index * 100)
}

const onLeave = (el, done) => {
  const index = parseInt(el.dataset.index)
  el.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.8, 1)'
  el.style.transitionDelay = `${index * 50}ms`

  // Create different exit animations based on position
  const randomDirection = Math.random()
  if (randomDirection < 0.33) {
    // Slide left and fade
    el.style.transform = 'translateX(-100px) scale(0.8) rotateY(-15deg)'
  } else if (randomDirection < 0.66) {
    // Slide right and fade
    el.style.transform = 'translateX(100px) scale(0.8) rotateY(15deg)'
  } else {
    // Scale down and fade
    el.style.transform = 'translateY(20px) scale(0.7) rotateX(-10deg)'
  }

  el.style.opacity = '0'

  setTimeout(() => {
    done()
  }, 400 + (index * 50))
}

// Filter projects by skill
const filterProjects = (skillId) => {
  // Start transition state
  isFilterTransitioning.value = true

  // Small delay to show loading state
  setTimeout(() => {
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

    // End transition state after content is updated
    setTimeout(() => {
      isFilterTransitioning.value = false
    }, 100)
  }, 200)
}

// Watch for changes in filteredProjects to trigger animations
watch(filteredProjects, () => {
  if (isVisible.value) {
    nextTick(() => {
      projectsVisible.value = true
    })
  }
}, { immediate: false })

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

  // Trigger initial animations
  await nextTick()
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  // Trigger project animations after initial elements are visible
  setTimeout(() => {
    projectsVisible.value = true
  }, 1200)
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Project Filter Transitions */
.project-filter-enter-active,
.project-filter-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-filter-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95) rotateX(10deg);
}

.project-filter-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.8) rotateX(-10deg);
}

.project-filter-move {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced grid container for smooth layout changes */
.project-grid {
  transition: min-height 0.3s ease-out;
}

/* Loading spinner border fix */
.border-3 {
  border-width: 3px;
}

/* Ensure proper perspective for 3D transforms */
.contents {
  perspective: 1000px;
}

/* Smooth height transitions for the grid container */
.grid {
  transition: all 0.3s ease-out;
}

/* Enhanced backdrop blur effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Custom easing for more natural animations */
@media (prefers-reduced-motion: no-preference) {
  .project-filter-enter-active {
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
}

/* Accessibility: respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .project-filter-enter-active,
  .project-filter-leave-active,
  .project-filter-move {
    transition: opacity 0.2s ease;
    transform: none !important;
  }
}
</style>