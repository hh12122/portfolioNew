<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div class="mt-3">
        <h3 class="text-lg font-medium text-gray-900 mb-4">
          {{ project ? 'Edit Project' : 'Add Project' }}
        </h3>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <UiInput
              v-model="form.name"
              placeholder="Enter project name"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Primary Skill (for backward compatibility)</label>
            <select
              v-model="form.skill"
              required
              :disabled="loadingSkills"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="" disabled>
                {{ loadingSkills ? 'Loading skills...' : 'Select primary skill' }}
              </option>
              <option v-for="skill in skills" :key="skill.id" :value="skill.name">
                {{ skill.name }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Skills (Select multiple)</label>
            <div v-if="loadingSkills" class="text-sm text-gray-500">Loading skills...</div>
            <div v-else class="space-y-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3">
              <label
                v-for="skill in skills"
                :key="skill.id"
                class="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
              >
                <input
                  type="checkbox"
                  :value="skill.id"
                  v-model="form.selectedSkills"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <img
                  v-if="skill.image"
                  :src="skill.image"
                  :alt="skill.name"
                  class="w-6 h-6 object-contain"
                />
                <span class="text-sm">{{ skill.name }}</span>
              </label>
            </div>
            <p class="text-xs text-gray-500 mt-1">
              Select all skills used in this project. This enables better filtering.
            </p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">URL</label>
            <UiInput
              v-model="form.url"
              placeholder="Enter project URL"
              type="url"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              v-model="form.description"
              placeholder="Enter project description"
              class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Image/Video</label>
            <input
              type="file"
              @change="handleFileChange"
              accept="image/*,video/*"
              class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <div v-if="form.image_or_video" class="mt-2">
              <img :src="form.image_or_video" alt="Preview" class="w-20 h-20 object-cover rounded-lg">
            </div>
          </div>

          <div v-if="error" class="text-red-600 text-sm">
            {{ error }}
          </div>

          <div class="flex space-x-3 pt-4">
            <UiButton type="submit" :disabled="loading" class="flex-1">
              {{ loading ? 'Saving...' : (project ? 'Update' : 'Create') }}
            </UiButton>
            <UiButton type="button" @click="$emit('close')" variant="outline" class="flex-1">
              Cancel
            </UiButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close', 'saved'])
const props = defineProps<{
  project?: any
}>()

const { createProject, updateProject, uploadProjectMedia, createProjectWithSkills, updateProjectWithSkills } = useProjects()
const { fetchSkills } = useSkills()

const form = reactive({
  name: props.project?.name || '',
  skill: props.project?.skill || '',
  url: props.project?.url || '',
  description: props.project?.description || '',
  image_or_video: props.project?.image_or_video || '',
  selectedSkills: props.project?.skills ? props.project.skills.map(s => s.id) : []
})

const loading = ref(false)
const error = ref('')
const selectedFile = ref<File | null>(null)
const skills = ref<any[]>([])
const loadingSkills = ref(false)

// Fetch skills when component mounts
onMounted(async () => {
  loadingSkills.value = true
  const { data, error: fetchError } = await fetchSkills()
  if (data) {
    skills.value = data
  } else if (fetchError) {
    console.error('Failed to fetch skills:', fetchError)
  }
  loadingSkills.value = false
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    selectedFile.value = target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      form.image_or_video = e.target?.result as string
    }
    reader.readAsDataURL(target.files[0])
  }
}

const handleSubmit = async () => {
  loading.value = true
  error.value = ''

  try {
    let mediaUrl = form.image_or_video

    if (selectedFile.value) {
      const { data, error: uploadError } = await uploadProjectMedia(selectedFile.value)
      if (uploadError) {
        error.value = uploadError
        loading.value = false
        return
      }
      mediaUrl = data!
    }

    const projectData = {
      name: form.name,
      skill: form.skill,
      url: form.url || null,
      description: form.description || null,
      image_or_video: mediaUrl
    }

    if (props.project) {
      // Update project with skills
      const { error: updateError } = await updateProjectWithSkills(
        props.project.id,
        projectData,
        form.selectedSkills
      )
      if (updateError) {
        error.value = updateError
        loading.value = false
        return
      }
    } else {
      // Create project with skills
      const { error: createError } = await createProjectWithSkills(
        projectData,
        form.selectedSkills
      )
      if (createError) {
        error.value = createError
        loading.value = false
        return
      }
    }

    emit('saved')
  } catch (err: any) {
    error.value = err.message
  }

  loading.value = false
}
</script>