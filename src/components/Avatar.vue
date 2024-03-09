<script setup lang="ts">
import { setImage } from "@/helpers";
import { useTheme } from "@/composables";
import { cn } from "@/plugins";

const { theme } = useTheme();
const { username = "-" } = defineProps<{ username?: string }>();
</script>

<template>
  <div
    :class="
      cn('w-12 h-12 border-2 rounded-full overflow-hidden', {
        'border-gray-700': theme === 'dark',
      })
    "
  >
    <img :src="setImage(username)" alt="" />
  </div>
</template>
