<script setup lang="ts">
import { useTheme } from "@/composables";
import { cn } from "@/plugins";
import { ITask } from "@/interfaces";
import Modal from "./Modal.vue";
import { useModal } from "@/composables";
import TaskDetails from "./TaskDetails.vue";

const { task } = defineProps<{ task: ITask }>();
const { theme } = useTheme();
const { isOpen, openModal, closeModal } = useModal();
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
    <p class="text-sm text-gray">0 of 3 substasks</p>
  </div>

  <Modal :isOpen="isOpen" @close:modal="closeModal">
    <TaskDetails />
  </Modal>
</template>

<style scoped>
.task {
  box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1);
}
</style>
@/interfaces
