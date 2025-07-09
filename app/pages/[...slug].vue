<script setup lang="ts">
definePageMeta({
  scrollToTop: true
})

const route = useRoute()
const { data: page } = await useAsyncData(
  route.path,
  () => queryCollection('page').path(route.path).first(),
  { watch: [() => route.path] }
)

const { data: surroundings } = await useAsyncData(
  `${route.path}-surroundings`,
  () => queryCollectionItemSurroundings('page', route.path),
  { watch: [() => route.path] }
)

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})

if (!page.value) {
  createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}
</script>

<template>
  <div class="page">
    <ContentRenderer v-if="page" :value="page" />

    <div v-if="surroundings" class="grid grid-cols-2 gap-4 mt-4">
        <div>
          <UButton 
            v-if="surroundings[0]?.path"
            variant="ghost" 
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
            variant="ghost" 
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
  </div>
</template>