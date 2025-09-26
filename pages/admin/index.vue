<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-700">{{ user?.email }}</span>
            <UiButton @click="handleSignOut" variant="outline" size="sm">
              Sign Out
            </UiButton>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Skills Section -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-900">Skills</h3>
                <UiButton @click="openSkillModal()">
                  Add Skill
                </UiButton>
              </div>

              <div class="space-y-3">
                <div
                  v-for="skill in skills"
                  :key="skill.id"
                  class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      v-if="skill.image"
                      :src="skill.image"
                      :alt="skill.name"
                      class="w-10 h-10 rounded-lg object-cover"
                    >
                    <span class="font-medium">{{ skill.name }}</span>
                  </div>
                  <div class="flex space-x-2">
                    <UiButton @click="openSkillModal(skill)" variant="outline" size="sm">
                      Edit
                    </UiButton>
                    <UiButton @click="deleteSkillItem(skill.id)" variant="destructive" size="sm">
                      Delete
                    </UiButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Projects Section -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-900">Projects</h3>
                <UiButton @click="openProjectModal()">
                  Add Project
                </UiButton>
              </div>

              <div class="space-y-3">
                <div
                  v-for="project in projects"
                  :key="project.id"
                  class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      v-if="project.image_or_video"
                      :src="project.image_or_video"
                      :alt="project.name"
                      class="w-10 h-10 rounded-lg object-cover"
                    >
                    <div>
                      <span class="font-medium block">{{ project.name }}</span>
                      <span class="text-sm text-gray-500">{{ project.skill }}</span>
                    </div>
                  </div>
                  <div class="flex space-x-2">
                    <UiButton @click="openProjectModal(project)" variant="outline" size="sm">
                      Edit
                    </UiButton>
                    <UiButton @click="deleteProjectItem(project.id)" variant="destructive" size="sm">
                      Delete
                    </UiButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skill Modal -->
    <AdminSkillModal
      v-if="skillModalOpen"
      :skill="currentSkill"
      @close="closeSkillModal"
      @saved="onSkillSaved"
    />

    <!-- Project Modal -->
    <AdminProjectModal
      v-if="projectModalOpen"
      :project="currentProject"
      @close="closeProjectModal"
      @saved="onProjectSaved"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: false
})

const { user, signOut } = useAuth()
const { fetchSkills, deleteSkill } = useSkills()
const { fetchProjects, deleteProject } = useProjects()

const skills = ref<any[]>([])
const projects = ref<any[]>([])

const skillModalOpen = ref(false)
const projectModalOpen = ref(false)
const currentSkill = ref<any>(null)
const currentProject = ref<any>(null)

const loadSkills = async () => {
  const { data } = await fetchSkills()
  if (data) skills.value = data
}

const loadProjects = async () => {
  const { data } = await fetchProjects()
  if (data) projects.value = data
}

const handleSignOut = async () => {
  await signOut()
}

const openSkillModal = (skill?: any) => {
  currentSkill.value = skill || null
  skillModalOpen.value = true
}

const closeSkillModal = () => {
  skillModalOpen.value = false
  currentSkill.value = null
}

const onSkillSaved = () => {
  closeSkillModal()
  loadSkills()
}

const deleteSkillItem = async (id: string) => {
  if (confirm('Are you sure you want to delete this skill?')) {
    await deleteSkill(id)
    loadSkills()
  }
}

const openProjectModal = (project?: any) => {
  currentProject.value = project || null
  projectModalOpen.value = true
}

const closeProjectModal = () => {
  projectModalOpen.value = false
  currentProject.value = null
}

const onProjectSaved = () => {
  closeProjectModal()
  loadProjects()
}

const deleteProjectItem = async (id: string) => {
  if (confirm('Are you sure you want to delete this project?')) {
    await deleteProject(id)
    loadProjects()
  }
}

onMounted(() => {
  loadSkills()
  loadProjects()
})
</script>