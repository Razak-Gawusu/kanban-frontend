<script setup lang="ts">
import { LoginForm } from "@/components";
import { useLogin } from "@/composables";
import { loginSchema } from "@/schema";

const { login, isLoading } = useLogin();
</script>

<template>
  <div class="mt-24 h-full flex flex-col justify-between">
    <div>
      <div class="grid gap-2">
        <h1 class="text-3xl font-bold">Welcome!</h1>
        <p class="text-sm text-gray-400">Log In your account</p>
      </div>

      <LoginForm
        @login="login"
        :isLoading="isLoading"
        :loginSchema="loginSchema"
      />
    </div>

    <div class="flex gap-1 text-sm">
      New to KreditAfrica?
      <RouterLink :to="{ name: 'signup' }" class="text-primary hover:underline"
        >Get Started</RouterLink
      >
    </div>
  </div>
</template>
