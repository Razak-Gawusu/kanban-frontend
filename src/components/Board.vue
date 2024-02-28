<script setup lang="ts">
import { computed } from 'vue';
import { useBoards } from '../composables';

import BoardList from './BoardList.vue';
const { boards, activeBoard, setActiveBoard } = useBoards()
const totalBoard = computed(() => boards.length)
</script>

<template>
    <section class="grid gap-5">
        <h2 class="text-sm font-bold text-gray-300 pl-6 lg:pl-8">ALL BOARDS ({{ totalBoard }})</h2>

        <BoardList :boards="boards" @update:activeBoard="setActiveBoard" :activeBoard="activeBoard" />
    </section>
</template>