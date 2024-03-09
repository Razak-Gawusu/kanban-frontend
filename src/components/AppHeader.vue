<script setup lang="ts">
import { cn } from "../plugins";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import {
  useDeleteResource,
  useEditBoard,
  useGetBoard,
  useModal,
  useTheme,
} from "../composables";
import {
  Icon,
  Button,
  Dropdown,
  Modal,
  TaskForm,
  BoardForm,
  DeletePrompt,
  Account,
  MobileSidebar,
} from "@/components";

const { theme } = useTheme();
const route = useRoute();
const open = ref(false);
function toggleMenu() {
  open.value = !open.value;
}

const {
  isOpen: isOpenCreateTask,
  openModal: openModalCreateTask,
  closeModal: closeModalCreateTask,
} = useModal();

const boardOptions = [
  { label: "Edit Board", value: "edit" },
  { label: "Delete Board", value: "delete" },
];

const { data } = useGetBoard(computed(() => route.params.boardId));
const {
  editBoard,
  isLoadingEditBoard,
  isOpen: isOpenEditBoard,
  openModal: openModalEditBoard,
  closeModal: closeModalEditBoard,
} = useEditBoard(computed(() => route.params.boardId));

const {
  deleteResource,
  isLoadingDeleteResource,
  isOpen: isOpenDeleteBoard,
  openModal: openModalDeleteBoard,
  closeModal: closeModalDeleteBoard,
} = useDeleteResource({
  resource: "boards",
  queryKeys: ["boards"],
});
// const columns = computed(() => data.value?.data.columns);
const title = computed(() => data.value?.data.title);
const initialData = computed(() => data.value?.data);
const show = computed(() => Boolean(data.value?.data));

console.log({ data: data.value });

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
        'flex justify-between items-center py-5 px-4 md:px-6 md:py-7 lg:p-8 md:border-b md:border-gray-50 sticky top-0 z-10',
        { 'bg-white': theme === 'light' },
        { 'bg-gray-500 text-white md:border-gray-400': theme === 'dark' }
      )
    "
  >
    <div class="flex justify-between items-center">
      <div
        class="flex justify-between gap-4 items-center md:hidden"
        @click="toggleMenu"
      >
        <Icon name="kanbanLogoOutline" />
        <h1 class="text-lg font-bold">Platform Launch</h1>
        <Icon name="chevron" />
      </div>
      <h1 class="text-xl lg:text-2xl font-bold max-md:hidden">
        {{ title }}
      </h1>
    </div>

    <MobileSidebar :class="cn({ flex: open })" />

    <div class="flex items-center justify-between gap-6">
      <div v-if="show" class="flex items-center gap-2">
        <Button @click="openModalCreateTask" class="justify-center"
          ><template #leftIcon>
            <Icon name="plus" />
          </template>
          Add New Task
        </Button>

        <Dropdown
          :options="boardOptions"
          @perform:action="performDropdownActions"
        >
          <button class="w-6 flex justify-center">
            <Icon name="kebab" />
          </button>
        </Dropdown>
      </div>
      <Account />
    </div>
  </header>

  <Modal :isOpen="isOpenCreateTask" @close-modal="closeModalCreateTask">
    <TaskForm title="Add New Task" />
  </Modal>
  <Modal :isOpen="isOpenEditBoard" @close-modal="closeModalEditBoard">
    <BoardForm
      title="Edit Board"
      :initialData="initialData"
      :is-loading="isLoadingEditBoard"
      @submit="editBoard"
      edit
    />
  </Modal>

  <Modal :is-open="isOpenDeleteBoard" @close:modal="closeModalDeleteBoard">
    <DeletePrompt
      @submit="() => deleteResource(route.params.boardId)"
      @closeModal="closeModalDeleteBoard"
      :is-loading="isLoadingDeleteResource"
      title="Delete this board?"
      description="Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed."
    />
  </Modal>
</template>
