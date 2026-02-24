<script setup lang="ts">
  import Video from '~/components/Video.vue';
  import bannerVideo from '~/assets/video/video.mp4';

  import { welcomeData, coursesData, theCourse, packageContent, partners } from '~/data/pages/home/data';

  import Welcome from '~/components/Welcome.vue';
  import Course from '~/components/Course.vue';
  import GolfCourseGallery from '~/components/GolfCourseGallery.vue';
  import Membership from "../components/Membership.vue"
  import OurPartner from '~/components/OurPartner.vue';

  import Banner from '~/components/Banner.vue';
</script>

<template>
  <div>
    <!--- Main Banner Video -->
    <Video :video="bannerVideo" />

    <!--- Welcome Section -->
    <Welcome :data="welcomeData" />

    <!--- Course Section -->
   <Course class="lg:py-14 py-8" :courses="coursesData" />

   <!--- Golf Course Gallery -->
   <GolfCourseGallery :course="theCourse"/>

   <!--- Membership Section -->
   <Membership class="lg:py-14 py-8"
    :package="packageContent"
    imgHight="lg:h-[25rem]"
    btnStyle="bg-darkCyan hover:border-darkCyan hover:bg-transparent hover:text-darkCyan"/>

    <!--- Our Partner Section -->
    <OurPartner class="lg:mb-14 mb-8" :partners="partners"/>

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