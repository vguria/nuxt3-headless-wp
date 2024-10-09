<template>
  <div class="">
    <article class="featured relative mb-4 aspect-video rounded-lg overflow-hidden">
      <NuxtLink :to="`/gastronomia/${posts[0].slug}`" class="">
        <img :src="posts[0].featuredImage.node.sourceUrl" class=" absolute h-64 aspect-video 
        object-cover rounded-lg mr-2" alt="featured image">
        <div class="absolute z-1 p-4 bottom-0">
          <h3 class="text-lg text-white font-semibold leading-5">{{ posts[0].title }}</h3>
        </div>
      </NuxtLink>
      <Voting :post="posts[0]" />
    </article>
    <post-link-square v-for="post in restPosts" :key="post.id" :post="post" cat="gastronomia"/>
  </div>
</template>

<script setup>
const q = `
{
posts(first: 5, where: {categoryName: "gastronomia"}) {
  nodes {
    id
    title
    slug
    snaxFakeVoteCount
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
}
`

//make the graphql request
const config = useRuntimeConfig()
const { data: response } = await useFetch(config.public.graphql, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ query: q })
})
const posts = response._rawValue.data.posts.nodes
const restPosts = computed(() => posts.slice(1))
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
  text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
}
.featured:hover h3 {
  color: red;
  text-shadow: 4px 4px 4px rgba(0,0,0,0.5);
}
</style>