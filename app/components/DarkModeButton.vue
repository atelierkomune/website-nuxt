<script setup>
const colorMode = useColorMode()
const colorModeCookie = useCookie('ak-color-mode') 
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorModeCookie.value = colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

onMounted(() => {
  if(colorModeCookie.value)
    colorMode.preference = colorMode.value = colorModeCookie.value
})

</script>

<template>
  <div v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="ghost"
      size="xs"
      @click="isDark = !isDark"
    />

    <!-- <template #fallback>
      <div class="size-8" />
    </template> -->
  </div>
</template>
