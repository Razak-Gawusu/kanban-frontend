<script setup lang="ts">
import { Form, FieldArray } from "vee-validate";
import { useBoardForm, useTheme } from "@/composables";
import Button from "./Button.vue";
import TextField from "./TextField.vue";
import Select from "./Select.vue";
import Icon from "./Icon.vue";
import { cn } from "@/plugins";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { reactive, ref } from "vue";

type Taskform = {
  title: string;
};
const { title } = defineProps<Taskform>();
const { theme } = useTheme();
const { boardFormData, createBoard } = useBoardForm();

const columns = reactive(["Todo", "Doing", "Done"]);

const selected = ref(columns[0]);
function setSelected(option: string) {
  selected.value = option;
}

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1, "Can't be empty"),
    columns: z.array(
      z.object({
        title: z.string().min(1, "Can't be empty"),
        isCompleted: z.boolean(),
      })
    ),
  })
);
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
      @submit="createBoard"
      :initial-values="boardFormData"
      :validation-schema="validationSchema"
      class="grid gap-6"
    >
      <TextField label="Name" name="name" />

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
            <TextField :name="`columns.${idx}.name`">
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
            @click="push({ name: '' })"
            :variant="theme === 'dark' ? 'white' : 'secondary'"
            size="large"
            class="justify-center"
            ><template #leftIcon>
              <Icon name="plus" />
            </template>
            Add New Column</Button
          >
        </FieldArray>
      </div>

      <Select
        :options="columns"
        :selected="selected"
        @select:option="setSelected"
      />

      <Button size="large" variant="primary" class="justify-center"
        >Create New Board</Button
      >
    </Form>
  </div>
</template>
