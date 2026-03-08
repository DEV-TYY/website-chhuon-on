<script setup lang="ts">
  import Banner from '~/components/Banner.vue';
  import CardCarousel from '~/components/CardCarousel.vue';
  import { hole5Data, hole8Data, hole13Data } from '~/data/pages/events/data';
  import CoverBanner from '~/components/CoverBanner.vue';
</script>

<template>
  <div>
    <!--- MAIN BANNER -->
    <Banner class="mb-5" image="hole-in-one-record/hole-in-one-page-update-banner.jpg"/>

    <div class="lg:pb-40 lg:mb-5 py-16 mb-10">
        <CardCarousel :cards="hole5Data" bgimage="/hole-in-one-record/hole-5-background.jpg"/>
    </div>

    <div class="lg:pb-40 lg:mb-5 py-16 mt-10">
        <CardCarousel :cards="hole8Data" bgimage="/hole-in-one-record/hole-8-background.jpg"/>
    </div>

    <div class="lg:pb-40 lg:mb-5 py-16 mt-10">
        <CardCarousel :cards="hole13Data" bgimage="/hole-in-one-record/hole-13-background.jpg"/>
    </div>


    <div class="lg:pb-10 py-16 mt-10">
        <CoverBanner
        cover="/hole-in-one-record/mr-borromeo-nestor-chito.webp"
        bgimage="/hole-in-one-record/hole-17-background.jpg"
        />
    </div>

    <!--- Main Banner -->
    <Banner class="lg:mb-14 mb-8"
        title="ENJOY YOUR ULTIMATED"
        subTitle="GOLF EXPERIENCE IN PHNOM PENH"
        url="mailto:info@chhunon-golfresort.com"
        button="BOOK NOW"
        image="banner/banner.webp"
    />

  </div>
</template>