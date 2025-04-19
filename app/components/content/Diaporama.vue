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
        <div class="diaporama">
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
.diaporama {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>