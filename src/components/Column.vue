<script setup lang="ts">
import { Column } from "@/types";
import TaskList from "./TaskList.vue";
const { column } = defineProps<{ column: Column }>();
</script>

<template>
  <section class="grid gap-6 w-[280px] shrink-0 self-start">
    <div class="flex items-center gap-3">
      <div class="w-[15px] h-[15px] bg-primary shrink-0 rounded-full"></div>
      <h3 class="text-gray-300 font-bold text-sm">
        {{ column.title }} ({{ column.tasks.length }})
      </h3>
    </div>

    <TaskList :tasks="column.tasks" />
  </section>
</template>
