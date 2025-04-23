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
      variant="ghost"
      color="neutral" 
      class="text-xs uppercase text-right"
      :disabled="!surroundings[0]?.path"
      :to="surroundings[0]?.path">
      Projet précédent
    </ULink>
    <span>|</span>
    <ULink 
      variant="ghost"
      color="neutral" 
      class="text-xs uppercase"
      :disabled="!surroundings[1]?.path"
      :to="surroundings[1]?.path">
      Projet suivant
    </ULink>
  </div>
</template>