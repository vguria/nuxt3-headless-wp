<template>
  <div>
    <Sidenav :isOpen="isSidenavOpen" />
      <section :class="`main-area ${isSidenavOpen ? 'ml-32': ''}`">
        <Header />
          <div class="">
            <slot />
          </div>
      </section>
    <Footer />
  </div>
</template>

<script setup>
import { useSidenavState } from '~/composables/sidenavState';
const { isSidenavOpen, toggleSidenav } = useSidenavState();
</script>

<style scoped>
.main-area {
  transition: margin-left 0.25s ease-in-out;
}
</style>