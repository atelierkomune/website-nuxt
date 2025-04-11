<script setup lang="ts">
const props = defineProps<{
  path: string
}>()

const { data: projects } = await useAsyncData('projects', () => queryCollection('content')
  .where('path', 'LIKE', `${props.path}%`)
  .where('id', 'NOT LIKE', '%/index.md')
  .all()
)
</script>
<template>
  <div v-if="path">
    <div v-for="project in projects" :key="project.id">
      <NuxtLink :to="project.path">
        {{ project.title }}
      </NuxtLink>
    </div>
  </div>
  <div v-else>
    <i>No path provided</i>
  </div>
</template>