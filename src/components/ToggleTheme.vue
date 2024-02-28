<script setup lang="ts">
import { watchEffect } from "vue";
import { setItem } from "../helpers";
import Icon from "./Icon.vue";
import { useTheme } from "../composables";
import Switch from "./Switch.vue";

const { theme, toggleTheme } = useTheme();

watchEffect(() => {
  setItem("theme", theme.value);
});
</script>

<template>
  <div
    class="flex justify-center items-center gap-6 py-4 bg-blue-300 rounded-md"
    :class="{
      'bg-gray-100': theme === 'light',
      'bg-gray-600': theme === 'dark',
    }"
  >
    <Icon name="sun" />
    <Switch
      label="theme"
      :checked="theme === 'light' ? false : true"
      @update:checked="toggleTheme"
    />

    <Icon name="moon" />
  </div>
</template>
