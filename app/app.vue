<script setup lang="ts">
const appConfig = useAppConfig()

if (import.meta.client) {
  if (appConfig.app.fonts?.title)
    document.documentElement.style.setProperty('--font-serif', `'${appConfig.app.fonts?.title}', sans-serif`)
  if (appConfig.app.fonts?.paragraphe)
    document.documentElement.style.setProperty('--font-sans', `'${appConfig.app.fonts?.paragraphe}', sans`)
}
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

