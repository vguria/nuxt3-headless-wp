<template>
  <article class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <NuxtImg class="rounded-t-lg" :src=post.featured_img alt="" />
    <div class="p-5">
      <NuxtLink :to="`/post/${post.id}`">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white dark:hover:text-gray-300">
          {{ post.title.rendered }}
        </h5>
      </NuxtLink>

      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ excerpt }}
      </p>

      <NuxtLink :to="`/post/${post.id}`" class="inline-flex items-center px-3 py-2 text-sm font-medium 
        text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
        focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800">
        Saber más
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  post: Object
})
const excerpt = props.post.excerpt.rendered.slice(3, -111);
</script>