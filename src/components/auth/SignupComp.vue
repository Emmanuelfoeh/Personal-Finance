<template>
  <div class="h-screen w-full flex flex-col lg:flex-row bg-beige-100 relative">
    <div class="h-full w-[35%] hidden lg:block p-7">
      <div class="h-full bg-image rounded-lg p-10">
        <div class="h-full text-white flex flex-col justify-between">
          <h2 class="text-3xl">Finance</h2>
          <div class="flex flex-col gap-y-8">
            <h2 class="text-3xl">Keep track of your money and save your future</h2>
            <p class="text-sm">
              Personal finance app puts you in control of your spending. Track transactions, set
              budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tablet and mobile header -->
    <div class="lg:hidden flex justify-center bg-gray-900 p-5 rounded-b-lg absolute top-0 w-full">
      <h3 class="text-3xl text-white">Finance</h3>
    </div>

    <!-- Form -->
    <div class="grow flex items-center justify-center px-4 md:p-16">
      <div class="bg-white  p-8 w-full md:w-[90%] lg:w-[70%] rounded-2xl">
        <h1 class="text-2xl font-extrabold pb-4">Sign Up</h1>
        <form @submit.prevent="handleSignup" class="flex flex-col gap-y-2.5">
          <PFInputText v-model="formData.name" label="Name" size="large" />
          <PFInputText v-model="formData.email" label="Email" type="email" size="large" />
          <PFPasswordInput
            v-model="formData.password"
            toggleMask
            label="Password"
            type="password"
            size="large"
            feedback="password must be at least 8 characters"
          />
          <PFPasswordInput
            v-model="formData.confirmPassword"
            label="Confirm Password"
            type="password"
            size="large"
          />
          <PFButton label="Create Account" class="text-white" size="large" />
          <div class="flex justify-center gap-x-4 mt-4">
            <p>Already have an account?</p>
            <RouterLink to="/login" class="font-[900] text-black underline">Login</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


import PFInputText from '../primevueComponent/PFInputText.vue'
import PFButton from '../primevueComponent/PFButton.vue'
// import { email } from '@vuelidate/validators'
import PFPasswordInput from '../primevueComponent/PFPasswordInput.vue'

const formData = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})
const handleSignup = () => {
  console.log('Form submitted:', formData)
}
</script>

<style scoped>
.bg-image {
  background-image: url('/src/assets/images/illustration-authentication.svg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;
}
</style>
