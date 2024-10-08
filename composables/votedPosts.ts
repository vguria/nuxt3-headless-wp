import { ref } from 'vue';

export function useVotedPosts() {
  const votedPosts = ref<string[]>([]);

  function addVotedPost(postId: string) {
    if (!votedPosts.value.includes(postId)) {
      votedPosts.value.push(postId);
    }
  }

  function removeVotedPost(postId: string) {
    votedPosts.value = votedPosts.value.filter(id => id !== postId);
  }

  return {
    votedPosts,
    addVotedPost,
    removeVotedPost
  };
}