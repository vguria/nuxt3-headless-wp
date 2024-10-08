<template>
  <div id="voting" :class="`absolute top-0 right-0 z-3 m-4 bg-gray-200 hover:bg-red-200 
  py-1 px-2 rounded-full ${upVoted ? 'bg-red-100' : ''}`"
  @click="toggleUpVoted"
  >
    <p class="py-0 my-0 leading-4">
      <span class="counter text-xs leading-5 py-0 pr-1 text-zinc-900 h-full">
        {{ votes }}
      </span>
      <Icon v-show="!upVoted" name="material-symbols:favorite-outline" 
        class="text-lg leading-5 text-red-600"
        />
      <Icon v-show="upVoted" name="material-symbols:favorite" 
        class="text-lg text-red-600"
        />
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  post: Object
})

const upVoted = ref(false)
const votes = ref(parseInt(props.post.snaxFakeVoteCount))

const toggleUpVoted = () => {
  upVoted.value = !upVoted.value
  if(upVoted.value){
    votes.value += 1
  } else {
    votes.value -= 1
  }
}
</script>

<style scoped>
.counter{
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  vertical-align: top;
}
</style>