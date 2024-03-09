<script setup lang="ts">
import { useEditBoard } from "@/composables";
import { Button, Icon, Modal, BoardForm } from "@/components";
import { IColumn } from "@/interfaces";
import { computed } from "vue";
import { useRoute } from "vue-router";

type Props = {
  title?: string;
  columns?: IColumn[];
};

const route = useRoute();
const { title, columns } = defineProps<Props>();
const { openModal, isLoadingEditBoard, isOpen, editBoard, closeModal } =
  useEditBoard(computed(() => route.params.boardId));

const initialData = computed(() => {
  return { title, columns };
});
</script>

<template>
  <div
    class="max-w-[343px] md:max-w-[400px] lg:max-w-[500px] grid gap-6 lg:gap-8 place-items-center"
  >
    <p class="text-lg font-bold text-center text-gray">
      This board is empty. Create a new column to get started.
    </p>
    <Button @click="openModal" variant="primary" size="large">
      <template #leftIcon>
        <Icon name="plus" />
      </template>
      Add New Column</Button
    >
  </div>

  <Modal :isOpen="isOpen" @close-modal="closeModal">
    <BoardForm
      title="Edit Board"
      :initialData="initialData"
      @submit="editBoard"
      :is-loading="isLoadingEditBoard"
      edit
    />
  </Modal>
</template>
