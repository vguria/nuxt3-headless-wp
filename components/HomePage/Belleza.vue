<template>
  <div class="w-full grid grid-cols-3 gap-4 rounded-xl my-4">
    <div class="col-span-1">
      <h2
        class="text-xl font-bold border-b border-zinc-950 dark:border-zinc-100 dark:text-zinc-100 col-span-1 pb-2 mb-4">
        Noticias de belleza</h2>
      <div class="h-96 overflow-x-scroll pr-4">
        <post-link-square v-for="post in restPosts" :key="post.id" :post="post" cat="belleza" />
      </div>
    </div>
    <article class="featured relative rounded-3xl col-span-2 row-span-2 overflow-hidden aspect-video">
      <img :src="posts[0].featuredImage.node.sourceUrl" class="w-full object-cover" alt="featured image">
      <div class="absolute bottom-0 left-0 p-4">
        <NuxtLink :to="`belleza/${posts[0].slug}`">
          <h3 class="text-3xl font-bold text-white">{{ posts[0].title }}</h3>
        </NuxtLink>
      </div>
      <Voting :post="posts[0]" />
    </article>
  </div>
</template>

<script setup>

const q = `
{
  posts(first: 6, where: {categoryName: "belleza"}) {
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
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.featured:hover h3 {
  color: red;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
}
</style>