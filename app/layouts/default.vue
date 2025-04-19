<script setup lang="ts">
const isOpen = ref(false)
</script>
<template>
  <div class="h-screen">
    <UDrawer v-model:open="isOpen" fixed direction="left" class="w-full">
      <template #content>
        <NavBar class="p-8"/>
      </template>
    </UDrawer>

    <div class="md:flex gap-8 p-12">

      <div class="sticky z-10 top-4 md:top-0 w-full max-w-60 md:relative">
        <div class="hidden md:block sticky top-4 flex justify-between items-center">
          <NavBar />
        </div>

        <UButton
          class="md:hidden"
          variant="soft"
          color="neutral" 
          icon="i-mdi-menu" 
          @click="isOpen = true" />
      </div>

      <div class="w-full md:grid">
        <div class="md:hidden flex mt-4 mb-8">
          <LogoImg />
        </div>
        <NuxtPage />
      </div>
    </div>

    <div class="fixed bottom-8 left-8 z-10">
      <DarkModeButton/>
    </div>
  </div>
</template>

<style>
nav a:hover {
  transform: translateX(10px);
} 
</style>