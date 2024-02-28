<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

defineOptions({
    name: "IconComponent",
})
const props = defineProps<{ name: string }>()
const icons: Record<string, { default: any }> = {
    ...import.meta.glob('./icons/*.vue', { eager: true }),
}

const _icon = computed(() =>
    props.name
        ? defineAsyncComponent(async (): Promise<any> => {
            const module = icons[`./icons/${props.name}.vue`]
            return module?.default
        })
        : null,
)
</script>

<template>
    <component :is="_icon" />
</template>

<style scoped></style>