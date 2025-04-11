<script setup lang="ts">
const { data: projects } = await useAsyncData(
  'projects-content-grid', 
  () => queryCollection('projects').select('title', 'path', 'image').all(),
)
</script>
<template>
  {{ projects }}
  <div v-for="project in projects" :key="project.path">
    <NuxtLink :to="project.path">
      {{ project.title }}
      <pre>
        {{ project }}
      </pre>
    </NuxtLink>
  </div>
</template>