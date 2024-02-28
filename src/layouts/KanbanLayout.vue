<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import AppSidebar from "../components/AppSidebar.vue";

import { useSidebar } from "../composables";
import { cn } from "../plugins";

const { hideSidebar, toggleSidebar } = useSidebar();
</script>

<template>
  <div class="">
    <AppSidebar
      :hideSidebar="hideSidebar"
      @update:hideSidebar="toggleSidebar"
    />
    <div
      :class="
        cn('md:ml-[260px] lg:ml-[300px] flex flex-col h-screen', {
          'md:ml-0 lg:ml-0': hideSidebar,
        })
      "
    >
      <AppHeader />
      <slot></slot>
    </div>
  </div>
</template>
