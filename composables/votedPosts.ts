import { ref } from "vue";

const votedPosts = ref<string[]>([]);
const addVotedPost = (postId: string) => {
  votedPosts.value.push(postId);
};
const removeVotedPost = (postId: string) => {
  votedPosts.value = votedPosts.value.filter((id) => id !== postId);
};
const isVotedPost = (postId: string) => {
  return votedPosts.value.includes(postId);
};
export const useVotedPosts = () => {
  return {
    votedPosts,
    addVotedPost,
    removeVotedPost,
    isVotedPost,
  };
};
