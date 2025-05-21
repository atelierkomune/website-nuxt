<script setup lang="ts">
    const colorMode = useColorMode()
    const appConfig = useAppConfig()
</script>
<template>
    <NuxtImg 
      :src="colorMode.value === 'dark' ? appConfig.app.logo?.darkMode : appConfig.app.logo?.lightMode" 
      :alt="appConfig.app.sitename"
      class="w-20" 
      sizes="100vw sm:50vw md:25vw"/>
</template>