<script setup lang="ts">
import Modal from "@/components/Modal.vue";
import Button from "../components/Button.vue";
import Icon from "../components/Icon.vue";
import { useCreateBoard, useSidebar, useTheme } from "../composables";
import { cn } from "../plugins";
import BoardForm from "@/components/BoardForm.vue";

const { hideSidebar, toggleSidebar } = useSidebar();
const { theme } = useTheme();
const { openModal, closeModal, isLoadingCreateBoard, isOpen, onCreateBoard } =
  useCreateBoard();
</script>

<template>
  <main
    class="grow relative grid place-items-center"
    :class="{
      'bg-gray-100 ': theme === 'light',
      'bg-gray-600 text-white': theme === 'dark',
    }"
  >
    <div
      class="max-w-[343px] md:max-w-[400px] lg:max-w-[500px] grid gap-6 lg:gap-8 place-items-center"
    >
      <p class="text-lg font-bold text-center text-gray">
        Create or Select board to get started.
      </p>
      <Button @click="openModal" variant="primary" size="large">
        <template #leftIcon>
          <Icon name="plus" />
        </template>
        Create Board</Button
      >
    </div>
    <Button
      @click="toggleSidebar"
      variant="primary"
      size="large"
      :class="
        cn('gap-4 rounded-none rounded-r-full absolute bottom-[62px]', {
          hidden: !hideSidebar,
        })
      "
    >
      <template #leftIcon>
        <Icon name="eye" />
      </template>
    </Button>
  </main>

  <Modal :isOpen="isOpen" @close-modal="closeModal">
    <BoardForm
      title="Add New Board"
      :is-loading="isLoadingCreateBoard"
      @submit="onCreateBoard"
    />
  </Modal>
</template>
