<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
@theme static {
  --font-sans: v-bind('appConfig.app.fonts?.paragraphe'), 'Outfit', sans-serif;
  --font-serif: v-bind('appConfig.app.fonts?.paragraphe'), 'IBM Plex Mono', serif;
}
</style>