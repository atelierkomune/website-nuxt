<script setup lang="ts">
const appConfig = useAppConfig()

if (import.meta.client) {
  if (appConfig.app.fonts?.title)
    document.documentElement.style.setProperty('--font-serif', `'${appConfig.app.fonts?.title}', sans-serif`)
  if (appConfig.app.fonts?.paragraphe)
    document.documentElement.style.setProperty('--font-sans', `'${appConfig.app.fonts?.paragraphe}', sans`)
}

const appConfigFontsParagraphe = computed(() => appConfig.app.fonts?.paragraphe || 'Outfit')
const appConfigFontsTitle = computed(() => appConfig.app.fonts?.title || 'IBM Plex Mono')
const fontsUrl = computed(() => (`https://fonts.googleapis.com/css2?family=${appConfigFontsParagraphe}:wght@100..900&family=${appConfigFontsTitle}:wght@100..900&display=swap`))
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

