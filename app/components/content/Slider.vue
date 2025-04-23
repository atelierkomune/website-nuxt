<script setup lang="ts">
const route = useRoute()
const props = defineProps<{
    images: {
        src: string,
        alt: string,
        company: string,
        project: string,
    }[]
}>()

const currentIndex = ref<number>(0)
const nextImage = () => {
    currentIndex.value += 1
    if(currentIndex.value > props.images.length - 1)
        currentIndex.value = 0
}
const prevImage = () => {
    currentIndex.value -= 1
    if(currentIndex.value < 0)
        currentIndex.value = props.images.length - 1
}
</script>

<template>
    <div>
        <div class="slider">
            <div class="hidden md:block slide-prev" @click="prevImage()"/>
            <div
                v-for="(item, index) in props.images" 
                :key="`${item.src}-${index}`"
                :class="['slide grid items-center', { 'slide--active': index === currentIndex }]"
                @click="nextImage()">
                <NuxtImg :src="item.src" :alt="item.alt" />
                <div class="md:hidden flex w-full justify-between mb-8">
                    <caption class="block">
                        <strong v-if="item.company">
                            {{ item.company }}
                        </strong>
                        <span v-if="item.project">
                            {{ item.project }}
                        </span>
                    </caption>
                    <small class="text-right">
                        {{ index + 1 }} / {{ props.images.length }}
                    </small>
                </div>
            </div>
        </div>
        <div class="hidden md:grid grid grid-cols-3 w-full justify-between mt-16">
            <div class="flex items-center justify-start text-xs">
                <strong v-if="props.images?.[currentIndex]?.company">
                    {{ props.images?.[currentIndex]?.company }}
                </strong>
                <span v-if="props.images?.[currentIndex]?.project">
                    {{ props.images?.[currentIndex]?.project }}
                </span>
            </div>
            <div class="flex items-center justify-center text-xs">
                {{ currentIndex + 1 }} / {{ props.images.length }}
            </div>
            <div class="flex items-center justify-end">
                <NavProjects class="hidden md:flex gap-2 items-center" :path="route.path" />
            </div>
        </div>
        <NavProjects class="md:hidden flex gap-2 items-center justify-center w-full" :path="route.path" />
    </div>
</template>

<style scoped>
.slider {
    position: relative;

    @media (min-width: 768px) {
        height: calc(100vh - 16rem);
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
        transform: scale(1.01);
    }
}

.slide-prev {
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    cursor: w-resize;
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