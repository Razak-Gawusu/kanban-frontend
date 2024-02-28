<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import Icon from "./Icon.vue";
import { cn } from "@/plugins";
import { useTheme } from "@/composables";

const { theme } = useTheme();
const { options, selected } = defineProps<{
  options: string[];
  selected: string;
}>();
const emit = defineEmits<(e: "select:option", option: string) => void>();
</script>
<template>
  <Listbox class="z-50">
    <div class="relative">
      <ListboxButton
        :class="
          cn(
            'relative w-full cursor-default rounded-[4px] py-3 px-4 pr-10 text-left border sm:text-sm',
            { 'text-black border-gray-200': theme === 'light' },
            { 'text-white border-gray-400': theme === 'dark' }
          )
        "
      >
        <span class="block truncate text-[13px] font-medium">{{
          selected
        }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex justify-center items-center pr-4"
        >
          <Icon name="chevron" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          :class="
            cn(
              'absolute  mt-1 max-h-60 w-full overflow-auto rounded-lg py-1 text-base focus:outline-none sm:text-sm',
              { 'bg-white': theme === 'light' },
              { 'bg-gray-600 select-dropdown': theme === 'dark' }
            )
          "
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="option"
            :value="option"
            as="template"
            @click="emit('select:option', option)"
          >
            <li
              :class="
                cn([
                  'relative cursor-default select-none py-2 pl-10 pr-4 text-gray font-medium',
                  {
                    'bg-primary-100 text-primary': active && theme === 'light',
                  },
                  {
                    'bg-primary-100 text-primary': active && theme === 'dark',
                  },
                ])
              "
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ option }}</span
              >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
              >
                <Icon name="check" class="h-4 w-4" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<style scoped>
.select-dropdown {
  box-shadow: 0px 10px 20px 0px rgba(54, 78, 126, 0.25);
}
</style>
