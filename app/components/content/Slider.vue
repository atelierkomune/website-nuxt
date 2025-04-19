<script setup lang="ts">
const props = defineProps<{
    images: {
        src: string,
        alt: string,
    }[]
}>()
</script>

<template>
    <div class="slider">
        <div 
            v-for="(item, index) in props.images" 
            :key="`${item.src}-${index}`"
            class="slide">
            <img :src="item.src" :alt="item.alt">
        </div>
        <slot />
    </div>
</template>

<style scoped>
.slider {
    position: relative;
    height: 75vh;
}
</style>