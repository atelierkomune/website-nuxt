<script setup lang="ts">
    const colorMode = useColorMode()
    const appConfig = useAppConfig()

const isDark = ref<boolean>()

onMounted(() => {
    isDark.value = colorMode.value === 'dark'
})
watch(colorMode, () => {
    isDark.value = colorMode.value === 'dark'
})
</script>
<template>
    <NuxtImg 
        :src="isDark ? appConfig.app.logo?.darkMode : appConfig.app.logo?.lightMode" 
        :alt="appConfig.app.sitename"
        class="w-20" 
        sizes="100vw sm:50vw md:25vw"/>
</template>