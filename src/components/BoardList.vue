<script setup lang="ts">
import { cn } from "../plugins";
import BoardForm from "./BoardForm.vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import Modal from "./Modal.vue";
import { useModal } from "@/composables";

type Board = {
  id: number;
  label: string;
};
const { boards, activeBoard } = defineProps<{
  boards: Board[];
  activeBoard: number | null;
}>();
const emit = defineEmits<{
  (e: "update:activeBoard", id: number): void;
}>();

const { isOpen, openModal, closeModal } = useModal();
</script>

<template>
  <div>
    <Button
      v-for="{ id, label } in boards"
      :key="id"
      @click="emit('update:activeBoard', id)"
      :variant="id === activeBoard ? 'primary' : 'tertiary'"
      size="large"
      :class="cn('w-full rounded-none rounded-r-full pl-6 lg:pl-8 gap-4')"
    >
      <template #leftIcon>
        <Icon name="boardIcon" />
      </template>
      {{ label }}
    </Button>

    <Button
      @click="openModal"
      variant="tertiary"
      size="large"
      :class="
        cn('w-full rounded-none rounded-r-full pl-6 lg:pl-8 gap-4 text-primary')
      "
    >
      <template #leftIcon>
        <Icon name="boardIcon" />
      </template>
      + Create New Board
    </Button>
  </div>

  <Modal :isOpen="isOpen" @close:modal="closeModal">
    <BoardForm title="Add New Board" />
  </Modal>
</template>
