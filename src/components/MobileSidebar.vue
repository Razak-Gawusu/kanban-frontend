<script setup lang="ts">
import { cn } from "@/plugins";
import Board from "./Board.vue";
import ToggleTheme from "./ToggleTheme.vue";
import { useTheme } from "@/composables";

const { theme } = useTheme();
const props = defineProps(["class"]);
</script>

<template>
  <div
    :class="
      cn(
        'hidden absolute inset-0 top-[86px] h-screen w-screen bg-black-50 px-14 z-20 py-4',
        'md:hidden',
        props.class
      )
    "
  >
    <div
      :class="
        cn(
          'mobile-sidebar py-4 h-max w-[280px] rounded-lg grid gap-4',
          { 'bg-white': theme === 'light' },
          { 'bg-gray-500': theme === 'dark' }
        )
      "
    >
      <div class="pr-6">
        <Board />
      </div>
      <div class="px-3">
        <ToggleTheme />
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobile-sidebar {
  box-shadow: 0px 10px 20px 0px rgba(54, 78, 126, 0.25);
}
</style>
