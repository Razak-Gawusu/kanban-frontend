<script setup lang="ts">
import { ITask } from "@/interfaces";
import Task from "./Task.vue";

const { tasks = [] } = defineProps<{ tasks: ITask[] }>();
</script>

<template>
  <div class="flex flex-col gap-5">
    <Task v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>
@/interfaces
