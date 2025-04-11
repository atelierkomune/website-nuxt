<script setup lang="ts">
const { data: projects } = await useAsyncData(
  'projects-content-grid', 
  () => queryCollection('projects').select('title', 'path', 'image', 'tags').all(),
)
</script>
<template>
  <div v-for="project in projects" :key="project.path">
    <NuxtLink :to="project.path">
      {{ project.image }}
      <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
      <span>{{ project.title }}</span>
    </NuxtLink>
  </div>
</template>