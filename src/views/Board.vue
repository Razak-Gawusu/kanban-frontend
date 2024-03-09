<script setup lang="ts">
import EmptyBoard from "../components/EmptyBoard.vue";
import Button from "../components/Button.vue";
import Icon from "../components/Icon.vue";
import { useGetBoard, useSidebar, useTheme } from "../composables";
import { cn } from "../plugins";
import ColumnList from "@/components/ColumnList.vue";
import { computed } from "vue";
const { hideSidebar, toggleSidebar } = useSidebar();
const { theme } = useTheme();
const { boardId } = defineProps<{ boardId: string }>();

const { data } = useGetBoard(computed(() => boardId));
const columns = computed(() => data.value?.data.columns);
const title = computed(() => data.value?.data.title);
</script>

<template>
  <main
    class="grow relative"
    :class="{
      'bg-gray-100 ': theme === 'light',
      'bg-gray-600 text-white': theme === 'dark',
    }"
  >
    <div v-if="columns?.length === 0" class="grid place-items-center h-full">
      <EmptyBoard :title="title" :columns="columns" />
    </div>
    <div v-else class="px-4 py-6">
      <ColumnList :columns="columns ?? []" :title="title ?? ''" />
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
