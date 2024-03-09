<script setup lang="ts">
import { KanbanLogo } from "@/components";
import { cn } from "@/plugins";
</script>

<template>
  <div :class="cn('flex w-screen h-screen')">
    <div
      class="w-3/5 h-full bg-primary hidden md:grid place-items-center px-20"
    >
      <div class="w-full h-[400px] bg-white"></div>
    </div>
    <div class="w-2/5 bg-white h-full flex flex-col px-20 py-6">
      <KanbanLogo color="var(--black)" />

      <RouterView />
    </div>
  </div>
</template>
