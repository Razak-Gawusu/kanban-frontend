<script setup lang="ts">
import { reactive, ref } from "vue";
import {
  DeletePrompt,
  Dropdown,
  Modal,
  Select,
  Icon,
  TaskForm,
  SubTask,
} from "@/components";

import { cn } from "@/plugins";
import { useDeleteResource, useEditTask, useTheme } from "@/composables";
import { IColumn, ITask } from "@/interfaces";
import { getColumnOptions } from "@/helpers";

type Props = {
  columns: IColumn[];
  task: ITask;
  numberOfSubTasksCompleted: number;
  subTasksTotal: number;
};

const { task } = defineProps<Props>();
const taskOptions = [
  { label: "Edit Task", value: "edit" },
  { label: "Delete Task", value: "delete" },
];
const { theme } = useTheme();

const {
  isOpen: isOpenEditTask,
  openModal: openModalEditTask,
  closeModal: closeModalEditTask,
  editTask,
  isLoadingEditTask,
} = useEditTask(task.id);

const {
  isOpen: isOpenDeleteTask,
  openModal: openModalDeleteTask,
  closeModal: closeModalDeleteTask,
  isLoadingDeleteResource,
  deleteResource,
} = useDeleteResource({ resource: "tasks" });

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

const selected = ref<{ id: string | number; value: string | number }>();

function setSelected(option: { id: string | number; value: string | number }) {
  selected.value = option;
  editTask({ ...task, column_id: option.id });
}

// function handleChange() {
//   editTask({ ...task, column_id: option.id });
// }
</script>

<template>
  <div class="grid gap-6 p-6 md:p-8">
    <div class="flex gap-4 items-center justify-between">
      <h2
        :class="
          cn('font-bold text-lg text-black', { 'text-white': theme === 'dark' })
        "
      >
        {{ task.title }}
      </h2>

      <Dropdown :options="taskOptions" @perform:action="performDropdownActions">
        <button class="w-6 h-6 flex justify-center">
          <Icon name="kebab" />
        </button>
      </Dropdown>
    </div>

    <div class="grid gap-6">
      <p class="text-[13px] leading-6 text-gray font-medium">
        {{ task.description }}
      </p>

      <div class="grid gap-4">
        <h3 class="font-bold text-xs text-gray">
          Subtasks ({{ numberOfSubTasksCompleted }} of {{ subTasksTotal }})
        </h3>

        <SubTask
          v-for="subTask in task.subTasks"
          :key="subTask.id"
          :id="subTask.id"
          :title="subTask.title"
          :is_completed="subTask.is_completed"
          @change=""
        />
      </div>

      <Select
        :options="getColumnOptions(columns)"
        :selected="selected"
        @select="setSelected"
      />
    </div>
  </div>

  <Modal :isOpen="isOpenEditTask" @close-modal="closeModalEditTask">
    <TaskForm
      title="Edit Task"
      :columns="columns"
      :initial-data="task"
      @submit="editTask"
      :is-loading="isLoadingEditTask"
      edit
    />
  </Modal>

  <Modal :is-open="isOpenDeleteTask" @close:modal="closeModalDeleteTask">
    <DeletePrompt
      @submit="() => deleteResource(task.id)"
      @close-modal="closeModalDeleteTask"
      :is-loading="isLoadingDeleteResource"
      title="Delete this task?"
      description="Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed."
    />
  </Modal>
</template>
