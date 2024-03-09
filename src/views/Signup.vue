<script setup lang="ts">
import { SignupForm } from "@/components";
import { useSignup } from "@/composables";
import { signupSchema } from "@/schema";
const { signup, isLoading } = useSignup();
</script>

<template>
  <div class="mt-24 h-full flex flex-col justify-between">
    <div>
      <div class="grid gap-2">
        <h1 class="text-3xl font-bold">Create an Account</h1>
        <p class="text-sm text-gray-400">
          Provide details to create kanban account
        </p>
      </div>

      <SignupForm
        @signup="signup"
        :isLoading="isLoading"
        :signupSchema="signupSchema"
      />
    </div>

    <div class="flex gap-1 text-sm">
      Already have an account?
      <RouterLink :to="{ name: 'login' }" class="text-primary hover:underline"
        >Login</RouterLink
      >
    </div>
  </div>
</template>
