<script setup lang="ts">
definePageMeta({
  scrollToTop: true
})

const route = useRoute()
const { data: page } = await useAsyncData(
  route.path,
  () => queryCollection('page').path(route.path).first(),
  { watch: [() => route.path] }
)

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})

if (!page.value) {
  createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}
</script>

<template>
  <div class="page">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>