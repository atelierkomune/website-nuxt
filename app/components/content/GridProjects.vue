<script setup lang="ts">
const { data: projects } = await useAsyncData(
  'projects-content-grid', 
  () => queryCollection('projects').select('title', 'path', 'image', 'tags').all(),
)
</script>
<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div v-for="project in projects" :key="project.path" class="project">
      <NuxtLink :to="project.path" class="grid items-center justify-center gap-2">
        <img
          :src="project.image || '/projects/placeholder.jpg'" 
          :alt="project.title" 
          class="project-img w-full object-cover aspect-square">
        <strong class="project-title">{{ project.title }}</strong>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>

.project {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
  transform: scale(1);
}

.project-img {
  transition: box-shadow 0.6s ease;
  border-radius: 0.2rem;
}

.project-title {
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 0;
  transform: translateY(0%);
  transition: opacity 0.3s ease, transform 0.6s ease;
}

.project:hover {
  transform: scale(1.05);
}

.project:hover .project-img {
  box-shadow: 0 .5em 2em 0 rgba(0, 0, 0, 0.1);
}

.project:hover .project-title {
  opacity: 1;
  transform: translateY(100%);
}

</style>