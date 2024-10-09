<template>
  <div :class="`absolute top-0 right-0 z-3 m-4 bg-gray-200 hover:bg-red-200 
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
import { ref, watch } from 'vue';
import { useVotedPosts } from '~/composables/votedPosts';

const props = defineProps({
  post: Object
})

const { votedPosts, addVotedPost, removeVotedPost, isVotedPost } = useVotedPosts()

const upVoted = ref(isVotedPost(props.post.id))
const votes = ref(parseInt(props.post.snaxFakeVoteCount))

const toggleUpVoted = () => {
  upVoted.value = !upVoted.value
  if(upVoted.value){
    votes.value += 1
    addVotedPost(props.post.id)
  } else {
    votes.value -= 1
    removeVotedPost(props.post.id)
  }
}
watch(votedPosts, (newVotedPosts) => {
  upVoted.value = isVotedPost(props.post.id)
  votes.value = parseInt(props.post.snaxFakeVoteCount) + (upVoted.value ? 1 : 0)
}, { deep: true })
</script>

<style scoped>
.counter{
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  vertical-align: top;
}
</style>