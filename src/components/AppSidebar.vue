<script setup lang="ts">
import Icon from "./Icon.vue";
import ToggleTheme from "./ToggleTheme.vue";
import Button from "./Button.vue";
import Board from "./Board.vue";

import { useTheme } from "../composables";
import { cn } from "../plugins";
const { hideSidebar } = defineProps<{ hideSidebar: boolean }>();
const { theme } = useTheme();
const emit = defineEmits<{
  (e: "update:hideSidebar"): void;
}>();
</script>

<template>
  <section
    :class="
      cn(
        'fixed h-screen w-[260px] lg:w-[300px] max-md:hidden border-r border-gray-50 flex flex-col justify-between pr-5 lg:pr-6',
        { 'bg-white': theme === 'light' },
        { 'bg-gray-500 text-white border-gray-400': theme === 'dark' },
        { 'ml-[-260px] lg:ml-[-300px] transition-all ease-in-out': hideSidebar }
      )
    "
  >
    <div class="grid gap-14">
      <div class="px-7 py-8">
        <Icon name="kanbanLogo" :color="theme === 'dark' ? 'white' : 'black'" />
      </div>
      <Board />
    </div>

    <div class="my-12 flex flex-col gap-2">
      <div class="mx-6">
        <ToggleTheme />
      </div>
      <div class="pr-6">
        <Button
          @click="emit('update:hideSidebar')"
          variant="tertiary"
          size="large"
          class="text-gray-300 hover:text-primary"
          :class="
            cn('w-full gap-4 rounded-none rounded-r-full', {
              'hover:bg-white': theme === 'dark',
            })
          "
        >
          <template #leftIcon>
            <Icon name="eyeSlash" />
          </template>
          Hide Sidebar
        </Button>
      </div>
    </div>
  </section>
</template>
