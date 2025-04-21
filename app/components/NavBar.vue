<script setup lang="ts">
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
  <div class="nav_bar">
    <NuxtLink to="/">
      <LogoImg />
    </NuxtLink>
    <nav aria-label="Navigation" class="grid gap-2">
      <template v-for="item in items" :key="item.to">
        <!-- link -->
        <ULink v-if="!item.page" block type="button" variant="ghost" class="justify-start font-extrabold" :to="item.to">
          {{ item.label }}
        </ULink>

        <!-- content -->
        <UCollapsible v-else class="w-full">
          <ULink block type="button" variant="ghost" class="justify-start font-extrabold font-normal" :to="`#${item.stem}`">
            {{ item.label }}
          </ULink>
          <template #content>
            <ContentRenderer :value="item.page" class="text-xs leading-5 p-2" />
          </template>
        </UCollapsible>
      </template>
    </nav>
  </div>
</template>

<style scoped>
.nav_bar{
  overflow: auto;
  min-height: 100%;
}
</style>