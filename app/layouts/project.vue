<template>
  <div class="min-h-screen grid gap-8 p-12 pb-32">

    <div class="flex">
      <UButton
        class="p-0 rounded-none"
        variant="ghost"
        color="neutral"
        size="xs"
        to="/">
        <LogoImg />
      </UButton>
    </div>

    <div class="w-full md:grid">
      <NuxtPage />
    </div>

    <ProjectsList class="mt-16"/>
  </div>
</template>