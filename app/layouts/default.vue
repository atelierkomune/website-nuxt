<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()
const isOpen = ref(false)
const showDiapo = ref(true)

if(import.meta.client) {
  showDiapo.value = !sessionStorage.getItem('showDiapo')
}

const diapoImages = computed(() => appConfig.app?.diapo?.images ? Object.values(appConfig.app.diapo.images).filter(src => src.length) : [])
const currentDiapoImage = ref(Math.ceil(Math.random() * diapoImages.value.length - 1))

const enter = () => {
  showDiapo.value = false
  sessionStorage.setItem('showDiapo', '1')
}

watch(() => route.fullPath, () => {
  if(isOpen.value) isOpen.value = false
})

</script>
<template>
  <div class="min-h-screen m-auto">

    <!-- diapo -->
    <div v-if="diapoImages.length && showDiapo" class="fixed z-200 h-screen w-full grid items-center justify-center cursor-crosshair bg-theme" @click="enter">
      <img 
        v-if="appConfig.app.logo?.landing"
        class="z-10 w-60"
        :src="appConfig.app.logo?.landing"
        :alt="appConfig.app.sitename">
      <NuxtImg
        v-for="(image, index) in diapoImages"
        :key="image" 
        :src="image" 
        sizes="100vw sm:50vw md:400px"
        placeholder
        :class="['absolute w-full h-full object-cover p-0', {'hidden': currentDiapoImage !== index}]"
        />
    </div>

    <UDrawer v-model:open="isOpen" fixed direction="left" class="w-full">
      <template #content>
        <NavBar class="p-8"/>
      </template>
    </UDrawer>

    <div class="md:flex gap-8 p-12 pb-32">

      <div class="sticky z-100 top-4 md:top-0 w-full max-w-60 md:relative">
        <div class="hidden md:block sticky top-4 flex justify-between items-center">
          <NavBar />
        </div>

        <ULink
          class="md:hidden cursor-pointer"
          size="xs"
          @click="isOpen = true">
          <LogoImg />
        </ULink>
      </div>

      <div class="w-full md:grid">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>