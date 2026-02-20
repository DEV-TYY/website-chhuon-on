<script setup lang="ts">
  import { packageContent, theCourse, service } from '../../data/pages/lake-course/data';
  import Membership from "../../components/PackageOne.vue"
  import OurService from '~/components/OurService.vue';
  import Banner from '~/components/Banner.vue';
</script>

<template>
  <div>
    <Banner class="lg:mb-14 mb-8"
        image="banner/banner.webp"
    />

    <Membership class="lg:py-14 py-8" :package="packageContent"/>

   <GolfCourseGallery :course="theCourse"/>

   <OurService class="lg:py-14 py-8" :service="service"/>

    <Banner class="lg:mb-14 mb-8"
        title="ENJOY YOUR ULTIMATED"
        subTitle="GOLF EXPERIENCE IN PHNOM PENH"
        url="mailto:info@chhunon-golfresort.com"
        button="BOOK NOW"
        image="banner/banner.webp"
    />

  </div>
</template>