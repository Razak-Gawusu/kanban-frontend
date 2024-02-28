<script setup lang="ts">
import Button from "./Button.vue";
import Icon from "./Icon.vue";
</script>

<template>
  <div
    class="max-w-[343px] md:max-w-[400px] lg:max-w-[500px] grid gap-6 lg:gap-8 place-items-center"
  >
    <p class="text-lg font-bold text-center text-gray">
      This board is empty. Create a new column to get started.
    </p>
    <Button variant="primary" size="large">
      <template #leftIcon>
        <Icon name="plus" />
      </template>
      Add New Column</Button
    >
  </div>
</template>
