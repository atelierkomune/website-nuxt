<script setup lang="ts">
const isOpen = ref(false)

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
    <UDrawer v-model:open="isOpen" direction="left" fixed>
      <template #content>
        <div class="w-3xs p-4">
          <i>INSERT MENU HERE</i>
        </div>
      </template>
    </UDrawer>

    <div class="md:flex gap-8 p-4 md:p-6 lg:p-8">
      <div class="sticky z-10 top-4 md:top-0 w-full max-w-60 md:relative">
        <div class="hidden md:block sticky top-4 flex justify-between items-center">
          <img src="/favicon.ico" alt="logo" class="w-20">
          <nav class="grid">
            <template v-for="item in items" :key="item.to">
              <UCollapsible v-if="item.page">
                <UButton block type="button" variant="ghost" class="justify-start font-extrabold p-0">
                  {{ item.label }}
                </UButton>
                <template #content>
                  <ContentRenderer :value="item.page" class="text-xs p-2" />
                </template>
              </UCollapsible>
              <UButton v-else block type="button" variant="ghost" class="justify-start font-extrabold p-0" :to="item.to">
                {{ item.label }}
              </UButton>
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
