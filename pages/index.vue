<template>
  <div>
    <section id="headline" class="pt-20 bg-white dark:bg-zinc-900">
      <div class="container mx-auto py-4">
        <HomePageHeadline />
      </div>
    </section>
    <section id="belleza" class="dark:bg-zinc-900">
      <div class="container mx-auto py-4">
        <h2 class="text-center text-3xl font-bold dark:text-zinc-100">Belleza</h2>
        <div class="container mx-auto">
          <HomePageBelleza />
        </div>
      </div>
    </section>
    <section id="noticias-flash" class="bg-zinc-950 px-4 py-2">
      <div class="container mx-auto py-4">
        <h2 class="text-zinc-100  text-center text-3xl font-bold">Noticias Flash</h2>
        <HomePageNoticiasFlash />
      </div>
    </section>
    <section id="moda" class="dark:bg-zinc-900">
      <div class="container mx-auto py-4">
        <h2 class="text-center text-3xl font-bold dark:text-zinc-100">Moda</h2>
        <HomePageModa />
      </div>
    </section>
    <section id="ocio" class="dark:bg-zinc-900">
      <div class="container mx-auto py-4 grid grid-cols-3 gap-4">
        <div>
          <h2 class="text-2xl font-bold border-b border-black dark:border-white
          pb-2 mb-4  dark:text-white">Ocio</h2>
          <HomePageOcio />
        </div>
        <div>
          <h2 class="text-2xl font-bold border-b border-black dark:border-white 
           pb-2 mb-4 text-zinc-900 dark:text-white">Gastronomía</h2>
          <HomePageGastronomia />
        </div>
        <div>
          <h2 class="text-2xl font-bold border-b border-black dark:border-white 
          pb-2 mb-4 text-zinc-900 dark:text-white">Turismo</h2>
          <HomePageTurismo />
        </div>
      </div>
    </section>
    <section id="influencers" class="py-8 dark:bg-zinc-900">
      <div class="container mx-auto">
        <h2 class="text-center text-3xl mb-4 font-bold dark:text-zinc-100">Influencers</h2>
        <HomePageInfluencers />
      </div>
    </section>
  </div>
</template>

<script setup>

</script>