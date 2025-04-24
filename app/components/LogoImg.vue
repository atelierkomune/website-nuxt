<script setup lang="ts">
    const colorMode = useColorMode()
</script>
<template>
    <NuxtImg 
        :src="colorMode.value === 'dark' ? '/logo-dark.png' : '/logo.png'" 
        alt="logo" 
        class="w-20" 
        sizes="100vw sm:50vw md:25vw"/>
</template>