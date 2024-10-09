<template>
  <article class="article mb-4">
    <NuxtLink :to="`/${cat}/${post.slug}`" class="flex flex-row flex-nowrap">
      <img :src="post.featuredImage.node.sourceUrl" class="size-24 aspect-video 
          object-cover rounded-lg mr-2" alt="featured image">
      <div class="">
        <h2 class="text-base text-gray-800 dark:text-zinc-300 leading-5 font-semibold">{{ post.title }}</h2>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
const { post } = defineProps(['post', 'cat'])
</script>

<style scoped>
.article img {
  transition: all 0.3s;
  filter: brightness(1);
}

.article:hover img {
  transition: all 0.3s;
  filter: brightness(0.75);
}

.article:hover h2 {
  transition: all 0.3s;
  color: red;
}
</style>