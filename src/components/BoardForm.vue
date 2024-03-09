<script setup lang="ts">
import { Form, FieldArray } from "vee-validate";
import { useDeleteResource, useTheme } from "@/composables";
import { Icon, TextField, Button } from "@/components";
import { cn } from "@/plugins";
import { boardSchema } from "@/schema";

type Props = {
  title: string;
  initialData?: any;
  edit?: boolean;
  isLoading: boolean;
};

const { title, initialData, edit, isLoading } = defineProps<Props>();
const emit =
  defineEmits<(e: "submit", payload: Record<string, string>) => void>();
const { theme } = useTheme();

const { deleteResource: deleteColumn } = useDeleteResource({
  resource: "columns",
  queryKeys: ["boards", "board"],
});

function handleSubmit(values: any) {
  console.log(values);
  emit("submit", values);
}

function handleRemove(removeFn: any, val: any) {
  if (edit) {
    deleteColumn(val.id);
  } else {
    removeFn(val);
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
      :validation-schema="boardSchema"
      class="grid gap-6"
    >
      <TextField label="Name" name="title" />

      <div class="flex flex-col gap-2">
        <label
          for=""
          :class="
            cn('font-bold text-gray text-xs', {
              'text-white': theme === 'dark',
            })
          "
          >Columns</label
        >
        <FieldArray name="columns" v-slot="{ fields, push, remove }">
          <div
            v-for="(field, idx) in fields"
            :key="field.key"
            class="flex justify-between items-center gap-4"
          >
            <TextField :name="`columns.${idx}.title`">
              <template #rightIcon="{ hasError }">
                <button
                  type="button"
                  @click="() => handleRemove(remove, field.value)"
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
            @click="push({ title: '' })"
            :variant="theme === 'dark' ? 'white' : 'secondary'"
            size="large"
            class="justify-center mt-2"
            ><template #leftIcon>
              <Icon name="plus" />
            </template>
            Add New Column</Button
          >
        </FieldArray>
      </div>

      <Button :is-loading="isLoading" class="justify-center">{{
        edit ? "Save Changes" : "Create New Board"
      }}</Button>
    </Form>
  </div>
</template>
