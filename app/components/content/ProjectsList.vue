<script setup lang="ts">
const route = useRoute()
const props = withDefaults(
  defineProps<{
  minCols?: 1 | 2
}>(),
{
  minCols: 1
})

const { data: projectsCollection } = await useAsyncData(
  'projects-content-grid', 
  () => queryCollection('projects').select('title', 'path', 'image', 'tags').all(),
)

const projects = computed(() => projectsCollection.value?.filter((page) => !route.query.tag || page.tags?.includes(route.query.tag.toString())))
</script>

<template>
  <div :class="`grid grid-cols-${props.minCols} sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 md:p-4`">
    <div v-for="project in projects" :key="project.path" class="project sm:p-4 p-0 relative grid items-center">
      <NuxtLink :to="project.path" class="project-link" :title="`Voir le projet: ${project.title}`">
        <NuxtImg
          :src="project.image || '/projects/placeholder.jpg'"
          :alt="project.title"
          sizes="100vw sm:50vw md:400px"
          :placeholder="[50, 50, 50, 10]"
          class="project-img"/>
        <span class="project-title text-[10px] ">{{ project.title }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.project-link {
  cursor: crosshair !important;
}

.project-link.router-link-exact-active {
  opacity: 0.25;
}

.project-img {
  width: 100%;
  max-height: 50vh;
  object-fit: contain;
}

.project-title {
  display: block;
  text-align: center;
  padding: 2em 0 0 0;
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