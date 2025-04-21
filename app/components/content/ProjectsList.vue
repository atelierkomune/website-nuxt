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
          class="project-img">
        <strong class="project-title text-sm">{{ project.title }}</strong>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>

.project {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease-out;
  transform: scale(1);
}

.project-img {
  transition: 0.6s ease;
  box-shadow: 0 .25em 4em 0 rgba(0, 0, 0, 0);
  will-change: box-shadow;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;

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
}

@media (min-width: 768px) {
  .project:hover {
    transform: scale(1.016);
  }

  .project:hover .project-img {
    box-shadow: 0 1em 4em 0 rgba(46, 46, 46, 0.25);
  }

  .project-title {
    opacity: 0;
    transform: translateY(-30%);
  }

  .project:hover .project-title {
    opacity: 1;
    transform: translateY(0);
  }

}


</style>