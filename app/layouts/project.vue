<template>
  <div class="min-h-screen grid gap- p-12 pb-32">

    <div class="flex">
      <NuxtLink to="/" class="sticky z-10 top-8">
        <LogoImg />
      </NuxtLink>
    </div>

    <div class="w-full md:grid">
      <NuxtPage />
    </div>

    <ClientOnly>
      <ProjectsList class="mt-16" :min-cols="2"/>
    </ClientOnly>
  </div>
</template>