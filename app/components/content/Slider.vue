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
    console.log('nextImage', Math.min(currentIndex.value + 1, props.images.length - 1));

    currentIndex.value = Math.min(currentIndex.value + 1, props.images.length - 1)
}
const prevImage = () => {
    console.log('prevImage', currentIndex.value, Math.max(currentIndex.value - 1, 0));
    currentIndex.value = Math.max(currentIndex.value - 1, 0)
}
</script>

<template>
    <div>
        <div class="slider">
            <div
                v-for="(item, index) in props.images" 
                :key="`${item.src}-${index}`"
                :class="['slide grid items-center', { 'slide--active': index === currentIndex }]"
                @click="nextImage()">
                <img :src="item.src" :alt="item.alt">
                <div class="md:hidden flex w-full justify-between">
                    <caption class="block">
                        {{ item.caption }}
                    </caption>
                    <small class="text-right">
                        {{ index + 1 }} / {{ props.images.length }}
                    </small>
                </div>
            </div>
        </div>
        <div class="flex w-full justify-between mt-4">
            <div class="hidden md:flex gap-4 justify-center">
                <UButton 
                    :disabled="currentIndex <= 0" 
                    variant="ghost" 
                    size="sm" 
                    icon="i-mdi-arrow-left" 
                    @click="prevImage" />
                <UButton 
                    :disabled="currentIndex >= props.images.length - 1" 
                    variant="ghost" 
                    size="sm" 
                    trailing-icon="i-mdi-arrow-right" 
                    @click="nextImage" />
            </div>
            <caption class="block">
                {{ props.images?.[currentIndex]?.caption }}
            </caption>
            <small class="text-right">
                {{ currentIndex + 1 }} / {{ props.images.length }}
            </small>
        </div>
    </div>
</template>

<style scoped>
.slider {
    position: relative;

    @media (min-width: 768px) {
        height: 66vh;
    }
}

.slide {
    position: relative;
    transition: 0.6s ease;

    @media (min-width: 768px) {
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;
        cursor: e-resize;
        transform: scale(0.98);
    }
}

.slide--active {
    opacity: 1;
    transition-delay: 0.6s;
    transform: scale(1);
}

.slide img {
    max-height: 100%;
    width: 100%;

    @media (min-width: 768px) {
        height: 100%;
        width: 100%;
        object-fit: contain;
        overflow: hidden;
    }
}
</style>