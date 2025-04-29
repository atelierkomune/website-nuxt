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
body {
  background-color:  v-bind('appConfig.app.background');
}
@theme static {
  --font-sans: v-bind('appConfig.app.fonts?.paragraphe'), 'Outfit', sans-serif;
  --font-serif: v-bind('appConfig.app.fonts?.paragraphe'), 'IBM Plex Mono', serif;
}
</style>