<script setup lang="ts">
import TextField from "./TextField.vue";
import { Form } from "vee-validate";
import Button from "./Button.vue";

type Props = {
  signupSchema: any;
  isLoading: boolean;
};

const { signupSchema, isLoading } = defineProps<Props>();
const emit =
  defineEmits<(e: "signup", payload: Record<string, string>) => void>();
</script>

<template>
  <Form
    @submit="emit('signup', $event)"
    :validation-schema="signupSchema"
    class="grid gap-6 mt-10"
  >
    <TextField label="Username" name="username" placeholder="username" />
    <TextField
      label="Your email"
      name="email"
      type="email"
      placeholder="example@gmail.com"
    />
    <TextField label="Password" name="password" placeholder="password" />

    <Button
      :isLoading="isLoading"
      variant="primary"
      size="large"
      class="justify-center"
      >Register Account</Button
    >
  </Form>
</template>
