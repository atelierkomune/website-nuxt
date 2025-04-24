<script setup lang="ts">
const route = useRoute()
definePageMeta({
  layout: 'project'
})

const { data: page } = await useAsyncData(
  route.path,
  () => queryCollection('projects').path(route.path).first(),
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
  <div class="page page--projects">
    <h1 class="md:hidden mt-8">{{ page?.title }}</h1>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>