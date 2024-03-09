<script setup lang="ts">
import TextField from "./TextField.vue";
import Button from "./Button.vue";
import { ROUTES } from "@/helpers";
import { Form } from "vee-validate";

type Props = {
  isLoading: boolean;
  loginSchema: any;
};
const { isLoading, loginSchema } = defineProps<Props>();
const emit =
  defineEmits<(e: "login", payload: Record<string, string>) => void>();
</script>

<template>
  <Form
    @submit="emit('login', $event)"
    :validationSchema="loginSchema"
    class="grid gap-6 mt-10"
  >
    <TextField
      label="Your email"
      name="email"
      placeholder="example@gmail.com"
    />
    <div class="grid gap-2">
      <TextField label="Password" name="password" placeholder="password" />
      <div class="flex gap-1 text-sm">
        Forgot password?
        <RouterLink
          :to="ROUTES.auth.forgotPassword"
          class="text-primary hover:underline"
          >Reset Now</RouterLink
        >
      </div>
    </div>

    <Button
      :isLoading="isLoading"
      variant="primary"
      size="large"
      class="justify-center"
      >Login</Button
    >
  </Form>
</template>
