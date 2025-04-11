<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('page', ['title', 'path', 'showPageInMenu', 'body'])
})

console.log('navigation', navigation.value);

const isOpen = ref(false)
const items = computed(() => {
  return navigation.value?.map<NavigationMenuItem>((item) => ({
    label: item.title,
    to: item.path,
    slot: item.showPageInMenu ? 'body' as const : undefined,
    children: item.showPageInMenu ? [{ body: item.body }] : undefined
  }))
})
</script>
<template>
  <div>
    <UDrawer v-model:open="isOpen" direction="left" fixed>
      <template #content>
        <div class="w-3xs p-4">
          <img src="/favicon.ico" alt="logo" class="w-20">
          <UNavigationMenu orientation="vertical" :items="items">
            <template #item-content="{ item }">
              {{ items }}
              <ContentRenderer v-for="child in item.children" :key="child.path" :value="child.body" />
            </template>
          </UNavigationMenu>  
          <DarkModeButton />
        </div>
      </template>
    </UDrawer>

    <div class="md:flex gap-8 p-4 md:p-6 lg:p-8">
      <div class="sticky z-10 top-4 md:top-0 w-full max-w-60 md:relative">
        <div class="hidden md:block sticky top-4 flex justify-between items-center">
          <img src="/favicon.ico" alt="logo" class="w-20">
          <UNavigationMenu orientation="vertical" :items="items">
            <template #item-content="{ item }">
              coucou
              <pre>{{ item }}</pre>
              <ContentRenderer v-for="child in item.children" :key="child.path" :value="child.body" />
            </template>
          </UNavigationMenu>
          <DarkModeButton />
        </div>

        <UButton
          class="md:hidden"
          variant="ghost"
          icon="i-mdi-menu" 
          @click="isOpen = true" />
      </div>
      <div class="w-full">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
