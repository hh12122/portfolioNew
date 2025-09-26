<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to Admin Panel
        </h2>
      </div>
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <UiInput
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter your email"
              class="mt-1"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <UiInput
              id="password"
              v-model="form.password"
              type="password"
              required
              placeholder="Enter your password"
              class="mt-1"
            />
          </div>
        </div>

        <div v-if="error" class="text-red-600 text-sm text-center">
          {{ error }}
        </div>

        <div>
          <UiButton
            type="submit"
            :disabled="loading"
            class="w-full"
          >
            {{ loading ? 'Signing in...' : 'Sign In' }}
          </UiButton>
        </div>

        <div class="text-center">
          <NuxtLink to="/admin/signup" class="text-blue-600 hover:text-blue-800">
            Don't have an account? Sign Up
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

const { signIn } = useAuth()
const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

const handleSubmit = async () => {
  loading.value = true
  error.value = ''

  // Debug: Check form values
  console.log('Form data:', form)

  if (!form.email || !form.password) {
    error.value = 'Please fill in both email and password'
    loading.value = false
    return
  }

  const { data, error: signInError } = await signIn(form.email, form.password)

  if (signInError) {
    error.value = signInError
  } else {
    await router.push('/admin')
  }

  loading.value = false
}
</script>