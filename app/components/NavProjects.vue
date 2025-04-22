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
    <div v-if="surroundings" class="sticky md:relative bottom-8 md:bottom-0 flex gap-8 mt-4 justify-between">
      <div>
        <UButton 
          v-if="surroundings[0]?.path"
          variant="solid"
          color="neutral" 
          :to="surroundings[0]?.path"
          icon="i-mdi-arrow-left" 
          class="w-full justify-start rounded-none">
          <div>
            <small>Projet</small>
          <br>
          <span>{{ surroundings[0].title }}</span>
          </div>
        </UButton>
      </div>
      <div>
        <UButton 
          v-if="surroundings[1]?.path"
          variant="solid"
          color="neutral" 
          :to="surroundings[1]?.path" 
          trailing-icon="i-mdi-arrow-right" 
          class="w-full justify-end text-right rounded-none">
          <div>
            <small>Projet</small>
          <br>
          <span>{{ surroundings[1].title }}</span>
          </div>
        </UButton>
      </div>
    </div>
</template>