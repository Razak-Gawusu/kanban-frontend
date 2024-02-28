<script setup lang="ts">
import { Column as IColumn } from "@/types";
import Column from "./Column.vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import { cn } from "@/plugins";
import { useModal, useTheme } from "@/composables";
import Modal from "./Modal.vue";
import BoardForm from "./BoardForm.vue";

const { theme } = useTheme();
const { columns } = defineProps<{ columns: IColumn[] }>();
const { isOpen, openModal, closeModal } = useModal();
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

  <Modal :isOpen="isOpen" @close:modal="closeModal">
    <BoardForm title="Edit Board" />
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
