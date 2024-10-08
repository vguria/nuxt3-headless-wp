<template>
    <div class="">
      <article class="relative mb-4 aspect-video rounded-lg overflow-hidden">
        <NuxtLink :to="`/ocio/${posts[0].slug}`" class="">
          <img :src="posts[0].featuredImage.node.sourceUrl" class="absolute h-64 aspect-video 
          object-cover rounded-lg mr-2" alt="featured image">
          <div class="">
            <h2 class="text-2xl text-gray-800 leading-5">{{ posts[0].title }}</h2>
          </div>
        </NuxtLink>
        <Voting :post="posts[0]" />
      </article>
      <post-link-square v-for="post in restPosts" :key="post.id" :post="post" cat="ocio"/>
    </div>
</template>

<script setup>
const q = `
{
  posts(first: 5, where: {categoryName: "ocio"}) {
    nodes {
      id
      title
      slug
      snaxFakeVoteCount
      featuredImage {
        node {
          sourceUrl
        }
      },
      categories {
        nodes {
          id
          name
          slug
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

</style>