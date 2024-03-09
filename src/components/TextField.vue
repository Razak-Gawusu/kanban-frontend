<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";
import { useTheme } from "@/composables";
import { cn } from "@/plugins";

type CustomInputProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  type?: "text" | "email" | "password" | "textarea";
};

const { name, type = "text", label } = defineProps<CustomInputProps>();
const { theme } = useTheme();
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <Field v-slot="{ field, meta }" :name="name">
      <label
        v-if="!!label"
        :for="name"
        :class="
          cn('font-bold text-gray text-xs', { 'text-white': theme === 'dark' })
        "
        >{{ label }}</label
      >
      <div class="flex justify-between items-center gap-4">
        <div
          :class="
            cn(
              'flex grow items-center justify-between py-3 px-4 rounded border border-gray-200 focus:outline-blue-500',
              { 'border-gray-400': theme === 'dark' },
              { '!border-error': meta.dirty && !meta.valid }
            )
          "
        >
          <textarea
            v-if="type === 'textarea'"
            :id="name"
            v-bind="field"
            :placeholder="placeholder"
            :disabled="disabled"
            rows="4"
            :class="
              cn(
                'grow w-full placeholder:text-gray-300 text-[13px] focus:outline-none text-black font-medium bg-inherit',
                { 'text-white': theme === 'dark' }
              )
            "
          />
          <input
            v-else
            :id="name"
            :type="type"
            v-bind="field"
            :placeholder="placeholder"
            :disabled="disabled"
            :class="
              cn(
                'grow w-full placeholder:text-gray-300 text-[13px] focus:outline-none text-black font-medium bg-inherit',
                { 'text-white': theme === 'dark' }
              )
            "
          />

          <ErrorMessage
            v-if="type !== 'textarea'"
            :name="name"
            class="text-[13px] text-error shrink-0 w-max"
          />
        </div>
        <slot name="rightIcon" :hasError="meta.dirty && !meta.valid" />
      </div>
    </Field>
  </div>
</template>
