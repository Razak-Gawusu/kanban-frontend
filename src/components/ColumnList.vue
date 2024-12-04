<script setup lang="ts">
import { IColumn } from "@/interfaces";
import { cn } from "@/plugins";
import { useEditBoard, useTheme } from "@/composables";
import BoardForm from "./BoardForm.vue";
import { Modal, Icon, Button, Column } from "@/components";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const { theme } = useTheme();

const { columns, title } = defineProps<{ columns: IColumn[]; title: string }>();

const { openModal, closeModal, isLoadingEditBoard, isOpen, editBoard } =
  useEditBoard(computed(() => route.params.boardId));

const initialData = computed(() => ({ title, columns }));
</script>

<template>
  <div class="column-list flex gap-6 overflow-x-auto h-full">
    <Column v-for="column in columns" :key="column.id" :column="column" />

    <div
      :class="
        cn(
          'mt-11 w-[280px] shrink-0 rounded-md grid place-items-center',
          { 'add-column-light': theme === 'light' },
          { 'add-column-dark': theme === 'dark' }
        )
      "
    >
      <Button @click="openModal" variant="tertiary" size="large">
        <template #leftIcon>
          <Icon name="plus" />
        </template>
        New Column
      </Button>
    </div>
  </div>

  <Modal :isOpen="isOpen" @close-modal="closeModal">
    <BoardForm
      title="Edit Board"
      @submit="editBoard"
      :initial-data="initialData"
      :is-loading="isLoadingEditBoard"
      edit
    />
  </Modal>
</template>

<style scoped>
.add-column-light {
  background: linear-gradient(
    180deg,
    #e9effa 0%,
    rgba(233, 239, 250, 0.5) 100%
  );
}
.add-column-dark {
  background: linear-gradient(
    180deg,
    rgba(43, 44, 55, 0.25) 0%,
    rgba(43, 44, 55, 0.13) 100%
  );
}

/* For Firefox */
.column-list {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; /* thumb color, track color */
}

/* For WebKit-based browsers (Chrome, Safari) */
.column-list::-webkit-scrollbar {
  width: 12px; /* width of the scrollbar */
}

.column-list::-webkit-scrollbar-thumb {
  background-color: transparent; /* color of the thumb */
}

.column-list::-webkit-scrollbar-track {
  background-color: transparent; /* color of the track */
}
</style>
@/interfaces
