<template>
  <div class="headline w-full mt-12">
    <div class="grid grid-rows-4 grid-cols-12 grid-flow-col gap-4 w-full h-full">
      <div class="relative rounded-3xl col-span-8 row-span-4 overflow-hidden">
        <HomePageHeadlineFeatured :post="posts[0]" size="3xl"/>
      </div>
      <div class="relative rounded-3xl col-span-4 row-span-2 overflow-hidden">
        <HomePageHeadlineFeatured :post="posts[1]" size="xl"/>
      </div>
      <div class="relative rounded-3xl col-span-4 row-span-2 overflow-hidden">
        <HomePageHeadlineFeatured :post="posts[2]" size="xl"/>
      </div>
    </div>    
  </div>
</template>

<script setup>
const q = `
  {
    posts(first: 3) {
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
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
  `
  const config = useRuntimeConfig()
  const { data: response } = await useFetch(config.public.graphql, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: q })
  })
  const posts = response._rawValue.data.posts.nodes
</script>

<style scoped>
.headline {
  height: 50vh;
}
</style>