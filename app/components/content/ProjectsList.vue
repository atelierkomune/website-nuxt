<script setup lang="ts">
const props = withDefaults(
  defineProps<{
  minCols?: 1 | 2
}>(),
{
  minCols: 1
})
const { data: projects } = await useAsyncData(
  'projects-content-grid', 
  () => queryCollection('projects').select('title', 'path', 'image', 'tags').all(),
)
</script>

<template>
  <div :class="`grid grid-cols-${props.minCols} sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 md:p-4`">
    <div v-for="project in projects" :key="project.path" class="project flex items-center justify-center">
      <NuxtLink :to="project.path" class="project-link">
        <NuxtImg
          :src="project.image || '/projects/placeholder.jpg'"
          :alt="project.title"
          sizes="100vw sm:50vw md:400px"
          :placeholder="[50, 25, 75, 5]"
          class="project-img"/>
        <strong class="project-title text-xs">{{ project.title }}</strong>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.project {
  position: relative;
  z-index: 1;
}

.project-link {
  cursor: crosshair !important;
}

.project-link.router-link-exact-active {
  opacity: 0.25;
}

.project-img {
  width: 100%;
  /* aspect-ratio: 1; */
  /* object-fit: contain; */
}

.project-title {
  display: block;
  text-align: center;
  padding-top: 1em;
  transition: 0.1s ease;
}

@media (min-width: 768px) {
  .project-title {
    opacity: 0;
  }

  .project:hover .project-title {
    opacity: 1;
  }
}
</style>