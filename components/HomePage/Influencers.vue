<template>
  <NuxtMarquee pauseOnHover pauseOnClick gradient>
    <HomePageInfluencer v-for="influencer in influencers" :key="influencer.id" 
    :name="influencer.title.rendered" 
    :profilePicture="influencer._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url"/>
  </NuxtMarquee>
</template>

<script setup>
const config  = useRuntimeConfig()
const q = `${config.public.apiBase}influencers/?_fields=id,slug,title,excerpt,featured_media,_links,_embedded&_embed=wp:featuredmedia&per_page=24`
const {data: influencers} = await useFetch(q);
</script>

<style scoped>

</style>