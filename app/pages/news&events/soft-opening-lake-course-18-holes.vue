<script setup lang="ts">
  import { packageContent, theCourse, service } from '../../data/pages/lake-course/data';
  import Membership from "../../components/Membership.vue"
  import OurService from '~/components/OurService.vue';
  import Banner from '~/components/Banner.vue';
</script>

<template>
  <div>
    <!--- MAIN BANNER -->
    <Banner class="lg:mb-14 mb-8" image="banner/banner.webp"/>

    <!--- MEMBERSHIP -->
    <Membership class="lg:py-14 py-8" :package="packageContent"/>

    <!--- GALLERY -->
    <GolfCourseGallery :course="theCourse"/>

    <!--- SERVICES -->
    <OurService class="lg:py-14 py-8" :service="service"/>
  </div>
</template>