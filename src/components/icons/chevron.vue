<script lang="ts" setup>
defineProps({
    size: {
        type: [Number, String],
        default: 24
    },
    color: {
        type: String,
        default: '#635FC7'
    },
})


</script>

<template>
    <svg width="11" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m.798 1.549 4.699 4.698 4.698-4.698" :stroke="color" stroke-width="2" />
    </svg>
</template>

