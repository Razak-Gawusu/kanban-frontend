<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../plugins";
import { Spinner } from "@/components";

const button = cva("flex gap-1 items-center font-bold rounded-full", {
  variants: {
    variant: {
      primary: "bg-primary hover:bg-primary-300 text-white",
      white: "bg-white text-primary hover:bg-violet-100",
      secondary: " text-primary bg-primary-100 hover:bg-primary-200",
      tertiary: " text-gray hover:bg-primary-100 hover:text-primary",
      destructive: "bg-error hover:bg-error-100 text-white",
    },
    size: {
      small: "text-[13px] px-6 py-2",
      large: "text-[15px] px-6 py-[15px] h-12",
    },
  },
  compoundVariants: [{ variant: "primary", size: "large" }],
});

type ButtonProps = VariantProps<typeof button>;

const {
  isLoading,
  variant = "primary",
  size = "large",
} = defineProps<{
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  isLoading?: boolean;
}>();
</script>

<template>
  <button :class="cn(button({ variant, size }))">
    <Spinner v-if="isLoading" />
    <template v-else>
      <slot name="leftIcon" />
      <slot />
    </template>
  </button>
</template>
