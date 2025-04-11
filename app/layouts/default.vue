<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('page')
})

const { data: navigationProjects } = await useAsyncData('navigationProjects', () => {
  return queryCollectionNavigation('projects')
})

console.log('navigation', navigation.value);
console.log('navigationProjects', navigationProjects.value);

const isOpen = ref(false)
const items = computed(() => {
  return navigation.value?.map((item) => ({
    label: item.title,
    to: item.path
  }))
})

const itemsProjects = computed(() => {
  return navigationProjects.value?.map((item) => ({
    label: item.title,
    to: item.path
  }))
})
</script>
<template>
  <div class="md:flex p-4 gap-4">
    <div class="fixed top-4 left-4 w-1/4 md:relative">
      <div class="hidden md:block sticky top-4 flex justify-between items-center">
        <UNavigationMenu orientation="vertical" :items="items" />
        <hr class="w-full my-4 border-t border-gray-200">
        <DarkModeButton />

        <hr>
        <UNavigationMenu orientation="vertical" :items="itemsProjects" />
      </div>

      <UButton
        class="md:hidden"
        variant="ghost"
        icon="i-mdi-menu" 
        @click="isOpen = true" />

      <UDrawer v-model:open="isOpen" direction="left" fixed>
        <template #content>
          <div class="w-60 p-4">
            <UNavigationMenu orientation="vertical" :items="items" />
            <DarkModeButton />
          </div>
        </template>
      </UDrawer>
    </div>
    <div class="md:w-3/4 pt-10 p-4">
      <NuxtPage />
    </div>
  </div>
</template>
