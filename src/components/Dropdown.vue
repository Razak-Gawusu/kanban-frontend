<script setup lang="ts">
import { cn } from "@/plugins";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useTheme } from "@/composables";

type DropdownProps = {
  options: { label: string; value: string }[];
};
const { options } = defineProps<DropdownProps>();
const emit = defineEmits<{
  (e: "perform:action", action: string): void;
}>();
const { theme } = useTheme();
</script>
<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton>
      <slot />
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        :class="
          cn(
            'absolute right-0  w-48 origin-top-right p-2 rounded-lg shadow-lg focus:outline-none',
            { 'bg-white': theme === 'light' },
            { 'bg-gray-600': theme === 'dark' }
          )
        "
      >
        <MenuItem
          v-for="option in options"
          :key="option.value"
          as="template"
          v-slot="{ active }"
        >
          <button
            @click="emit('perform:action', option.value)"
            :class="
              cn(
                'group flex w-full items-center rounded-md p-2 text-sm font-medium text-gray',
                {
                  'text-error hover:bg-red-50':
                    option.value.startsWith('delete'),
                },
                {
                  'text-error hover:bg-red-50':
                    option.value.startsWith('logout'),
                },
                { 'bg-primary-100': active && theme === 'light' },
                { 'bg-primary-100': active && theme === 'dark' }
              )
            "
          >
            {{ option.label }}
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
