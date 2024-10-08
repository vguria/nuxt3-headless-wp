<template>
  <div>
    <header class="w-screen fixed backdrop-blur-lg z-10 bg-white/20 dark:bg-black/20">
      <div class="container px-12 mx-auto py-4 flex justify-between">
        <div class="grow-0">
          <button class="block" @click="toggleSidenav">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-black dark:text-white hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div class="header-main grow-1">
          <NuxtLink to="/">
            <img class="max-w-[180px]"
            :src="`${$colorMode.preference == 'dark' ? '/img/logo-white.webp': '/img/logo.webp'}`" alt="Belair Magazine" />
          </NuxtLink>
        </div>
        <div class="grow-0">
          <ColorModeSwitcher />
        </div>
      </div>
      <div class="w-100 bg-gray-200/50 dark:bg-black/50">
        <nav class="container mx-auto main-nav">
          <ul class="flex justify-center text-black  dark:text-white uppercase">
            <li class="mx-2 py-2 text-sm hover:text-red-900">
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="mx-2 py-2 text-sm hover:text-red-900">
              <NuxtLink to="/noticias-flash">Flash</NuxtLink>
            </li>
            <li class="mx-2 py-2 text-sm hover:text-red-900">
              <NuxtLink to="/belleza">Belleza</NuxtLink>
            </li>
            <li class="mx-2 py-2 text-sm hover:text-red-900">
              <NuxtLink to="/moda">Moda</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useSidenavState } from '~/composables/sidenavState';

const { isSidenavOpen, toggleSidenav } = useSidenavState();
</script>

<style scoped>
.main-nav a{
  transition: all 0.2s ease-in;
  font-family: 'Poppins', sans-serif;
}
.v-enter-active, .v-leave-active {
  transition: transform 0.3s ease;
}
.v-enter-from, .v-leave-to {
  transform: translateX(-100%);
}
</style>