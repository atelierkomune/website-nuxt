<script setup lang="ts">
const props = defineProps<{
    images: {
        src: string,
        alt: string,
        caption: string,
    }[]
}>()

const currentIndex = ref<number>(0)
const nextImage = () => {
    currentIndex.value = Math.min(currentIndex.value + 1, props.images.length - 1)
}
const prevImage = () => {
    currentIndex.value = Math.max(currentIndex.value - 1, 0)
}
</script>

<template>
    <div>
        <div class="slider">
            <div
                v-for="(item, index) in props.images" 
                :key="`${item.src}-${index}`"
                :class="['slide', { 'slide--active': index === currentIndex }]"
                @click="nextImage()">
                <img :src="item.src" :alt="item.alt">
                <div class="flex w-full justify-between">
                    <caption class="block">
                        {{ item.caption }}
                    </caption>
                    <small class="text-right">
                        {{ index + 1 }} / {{ props.images.length }}
                    </small>
                </div>
            </div>
        </div>
        <div class="flex gap-4 justify-center">
            <UButton class="hidden md:flex" icon="i-mdi-arrow-left" @click="prevImage" />
            <UButton class="hidden md:flex" icon="i-mdi-arrow-right" @click="nextImage" />
        </div>
    </div>
</template>

<style scoped>
.slider {
    position: relative;

    @media (min-width: 768px) {
        height: 75vh;
    }
}

.slide {
    position: relative;
    transition: opacity 0.3s ease;

    @media (min-width: 768px) {
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;
    }
}

.slide--active {
    opacity: 1;
}

.slide img {
    max-height: 100%;
    max-width: 100%;
}
</style>