<script setup lang="ts">
const isOpen = ref(false)
</script>
<template>
  <div class="min-h-screen m-auto">
    <UDrawer v-model:open="isOpen" fixed direction="left" class="w-full">
      <template #content>
        <NavBar class="p-8"/>
      </template>
    </UDrawer>

    <div class="md:flex gap-8 p-12 pb-32">

      <div class="sticky z-10 top-4 md:top-0 w-full max-w-60 md:relative">
        <div class="hidden md:block sticky top-4 flex justify-between items-center">
          <NavBar />
        </div>

        <UButton
          class="md:hidden p-0 rounded-none"
          variant="ghost"
          color="neutral"
          size="xs"
          @click="isOpen = true">
          <LogoImg />
        </UButton>
      </div>

      <div class="w-full md:grid">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>