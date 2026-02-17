<script setup lang="ts">
  import Video from '~/components/Video.vue';
  import bannerVideo from '~/assets/video/video.mp4';

  import { welcomeData, coursesData, theCourse, packageContent, partners } from '~/data/pages/home/data';

  import Welcome from '~/components/Welcome.vue';
  import Course from '~/components/Course.vue';
  import GolfCourseGallery from '~/components/GolfCourseGallery.vue';
  import Membership from "../components/PackageOne.vue"
  import OurPartner from '~/components/OurPartner..vue';

  import Banner from '~/components/Banner.vue';

   import bannerImg from '../assets/images/banner/banner.webp';
</script>

<template>
  <div>
    <!-- Hero Video -->
    <Video :video="bannerVideo" />

    <Welcome :data="welcomeData" />

   <Course class="lg:py-14 py-8" :courses="coursesData" />

   <GolfCourseGallery :course="theCourse"/>

   <Membership class="lg:py-14 py-8" :package="packageContent"/>

    <OurPartner class="lg:mb-14 mb-8" :partners="partners"/>

    <Banner class="lg:mb-14 mb-8"
        title="ENJOY YOUR ULTIMATED"
        subTitle="GOLF EXPERIENCE IN PHNOM PENH"
        url="mailto:info@chhunon-golfresort.com"
        button="BOOK NOW"
        :image="bannerImg"
    />
  </div>
</template>