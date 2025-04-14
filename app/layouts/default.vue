<script setup lang="ts">
const isOpen = ref(false)
const location = useBrowserLocation()
const colorMode = useColorMode()

const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('page', ['stem', 'title', 'path', 'showPageInMenu', 'body'])
})

const items = computed(() => {
  return navigation.value?.map((item) => ({
    stem: item.stem,
    label: item.title,
    to: item.path,
    page: item.showPageInMenu && item.body
  }))
})
</script>
<template>
  <div>
    <UDrawer v-model:open="isOpen" fixed direction="left" class="w-full">
      <template #content>
        <nav class="overflow-y-auto p-4">
          <template v-for="item in items" :key="item.to">
            <UCollapsible v-if="item.page">
              <ULink block type="button" variant="ghost" class="justify-start font-extrabold">
                {{ item.label }}
              </ULink>
              <template #content>
                <ContentRenderer :value="item.page" class="text-xs p-2" />
              </template>
            </UCollapsible>
            <ULink v-else block type="button" variant="ghost" class="justify-start font-extrabold" :to="item.to">
              {{ item.label }}
            </ULink>
          </template>
        </nav>
      </template>
    </UDrawer>

    <div class="md:flex gap-8 p-4 md:p-6 lg:p-8">

      <div class="sticky z-10 top-4 md:top-0 w-full max-w-60 md:relative">
        <div class="hidden md:block sticky top-4 flex justify-between items-center">
          <img :src="colorMode.value === 'dark' ? '/logo-dark.png' : '/logo.png'" alt="logo" class="w-20">
          <nav aria-label="Navigation">
            <template v-for="item in items" :key="item.to">
              <UCollapsible v-if="item.page" class="w-full" :open="location.hash === `#${item.stem}`">
                <ULink block type="button" variant="ghost" class="justify-start font-extrabold" :to="`#${item.stem}`">
                  {{ item.label }}
                </ULink>
                <template #content>
                  <ContentRenderer :value="item.page" class="text-xs p-2" />
                </template>
              </UCollapsible>
              <ULink v-else block type="button" variant="ghost" class="justify-start font-extrabold" :to="item.to">
                {{ item.label }}
              </ULink>
            </template>
          </nav>
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

<style>
nav a:hover {
  transform: translateX(10px);
} 
</style>