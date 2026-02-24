<script setup lang="ts">
  import Banner from '~/components/Banner.vue';
  import { NightGolfData, leftData, rightData } from '~/data/pages/night-golf/data';
  import Membership from "../../components/Membership.vue"
  import NightGolfRateTable from '~/components/NightGolfRateTable.vue';
  import DualImageBooking from '~/components/DualImageBooking.vue';
</script>

<template>
  <div>
    <Banner class="lg:mb-14 mb-8"
        image="banner/night-golf.webp"
    />

    <Membership class="lg:py-14 py-8"
    :package="NightGolfData"
    textColor="text-darkCyan"
    shapeClass="-right-7"
    btnStyle="bg-amber hover:border-amber hover:bg-transparent hover:text-amber"/>

    <NightGolfRateTable :leftData="leftData" :rightData="rightData"/>

    <DualImageBooking
      class="lg:py-14 py-8"
      image1="/banner/golf-night1.webp"
      image1Alt="Night Golf Image 1"
      image2="/banner/golf-night2.webp"
      image2Alt="Night Golf Image 2"
      url="mailto:reservations@chhunon-golfresort.com"
      text="BOOK NOW"/>

  </div>
</template>