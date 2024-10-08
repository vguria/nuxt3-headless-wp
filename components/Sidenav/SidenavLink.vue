<template>
  <NuxtLink :to="to" 
    class="block py-2 px-4 text-gray-700 font-semibold rounded-md hover:pl-6 hover:text-red-800
     dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
    {{ text }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: String,
  text: String,
})
</script>

<style scoped>
a {
  transition: all 0.1s ease-in;
}
</style>