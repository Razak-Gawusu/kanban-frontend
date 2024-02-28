<script setup lang="ts">
import { reactive, ref } from "vue";
import Dropdown from "./Dropdown.vue";
import Modal from "./Modal.vue";
import SubTask from "./SubTask.vue";
import Select from "./Select.vue";
import Icon from "./Icon.vue";
import TaskForm from "./TaskForm.vue";
import DeletePrompt from "./DeletePrompt.vue";
import { cn } from "@/plugins";
import { useModal, useTheme } from "@/composables";

const taskOptions = [
  { label: "Edit Task", value: "edit" },
  { label: "Delete Task", value: "delete" },
];
const columns = reactive(["Todo", "Doing", "Done"]);

const selected = ref(columns[0]);
function setSelected(option: string) {
  selected.value = option;
}

const { theme } = useTheme();

const {
  isOpen: isOpenEditTask,
  openModal: openModalEditTask,
  closeModal: closeModalEditTask,
} = useModal();

const {
  isOpen: isOpenDeleteTask,
  openModal: openModalDeleteTask,
  closeModal: closeModalDeleteTask,
} = useModal();

function performDropdownActions(action: string) {
  switch (action) {
    case "edit":
      openModalEditTask();
      break;
    case "delete":
      openModalDeleteTask();
      break;
    default:
      throw new Error("Action doesn't exit");
  }
}
</script>

<template>
  <div class="grid gap-6 p-6 md:p-8">
    <div class="flex gap-4 items-center justify-between">
      <h2
        :class="
          cn('font-bold text-lg text-black', { 'text-white': theme === 'dark' })
        "
      >
        Research pricing points of various competitors and trial different
        business models
      </h2>

      <Dropdown :options="taskOptions" @perform:action="performDropdownActions">
        <Icon name="kebab" />
      </Dropdown>
    </div>

    <div class="grid gap-6">
      <p class="text-[13px] leading-6 text-gray font-medium">
        We know what we're planning to build for version one. Now we need to
        finalise the first pricing model we'll use. Keep iterating the subtasks
        until we have a coherent proposition.
      </p>

      <div class="grid gap-4">
        <h3 class="font-bold text-xs text-gray">Subtasks (2 of 3)</h3>

        <SubTask
          :id="1"
          title="Research competitor pricing and business models"
          :isCompleted="false"
        />
        <SubTask
          :id="1"
          title="Research competitor pricing and business models Research competitor pricing and business models"
          :isCompleted="false"
        />
        <SubTask
          :id="1"
          title="Research competitor pricing and business models Research competitor pricing and business models Research competitor pricing and business models"
          :isCompleted="false"
        />
      </div>

      <Select
        :options="columns"
        :selected="selected"
        @select:option="setSelected"
      />
    </div>
  </div>

  <Modal :isOpen="isOpenEditTask" @close:modal="closeModalEditTask">
    <TaskForm title="Edit Task" />
  </Modal>

  <Modal :is-open="isOpenDeleteTask" @close:modal="closeModalDeleteTask">
    <DeletePrompt
      @close:modal="closeModalDeleteTask"
      title="Delete this task?"
      description="Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed."
    />
  </Modal>
</template>
