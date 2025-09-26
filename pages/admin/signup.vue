<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Admin Account
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
              placeholder="Enter your password (min 6 characters)"
              class="mt-1"
              minlength="6"
            />
          </div>
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <UiInput
              id="confirmPassword"
              v-model="form.confirmPassword"
              type="password"
              required
              placeholder="Confirm your password"
              class="mt-1"
            />
          </div>
        </div>

        <div v-if="error" class="text-red-600 text-sm text-center">
          {{ error }}
        </div>

        <div v-if="success" class="text-green-600 text-sm text-center">
          {{ success }}
        </div>

        <div>
          <UiButton
            type="submit"
            :disabled="loading"
            class="w-full"
          >
            {{ loading ? 'Creating Account...' : 'Sign Up' }}
          </UiButton>
        </div>

        <div class="text-center">
          <NuxtLink to="/admin/login" class="text-blue-600 hover:text-blue-800">
            Already have an account? Sign In
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

const supabase = useSupabaseClient()
const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')
const success = ref('')

const handleSubmit = async () => {
  loading.value = true
  error.value = ''
  success.value = ''

  // Validation
  if (form.password !== form.confirmPassword) {
    error.value = 'Passwords do not match'
    loading.value = false
    return
  }

  if (form.password.length < 6) {
    error.value = 'Password must be at least 6 characters'
    loading.value = false
    return
  }

  try {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    })

    if (signUpError) {
      error.value = signUpError.message
    } else {
      success.value = 'Account created successfully! Please check your email for verification, then sign in.'
      setTimeout(() => {
        router.push('/admin/login')
      }, 2000)
    }
  } catch (err: any) {
    error.value = err.message
  }

  loading.value = false
}
</script>