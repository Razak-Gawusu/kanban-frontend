<script setup lang="ts">
import { RouterLink } from "vue-router";
import { cn } from "../plugins";
import BoardForm from "./BoardForm.vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import Modal from "./Modal.vue";
import { useCreateBoard } from "@/composables";

const { boards } = defineProps<{
  boards: any[];
  activeBoard: number | null;
}>();
const { openModal, closeModal, isOpen, onCreateBoard, isLoadingCreateBoard } =
  useCreateBoard();
</script>

<template>
  <div>
    <RouterLink
      :to="{ name: 'board', params: { boardId: id } }"
      v-slot="{ isActive }"
      v-for="{ id, title } in boards"
      :key="id"
    >
      <Button
        :variant="isActive ? 'primary' : 'tertiary'"
        :class="cn('w-full rounded-none rounded-r-full pl-6 lg:pl-8 gap-4')"
      >
        <template #leftIcon>
          <Icon name="boardIcon" />
        </template>
        {{ title }}
      </Button>
    </RouterLink>

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

  <Modal :is-open="isOpen" @close-modal="closeModal">
    <BoardForm
      title="Add New Board"
      @submit="onCreateBoard"
      :is-loading="isLoadingCreateBoard"
    />
  </Modal>
</template>
