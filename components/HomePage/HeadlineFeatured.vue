<template>
  <div v-show="post" class="featured relative w-full h-full">
    <img :src="`${post.featuredImage.node.sourceUrl}`" class="absolute t-0 l-0 w-full h-full object-cover z-0" alt="">
    <div :class="`absolute t-0 l-0 z-1 w-full h-full flex items-end ${padding}`">
      <NuxtLink :to="`${post.categories.nodes[0].slug}/${post.slug}`">
        <h3 :class="`text-white font-bold text-${size}`">{{ post.title }}</h3>
      </NuxtLink>
    </div>
    <Voting :post="post" />
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object,
  size: String
})
const padding = props.size === 'xl' ? 'p-4' : 'p-8'
</script>

<style scoped>
.featured img {
  transition: all 0.3s;
  filter: brightness(0.8);
  z-index: 0;
}

.featured:hover img {
  filter: brightness(0.5);
  transform: scale(1.25);
}

.featured h3 {
  transition: all 0.3s;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.featured:hover h3 {
  color: red;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
}
</style>