<script setup lang="ts">
const route = useRoute()
const { data: projects } = await useAsyncData(
  'projects-tags',
  () => queryCollection('projects').select('tags').all(),
)

// Get unique tags from all projects
const uniqueTags = computed(() => {
  const allTags = projects.value?.flatMap(project => project.tags || []) || []
  return [...new Set(allTags)]
})
</script>

<template>
  <div
    class="flex items-center"
    v-for="tag in uniqueTags"
    :key="tag"
  >
    <NuxtLink
      :to="`/?tag=${tag}`"
      :class="{ active: tag === route.query.tag }"
      class="tag-link text-[10px]"
    >
      {{ tag }}
    </NuxtLink>
    <UButton
      v-if="tag === route.query.tag"
      icon="mdi-close"
      to="/"
      size="xs"
      variant="ghost"
      class="ml-2 p-0"
    />
  </div>
</template>

<style scoped>
.tag-link.active {
  font-weight: bold;
}
</style>