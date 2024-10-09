<template>
  <transition>
    <aside v-show="isSidenavOpen" class="sidenav fixed h-screen bg-gray-100
     dark:bg-black w-64 px-0 py-0 t0 l0 z-20" v-click-outside="closeSidenav">
      <div class="sidenav-header bg-gray-400 dark:bg-gray-800 py-2 px-4 dark:text-white">
        <ClientOnly>
          <img
            :src="`${$colorMode.preference === 'dark' ? '/img/logo-white-no-tagline.webp' : '/img/logo-no-tagline.webp'}`"
            alt="BelAir Magazine">
        </ClientOnly>
      </div>
      <nav id="sidenav-main" class="p-4">
        <h3 class="text-lg font-semibold dark:text-white uppercase mb-2">
          Secciones
        </h3>
        <ul>
          <li>
            <SidenavLink to="/" text="Inicio" />
          </li>
          <li>
            <SidenavLink to="/flash" text="Noticias Flash" />
          </li>
          <li>
            <SidenavLink to="/belleza" text="Belleza" />
          </li>
          <li>
            <SidenavLink to="/moda" text="Moda" />
          </li>
          <li>
            <SidenavLink to="/ocio" text="Ocio" />
          </li>
          <li>
            <SidenavLink to="/turismo" text="Turismo" />
          </li>
          <li>
            <SidenavLink to="/gastronomia" text="Gastronomía" />
          </li>                              
          <li>
            <SidenavLink to="/sociedad" text="Sociedad" />
          </li>                                        
        </ul>
      </nav>
    </aside>
  </transition>
</template>

<script setup>
import { useSidenavState } from '~/composables/sidenavState';
const { isSidenavOpen, closeSidenav } = useSidenavState();
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}
</style>