<script setup lang="ts">
import EmptyBoard from "../components/EmptyBoard.vue";
import Button from "../components/Button.vue";
import Icon from "../components/Icon.vue";
import { useSidebar, useTheme } from "../composables";
import { cn } from "../plugins";
// import { useBoards } from '@/composables'
import ColumnList from "@/components/ColumnList.vue";
const { hideSidebar, toggleSidebar } = useSidebar();
const { theme } = useTheme();
const boards = [
  {
    id: 1,
    title: "Todo",
    tasks: [
      {
        id: 1,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
      {
        id: 2,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
      {
        id: 3,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
    ],
  },
  {
    id: 2,
    title: "Doing",
    tasks: [
      {
        id: 1,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
      {
        id: 2,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
      {
        id: 3,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
    ],
  },
  {
    id: 3,
    title: "Doing",
    tasks: [
      {
        id: 1,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
      {
        id: 2,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
      {
        id: 3,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
      {
        id: 4,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
      {
        id: 5,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
    ],
  },
  {
    id: 3,
    title: "Doing",
    tasks: [
      {
        id: 1,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
      {
        id: 2,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
      {
        id: 3,
        title: "Build UI for onboarding flow",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        subTasks: [],
      },
    ],
  },
];
</script>

<template>
  <main
    class="grow relative"
    :class="{
      'bg-gray-100 ': theme === 'light',
      'bg-gray-600 text-white': theme === 'dark',
    }"
  >
    <div v-if="boards.length === 0" class="grid place-items-center h-full">
      <EmptyBoard />
    </div>
    <div class="px-4 py-6">
      <ColumnList :columns="boards" />
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
</template>
