<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div class="mt-3">
        <h3 class="text-lg font-medium text-gray-900 mb-4">
          {{ skill ? 'Edit Skill' : 'Add Skill' }}
        </h3>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <UiInput
              v-model="form.name"
              placeholder="Enter skill name"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Image</label>
            <input
              type="file"
              @change="handleFileChange"
              accept="image/*"
              class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <div v-if="form.image" class="mt-2">
              <img :src="form.image" alt="Preview" class="w-20 h-20 object-cover rounded-lg">
            </div>
          </div>

          <div v-if="error" class="text-red-600 text-sm">
            {{ error }}
          </div>

          <div class="flex space-x-3 pt-4">
            <UiButton type="submit" :disabled="loading" class="flex-1">
              {{ loading ? 'Saving...' : (skill ? 'Update' : 'Create') }}
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
  skill?: any
}>()

const { createSkill, updateSkill, uploadSkillImage } = useSkills()

const form = reactive({
  name: props.skill?.name || '',
  image: props.skill?.image || ''
})

const loading = ref(false)
const error = ref('')
const selectedFile = ref<File | null>(null)

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    selectedFile.value = target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      form.image = e.target?.result as string
    }
    reader.readAsDataURL(target.files[0])
  }
}

const handleSubmit = async () => {
  loading.value = true
  error.value = ''

  try {
    let imageUrl = form.image

    if (selectedFile.value) {
      const { data, error: uploadError } = await uploadSkillImage(selectedFile.value)
      if (uploadError) {
        error.value = uploadError
        loading.value = false
        return
      }
      imageUrl = data!
    }

    const skillData = {
      name: form.name,
      image: imageUrl
    }

    if (props.skill) {
      const { error: updateError } = await updateSkill(props.skill.id, skillData)
      if (updateError) {
        error.value = updateError
        loading.value = false
        return
      }
    } else {
      const { error: createError } = await createSkill(skillData)
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