<template>
  <div class="content_carousel">
    <client-only>
      <UCarousel v-slot="{ item }" :items="items" fade arrows dots loop>
        <img :src="item.src" :alt="item.alt">
        {{ item.alt }}
      </UCarousel>
    </client-only>
    <div class="content_carousel_slides">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref<{ src: string; alt: string }[]>([]);

// Get all slides from the slot
onMounted(() => {
  const slotContent = document.querySelector('.content_carousel_slides');
  if (slotContent) {
    const itemsSrc = Array.from(slotContent.querySelectorAll('img')).map((item: HTMLImageElement) => ({
      src: item.src,
      alt: item.alt,
    }));
    items.value = itemsSrc
  }
});
</script>

<style scoped>
.content_carousel {
  padding: 0 4em;
}
.content_carousel_slides {
  display: none;
}
</style>