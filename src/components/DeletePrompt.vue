<script setup lang="ts">
import { useTheme } from "@/composables";
import Button from "./Button.vue";
import { cn } from "@/plugins";

type DeletePromptType = {
  title: string;
  submitBtnLabel?: string;
  description: string;
  isLoading: boolean;
};
const { title, description, submitBtnLabel, isLoading } =
  defineProps<DeletePromptType>();
const emit = defineEmits(["closeModal", "submit"]);
const { theme } = useTheme();
</script>

<template>
  <div
    :class="
      cn('w-full grid gap-6 p-6 md:p-8 rounded-md', {
        'bg-white': theme === 'light',
        'bg-gray-500': theme === 'dark',
      })
    "
  >
    <h2 class="text-lg font-bold text-error">{{ title }}</h2>
    <p class="text-[13px] font-medium text-gray">{{ description }}</p>
    <div class="flex flex-col gap-4 md:flex-row md:gap-6">
      <Button
        @click="emit('submit')"
        :is-loading="isLoading"
        variant="destructive"
        size="large"
        class="w-full justify-center"
        >{{ submitBtnLabel ? submitBtnLabel : "Delete" }}</Button
      >
      <Button
        @click="emit('closeModal')"
        variant="secondary"
        size="large"
        class="w-full justify-center"
        >Cancel</Button
      >
    </div>
  </div>
</template>
