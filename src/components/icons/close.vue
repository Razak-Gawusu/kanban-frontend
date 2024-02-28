<script lang="ts" setup>
defineProps({
  size: {
    type: [Number, String],
    default: 24,
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <rect
      x="12.728"
      width="3"
      height="18"
      transform="rotate(45 12.728 0)"
      fill="currentcolor"
    />
    <rect
      y="2.12134"
      width="3"
      height="18"
      transform="rotate(-45 0 2.12134)"
      fill="currentColor"
    />
  </svg>
</template>
