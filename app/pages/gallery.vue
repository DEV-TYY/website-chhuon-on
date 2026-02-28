<script setup lang="ts">
  import Banner from '~/components/Banner.vue';
  import Title from '~/components/Title.vue';
  import GallerySlide from '~/components/GallerySlide.vue';
  import { slide, picture, night, nightPicture } from '~/data/pages/gallery/data'

</script>

<template>
  <div>
    <!--- MAIN BANNER -->
    <Banner class="lg:mb-14 mb-8" image="banner/banner.webp"/>

    <!--- GALLERY TITLE -->
    <Title title="Lake Course"/>

        <!--- GALLERY SLIDES -->
    <GallerySlide :slide="slide" :picture="picture" />

    <div class="lg:py-14 py-8 lg:px-0 px-3">
        <!--- GALLERY TITLE -->
        <Title class="w-full flex justify-cente" title="Night Golf"/>
        <!--- GALLERY SLIDES -->
        <GallerySlide :slide="night" :picture="nightPicture" />
    </div>
  </div>
</template>