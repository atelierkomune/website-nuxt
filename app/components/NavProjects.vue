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
    <div v-if="surroundings" class="sticky bottom-8 grid grid-cols-2 gap-8 mt-4 px-8">
      <div>
        <UButton 
          v-if="surroundings[0]?.path"
          variant="soft"
          color="neutral" 
          :to="surroundings[0]?.path"
          icon="i-mdi-arrow-left" 
          class="w-full justify-start">
          <div>
            <small>previous page</small>
          <br>
          <span>{{ surroundings[0].title }}</span>
          </div>
        </UButton>
      </div>
      <div>
        <UButton 
          v-if="surroundings[1]?.path"
          variant="soft"
          color="neutral" 
          :to="surroundings[1]?.path" 
          trailing-icon="i-mdi-arrow-right" 
          class="w-full justify-end text-right">
          <div>
            <small>next page</small>
          <br>
          <span>{{ surroundings[1].title }}</span>
          </div>
        </UButton>
      </div>
    </div>
</template>