<script setup lang="ts">
const props = defineProps<{
    path: string
}>()
const { data: surroundings } = await useAsyncData(
  `${props.path}-surroundings`,
  () => queryCollectionItemSurroundings('projects', props.path),
  { watch: [() => props.path] }
)
</script>
<template>
  <div v-if="surroundings">
    <ULink 
      v-if="surroundings[0]?.path"
      variant="ghost"
      color="neutral" 
      :to="surroundings[0]?.path">
      Projet précédent
    </ULink>
    <span>|</span>
    <ULink 
      v-if="surroundings[1]?.path"
      variant="ghost"
      color="neutral" 
      :to="surroundings[1]?.path">
      Projet suivant
    </ULink>
  </div>
</template>