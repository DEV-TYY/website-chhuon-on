<script setup>
import Video from '~/components/Video.vue';
import bannerVideo from '~/assets/video/video.mp4';

import {
    welcomeData,
      coursesData
 } from '~/data/pages/home/data';
import Welcome from '~/components/Welcome.vue';
import Course from '~/components/Course.vue';

</script>

<template>
  <div>

    <!-- Hero Video -->
    <Video :video="bannerVideo" />

    <Welcome :data="welcomeData" />

   <Course class="lg:py-14 py-8" :courses="coursesData" />
  </div>
</template>