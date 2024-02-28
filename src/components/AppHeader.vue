<script setup lang="ts">
import { useModal, useTheme } from "../composables";
import Icon from "./Icon.vue";
import Button from "./Button.vue";
import { cn } from "../plugins";
import Dropdown from "./Dropdown.vue";
import MobileSidebar from "./MobileSidebar.vue";
import { ref } from "vue";
import Modal from "./Modal.vue";
import TaskForm from "./TaskForm.vue";
import BoardForm from "./BoardForm.vue";
import DeletePrompt from "./DeletePrompt.vue";

const { theme } = useTheme();
const open = ref(false);
function toggleMenu() {
  console.log("clicked");
  open.value = !open.value;
}

const {
  isOpen: isOpenCreateTask,
  openModal: openModalCreateTask,
  closeModal: closeModalCreateTask,
} = useModal();

const {
  isOpen: isOpenEditBoard,
  openModal: openModalEditBoard,
  closeModal: closeModalEditBoard,
} = useModal();

const {
  isOpen: isOpenDeleteBoard,
  openModal: openModalDeleteBoard,
  closeModal: closeModalDeleteBoard,
} = useModal();

const boardOptions = [
  { label: "Edit Board", value: "edit" },
  { label: "Delete Board", value: "delete" },
];

function performDropdownActions(action: string) {
  switch (action) {
    case "edit":
      openModalEditBoard();
      break;
    case "delete":
      openModalDeleteBoard();
      break;
    default:
      throw new Error("Action doesn't exit");
  }
}
</script>

<template>
  <header
    :class="
      cn(
        'flex items-center justify-between py-5 px-4 md:px-6 md:py-7 lg:p-8 md:border-b md:border-gray-50 sticky top-0 z-10',
        { 'bg-white': theme === 'light' },
        { 'bg-gray-500 text-white md:border-gray-400': theme === 'dark' }
      )
    "
  >
    <div class="flex">
      <div class="flex gap-4 items-center md:hidden" @click="toggleMenu">
        <Icon name="kanbanLogoOutline" />
        <h1 class="text-lg font-bold">Platform Launch</h1>
        <Icon name="chevron" />
      </div>
      <h1 class="text-xl lg:text-2xl font-bold max-md:hidden">
        Platform Launch
      </h1>
    </div>

    <MobileSidebar :class="cn({ flex: open })" />

    <div class="flex gap-6 items-center">
      <Button
        @click="openModalCreateTask"
        variant="primary"
        size="large"
        class="w-[178px] justify-center"
        ><template #leftIcon>
          <Icon name="plus" />
        </template>
        <p class="hidden md:block">Add New Task</p>
      </Button>

      <Dropdown
        :options="boardOptions"
        @perform:action="performDropdownActions"
      >
        <Icon name="kebab" />
      </Dropdown>
    </div>
  </header>

  <Modal :isOpen="isOpenCreateTask" @close:modal="closeModalCreateTask">
    <TaskForm title="Add New Task" />
  </Modal>
  <Modal :isOpen="isOpenEditBoard" @close:modal="closeModalEditBoard">
    <BoardForm title="Edit Board" />
  </Modal>

  <Modal :is-open="isOpenDeleteBoard" @close:modal="closeModalDeleteBoard">
    <DeletePrompt
      @close:modal="closeModalDeleteBoard"
      title="Delete this board?"
      description="Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed."
    />
  </Modal>
</template>
