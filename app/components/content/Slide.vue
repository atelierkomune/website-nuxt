<script setup lang="ts">
const props = defineProps<{
    src: string
    alt: string
    caption: string
}>()
</script>
<template>
    <div class="slide">
        <img :src="props.src" :alt="props.alt">
        <caption>{{ props.caption || 'untitled' }}</caption>
    </div>
</template>
<style scoped>
.slide {
    position: relative;

    @media (min-width: 768px) {
        position: absolute;
    }
}
</style>