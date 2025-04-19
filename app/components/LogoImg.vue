<script setup lang="ts">
    const colorMode = useColorMode()
</script>
<template>
    <img :src="colorMode.value === 'dark' ? '/logo-dark.png' : '/logo.png'" alt="logo" class="w-20">
</template>