<template>
  <div class="container my-6">
    <div class="featured relative rounded-3xl w-full overflow-hidden aspect-video -mb-32">
      <img :src="posts[0].featuredImage.node.sourceUrl" class="absolute top-0 left-0 w-full object-cover" alt="featured image">
      <NuxtLink :to="`${posts[0].categories.nodes[0].slug}/${posts[0].slug}`">
        <h3 class="absolute text-3xl text-white font-bold z-1 text-center bottom-32 w-2/3 mx-auto">{{ posts[0].title }}</h3>
      </NuxtLink>
      <Voting :post="posts[0]" />
      <pre>{{ posts[0] }}</pre>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 p-12">
      <div v-for="post in remainingPosts" :key="post.id" class="relative bg-white rounded-lg shadow-md col-span-3">
        <Voting :post="post" />
        <NuxtLink :to="`/${post.categories.nodes[0].slug}/${post.slug}`">
          <img :src="post.featuredImage.node.sourceUrl" class="w-full h-48 object-cover rounded-t-lg" alt="featured image">
          <div class="p-4">
            <h2 class="text-lg font-semibold leading-5 text-gray-800 hover:text-red-600">{{ post.title }}</h2>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const graphql = `${config.public.graphql}`

const q = `
{
  posts(first: 5, where: { categoryName: "Flash" }) {
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
//make the graphql request
const { data: response } = await useFetch(graphql, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: q })
})
const posts = response._rawValue.data.posts.nodes

const remainingPosts = computed(() => posts.slice(1))
console.log(posts)
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
  text-shadow: 4px 4px 4px rgba(0,0,0,0.5);
}
</style>