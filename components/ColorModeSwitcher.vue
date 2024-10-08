<template>
  <div>
    <ClientOnly>
      <button class="text-black" v-show="$colorMode.preference === 'light'" 
      @click="$colorMode.preference = 'dark'">
      <Icon name="material-symbols:nightlight-outline" class="text-black text-6xl"/>
      </button>
      <button class="text-white" v-show="$colorMode.preference === 'dark'"
      @click="$colorMode.preference = 'light'">
        <Icon name="material-symbols:wb-sunny" class="text-white text-6xl hover:text-red-600"/>
      </button>
  </ClientOnly>    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        colors: ['system', 'light', 'dark', 'sepia']
      }
    }
  }
</script>

<style>

</style>