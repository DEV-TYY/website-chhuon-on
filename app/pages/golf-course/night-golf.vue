<script setup lang="ts">
  import Banner from '~/components/Banner.vue';
  import { NightGolfData, leftData, rightData } from '~/data/pages/night-golf/data';
  import Membership from "../../components/PackageOne.vue"
  import NightGolfRateTable from '~/components/NightGolfRateTable.vue';
</script>

<template>
  <div>
    <Banner class="lg:mb-14 mb-8"
        image="banner/night-golf.webp"
    />

    <Membership class="lg:py-14 py-8"
    :package="NightGolfData"
    textColor="text-darkCyan"
    btnStyle="bg-amber hover:border-amber hover:bg-transparent hover:text-amber"/>

    <NightGolfRateTable :leftData="leftData" :rightData="rightData"/>

  </div>
</template>