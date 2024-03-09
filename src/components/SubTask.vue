<script setup lang="ts">
import { useTheme } from "@/composables";
import { cn } from "@/plugins";
import { ISubTask } from "@/interfaces";
import Checkbox from "./Checkbox.vue";

const { title, isCompleted } = defineProps<ISubTask>();

const { theme } = useTheme();
</script>

<template>
  <div
    :class="
      cn(
        'w-full p-3 font-bold flex items-center rounded-[4px]',
        { 'bg-gray-100 text-black': theme === 'light' },
        { 'bg-gray-600 text-gray': theme === 'dark' }
      )
    "
  >
    <Checkbox :checked="isCompleted" />

    <label
      for=""
      :class="cn('text-xs', { 'line-through text-gray': isCompleted })"
    >
      {{ title }}
    </label>
  </div>
</template>
@/interfaces
