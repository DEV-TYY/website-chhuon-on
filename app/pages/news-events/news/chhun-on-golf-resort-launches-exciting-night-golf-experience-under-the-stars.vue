<script setup lang="ts">
  import ArticleNightGolf from '~/components/ArticleNightGolf.vue';
  import { article } from '~/data/pages/news/data';
  import Banner from '~/components/Banner.vue';
  import Title from '~/components/Title.vue';
</script>

<template>
  <div>
    <!--- MAIN BANNER -->
    <Banner class="lg:mb-14 mb-8" image="/gallery/night-golf/night-golf-01.webp"/>

    <Title 
        textClass="lg:text-4xl text-2xl mx-auto text-amber font-roman font-bold border-none"
        title="Chhun On Golf Resort Launches<br>Exciting Night Golf Experience Under the Stars"/>
 
    <ArticleNightGolf :article="article" />

    <!--- Main Banner -->
    <Banner class="lg:mb-14 mb-8"
        title="ENJOY YOUR ULTIMATED"
        subTitle="GOLF EXPERIENCE IN PHNOM PENH"
        url="mailto:info@chhunon-golfresort.com"
        button="BOOK NOW"
        image="/gallery/night-golf/night-golf-02.webp"
    />
  </div>
</template>