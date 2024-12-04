<script setup lang="ts">
import { useTheme } from "@/composables";
import { cn } from "@/plugins";
import { ISubTask } from "@/interfaces";
import Checkbox from "./Checkbox.vue";

defineProps<ISubTask>();

const { theme } = useTheme();
const emit = defineEmits(["change"]);
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
    <Checkbox
      :checked="is_completed"
      :id="String(id)"
      @change="emit('change')"
    />

    <label
      :for="String(id)"
      :class="cn('text-xs', { 'line-through text-gray': is_completed })"
    >
      {{ title }}
    </label>
  </div>
</template>
