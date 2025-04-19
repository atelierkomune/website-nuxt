<script setup lang="ts">
const { data: projects } = await useAsyncData(
  'projects-content-grid', 
  () => queryCollection('projects').select('title', 'path', 'image', 'tags').all(),
)
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 md:p-4">
    <div v-for="project in projects" :key="project.path" class="project">
      <NuxtLink :to="project.path">
        <img
          :src="project.image || '/projects/placeholder.jpg'" 
          :alt="project.title" 
          class="project-img w-full object-cover aspect-square">
        <strong class="project-title text-sm">{{ project.title }}</strong>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>

.project {
  position: relative;
  z-index: 1;
  transition: transform 0.6s ease-out;
  transform: scale(1);
}

.project:hover {
  transform: scale(1.075);
}

.project-img {
  transition: box-shadow 0.6s ease;
  box-shadow: 0 .5em 8em 0 rgba(0, 0, 0, 0);
  will-change: box-shadow;
  border-radius: 0.1rem;
}

.project:hover .project-img {
  box-shadow: 0 1em 8em 0 rgba(46, 46, 46, 0.5);
}

.project-title {
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0.5em 0;
  transition: opacity 0.3s ease, transform 0.6s ease;

  @media (min-width: 768px) {
    opacity: 0;
    transform: translateY(-30%);
  }
}

.project:hover .project-title {
  opacity: 1;
  transform: translateY(0);
}

</style>