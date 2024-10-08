<template>
  <div>
    <div>
      <button class="text-black text-5xl hover:text-red-800" v-show="$colorMode.preference === 'light'" 
      @click="$colorMode.preference = 'dark'">
        ☾
      </button>
      <button class="text-white text-5xl hover:text-red-800" v-show="$colorMode.preference === 'dark'"
      @click="$colorMode.preference = 'light'">
        ☼
      </button>
      <button v-show="$colorMode.preference === 'system' ||
      $colorMode.preference === 'sepia'"
      @click="$colorMode.preference = 'dark'">
        Dark
      </button>
  </div>    
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