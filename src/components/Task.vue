<script setup lang="ts">
import { useTheme } from "@/composables";
import { cn } from "@/plugins";
import { ITask } from "@/interfaces";
import { Modal, TaskDetails } from "@/components";
import { useModal, useGetBoard } from "@/composables";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const { task } = defineProps<{ task: ITask }>();
const { theme } = useTheme();
const { isOpen, openModal, closeModal } = useModal();
const { data } = useGetBoard(computed(() => route.params.boardId));

const numberOfSubTasksCompleted = computed(() => {
  let sum = 0;
  for (let item of task.subTasks) {
    if (item.is_completed) {
      sum += 1;
    }
  }
  return sum;
});
const subTasksTotal = computed(() => {
  return task.subTasks.length;
});

const columns = computed(() => data.value?.data.columns ?? []);
</script>

<template>
  <div
    @click="openModal"
    :class="
      cn(
        'group cursor-pointer task w-full px-4 py-6 shrink-0 font-bold grid gap-2 bg-white rounded-lg',
        { 'bg-gray-500': theme === 'dark' }
      )
    "
  >
    <h3
      :class="
        cn('text-[15px] text-black group-hover:text-primary', {
          'text-white': theme === 'dark',
        })
      "
    >
      {{ task.title }}
    </h3>
    <p class="text-sm text-gray">
      {{ numberOfSubTasksCompleted }} of {{ subTasksTotal }} substasks
    </p>
  </div>

  <Modal :isOpen="isOpen" @closeModal="closeModal">
    <TaskDetails
      :columns="columns"
      :task="task"
      :numberOfSubTasksCompleted="numberOfSubTasksCompleted"
      :subTasksTotal="subTasksTotal"
    />
  </Modal>
</template>

<style scoped>
.task {
  box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1);
}
</style>
@/interfaces
