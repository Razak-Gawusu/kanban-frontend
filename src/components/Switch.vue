<script setup lang="ts">
const { label, checked = false } = defineProps<{
  label: string;
  checked: boolean;
}>();
const emit = defineEmits<{
  (e: "update:checked", checked: boolean): void;
}>();

const toggleSwitch = () => {
  emit("update:checked", !checked);
};
</script>

<template>
  <label class="toggle-switch" role="switch">
    <input
      id="switch"
      v-bind="$attrs"
      class="input"
      type="checkbox"
      :checked="checked"
      @change="toggleSwitch"
      @keydown.prevent.space="toggleSwitch"
    />
    <span class="slider"></span>
    <label for="switch" class="sr-only">{{ label }}</label>
  </label>
</template>

<style scoped>
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--gray-200);
  &:hover {
    background-color: var(--primary-300);
  }
  border-radius: 20px;
  transition: 0.4s;
}

.input:checked + .slider {
  background-color: var(--primary);
  &:hover {
    background-color: var(--primary-300);
  }
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

.input:checked + .slider:before {
  transform: translateX(20px);
}
</style>
