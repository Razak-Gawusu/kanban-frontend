<script setup lang="ts">
interface CheckboxProps {
  checked: boolean;
  disabled?: boolean;
}

const { checked, disabled } = defineProps<CheckboxProps>();
const emit = defineEmits();

const handleChange = (event: Event) => {
  if (!disabled) {
    emit("update:checked", (event.target as HTMLInputElement).checked);
  }
};
</script>

<template>
  <label class="checkbox" :class="{ disabled: disabled }">
    <input
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
    />
    <span class="checkmark"></span>
  </label>
</template>

<style scoped>
.checkbox {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 17px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border: solid 2px var(--gray-300);
  border-radius: 3.5px;
  background-color: inherit;
}

.checkbox input:checked + .checkmark {
  background-color: var(--primary);
  border: solid 2px var(--primary);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 4px;
  top: 0;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

input:checked ~ .checkmark:after {
  display: block;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
