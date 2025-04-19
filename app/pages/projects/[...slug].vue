<script setup lang="ts">
const route = useRoute()
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
    <h1 class="sticky md:top-8 top-16 z-10 text-shadow-sm">{{ page?.title }}</h1>
    <ContentRenderer v-if="page" :value="page" />
    <NavProjects :path="route.path"/>
  </div>
</template>