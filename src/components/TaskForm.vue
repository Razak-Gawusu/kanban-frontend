<script setup lang="ts">
import { ref } from "vue";
import { Form, FieldArray } from "vee-validate";
import { cn } from "@/plugins";
import { useTheme } from "@/composables";
import { Icon, TextField, Button, Select } from "@/components";
import { IColumn } from "@/interfaces";
import { taskSchema } from "@/schema";
import { getColumnOptions } from "@/helpers";

type Props = {
  title: string;
  initialData?: any;
  isLoading: boolean;
  edit?: boolean;
  columns?: IColumn[];
};
const { title, initialData, isLoading, columns } = defineProps<Props>();

const emit = defineEmits<(e: "submit", payload: Record<string, any>) => void>();
const { theme } = useTheme();

const selected = ref<{ id: string | number; value: string | number }>();

function setSelected(option: { id: string | number; value: string | number }) {
  selected.value = option;
}

function handleSubmit(values: Record<string, string>) {
  console.log({ values });
  console.log({ selected: selected.value });

  if (selected.value?.id) {
    emit("submit", { ...values, column_id: selected.value?.id });
  }
}
</script>

<template>
  <div class="p-6 md:p-8 grid gap-6">
    <h2
      :class="
        cn('text-lg font-bold text-black', { 'text-white': theme === 'dark' })
      "
    >
      {{ title }}
    </h2>

    <Form
      @submit="handleSubmit"
      :initial-values="initialData"
      :validation-schema="taskSchema"
      class="grid gap-6"
    >
      <TextField label="Title" name="title" />
      <TextField type="textarea" label="Description" name="description" />

      <div class="flex flex-col gap-2">
        <label
          for=""
          :class="
            cn('font-bold text-gray text-xs', {
              'text-white': theme === 'dark',
            })
          "
          >Subtasks</label
        >
        <FieldArray name="subTasks" v-slot="{ fields, push, remove }">
          <div
            v-for="(field, idx) in fields"
            :key="field.key"
            class="flex justify-between items-center gap-4"
          >
            <TextField :name="`subTasks.${idx}.title`">
              <template #leftIcon="{ hasError }">
                <button
                  @click="remove(idx)"
                  :class="
                    cn(
                      'w-max',
                      { 'text-error': hasError },
                      { 'text-gray-300': theme === 'dark' }
                    )
                  "
                >
                  <Icon name="close" />
                </button>
              </template>
            </TextField>
          </div>

          <Button
            @click="push({ title: '', is_completed: false })"
            :variant="theme === 'dark' ? 'white' : 'secondary'"
            size="large"
            class="justify-center"
            ><template #leftIcon>
              <Icon name="plus" />
            </template>
            Add New SubTask</Button
          >
        </FieldArray>
      </div>

      <Select
        :options="getColumnOptions(columns)"
        :selected="selected"
        @select="setSelected"
      />

      <Button
        :is-loading="isLoading"
        size="large"
        variant="primary"
        class="justify-center"
        >Create Task</Button
      >
    </Form>
  </div>
</template>
