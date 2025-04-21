<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <div class="min-h-screen m-auto">
    <div class="grid gap-8 p-12 pb-32">

      <div class="flex">
        <UButton
          class="p-0 rounded-none"
          variant="ghost"
          color="neutral"
          size="xs"
          to="/">
          <LogoImg />
        </UButton>
      </div>

      <div class="w-full md:grid">
        <NuxtPage />
      </div>

      <NavProjects :path="route.path"/>

    </div>
  </div>
</template>