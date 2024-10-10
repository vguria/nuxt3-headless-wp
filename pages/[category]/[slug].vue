<template>
  <div>
    <header class="bg-green-600 h-[60vh] relative flex flex-column items-end -z-1">
      <img class="absolute w-full h-full object-cover -z-1" 
      :src="`${post.featuredImage.node.sourceUrl}`" />
      <div class="container mx-auto bg-white/50 dark:bg-zinc-900/50 h-32 backdrop-blur-lg px-12 
      flex flex-col justify-center rounded-t-3xl">
        <h1 class="text-4xl font-bold dark:text-zinc-100">{{ post.title }}</h1>
      </div>
    </header>
    <div class="post-body container mx-auto flex">
      <article class="p-12 bg-gray-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 z-2 basis-8/12">
        <div v-html="$sanitizeHTML(post.content)" class="text-lg dark:text-zinc-300"></div>
      </article>
      <aside class="sidebar px-4 py-10 m-0 bg-zinc-200 dark:bg-zinc-950 basis-4/12 z-2">
        <h2 class="text-2xl font-bold border-b border-black dark:border-zinc-100 
        dark:text-zinc-100 py-2">Más en {{ post.categories.nodes[0].name }}</h2>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRuntimeConfig } from '#imports'
const { $sanitizeHTML } = useNuxtApp()

const config = useRuntimeConfig()
const route = useRoute()
const post = ref(null)

const q = `
{
  post(id: "${route.params.slug}", idType: SLUG) {
    title
    content
    categories {
      nodes {
        name
        slug
      }
    },
    featuredImage {
      node {
        sourceUrl
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

post.value = response._rawValue.data.post
if (process.client) {

  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = post.value.content
  tempDiv.querySelectorAll('img').forEach((img) => {
    img.src = img.getAttribute('data-src')
    img.removeAttribute('data-src')
  })
  console.log(tempDiv)
  post.value.content = tempDiv.innerHTML
}
if (process.server) {
  const { JSDOM } = await import('jsdom');
  const dom = new JSDOM(post.value.content)
  const tempDiv = dom.window.document.createElement('div')
  tempDiv.innerHTML = post.value.content

  // Reemplazar data-src con src en las imágenes
  tempDiv.querySelectorAll('img').forEach((img) => {
    img.src = img.getAttribute('data-src')
    img.removeAttribute('data-src')
  })  
  post.value.content = tempDiv.innerHTML
}
</script>