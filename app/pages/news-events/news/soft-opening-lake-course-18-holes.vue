<script setup lang="ts">
  import Banner from '~/components/Banner.vue';
  import Title from '~/components/Title.vue';
  import { information } from '~/data/pages/news/data';
  import Information from '~/components/Information.vue';
</script>

<template>
  <div>
    <!--- MAIN BANNER -->
    <Banner class="lg:mb-14 mb-8" image="banner/banner.webp"/>

    <!----Title--->
  <Title 
   textClass="text-amber border-none 2xl:text-4xl lg:text-4xl font-bold lg:max-w-8xl w-4/5"
   title="Soft Opening, the first 37-hole design by renowned golf course architect Brian Curley,<br> is now in Phnom Penh, Cambodia."/>

  <Information :information="information"/>
  </div>
</template>