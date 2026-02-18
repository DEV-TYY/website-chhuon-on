<script setup lang="ts">
import Video from '~/components/Video.vue'
import Welcome from '~/components/Welcome.vue'
import Course from '~/components/Course.vue'

import bannerVideo from '~/assets/video/video.mp4'

import {
  welcomeData
  // coursesData
} from '~/data/pages/home/data'
</script>

<template>
  <div>
    <!-- Hero Video -->
    <Video :video="bannerVideo" />

    <!-- Welcome section -->
    <Welcome :data="welcomeData" />

    <!-- Courses -->
    <!-- <Course class="lg:py-14 py-8" :courses="coursesData" /> -->
  </div>
</template>