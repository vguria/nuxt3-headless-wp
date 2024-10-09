<template>
  <div>
    <header class="h-80 relative flex flex-column items-end -z-1"
      :style="`background-color: ${category.colorDeCategoria.color};`">
      <img class="absolute w-full h-full object-cover -z-1" :src="`${''}`" />
      <div class="container mx-auto bg-white/50 dark:bg-zinc-900/50 h-32 backdrop-blur-lg px-12 
      flex flex-col justify-center rounded-t-3xl">
        <h1 class="text-4xl font-bold dark:text-zinc-100">Posts de {{ category.name }}</h1>
      </div>
    </header>
    <div class="post-body w-full container mx-auto flex">
      <section class="p-12 bg-gray-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 flex-grow">
        
        <article v-for="post in category.posts.nodes" :key="post.id"
        class="article rounded-xl w-full mx-auto relative my-4 h-56 overflow-hidden">
          <NuxtLink :to="{name: 'category-slug', params: {slug: post.slug}}">
            <img :src="post.featuredImage.node.sourceUrl" alt="" class=" 
        absolute z-0 aspect-video object-cover">
            <h3 class="absolute z-1 text-3xl font-bold bottom-0 m-4 text-white dark:text-white">
              {{ post.title }}
            </h3>
            <Voting :post="post" />
          </NuxtLink>
        </article>
      </section>
      <aside class="p-12 bg-zinc-200 z-2">
        <h2 class="text-2xl font-bold border-b border-black dark:border-zinc-100 
        dark:text-zinc-100">Más noticias de </h2>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()
const route = useRoute()
const post = ref(null)

//Get the category with WPGraphQL
const q = `
{
  category(id: "${route.params.category}", idType: SLUG) {
    categoryId
    count
    databaseId
    description
    id
    name
    slug
    colorDeCategoria {
      color
    }    
    posts(first: 13) {
      nodes {
        id
        title
        excerpt
        slug
        date
        snaxFakeVoteCount
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}
`

const { data: response } = await useFetch(config.public.graphql, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: q })
})

const category = response._rawValue.data.category

</script>

<style scoped>
.article img {
  transition: all 0.3s;
  filter: brightness(0.8);
  z-index: 0;
}

.article:hover img {
  filter: brightness(0.5);
  transform: scale(1.25);
}

.article h3 {
  transition: all 0.3s;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.article:hover h3 {
  color: red;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
}
</style>