<script setup lang="ts">
    import Banner from "~/components/Banner.vue";
    import Membership from "../components/Membership.vue"
    import { membershipData, individualData, familyData, corporateData } from "~/data/pages/membership/data";
</script>

<template>
   <div>
        <!-- Main Banner -->
        <Banner image="/banner/home-slider.webp" />

        <!-- Membership Section -->
        <Membership class="lg:py-14 py-8"
            shapeClass="hidden"
            :package="membershipData"
            imgHight="lg:h-[25rem]"
            btnStyle="bg-darkCyan hover:border-darkCyan hover:bg-transparent hover:text-darkCyan"
            reverse="lg:order-1"
            />

        <!-- INDIVIDUAL Section -->
        <Membership class="lg:py-14 py-8"
            :package="individualData"
            imgHight="lg:h-[25rem]"
            btnStyle="bg-darkCyan hover:border-darkCyan hover:bg-transparent hover:text-darkCyan"
            reverse="lg:order-2"
            />   

        <!-- FAMILY Section -->
        <Membership class="lg:py-14 py-8"
            :package="familyData"
            imgHight="lg:h-[25rem]"
            btnStyle="bg-darkCyan hover:border-darkCyan hover:bg-transparent hover:text-darkCyan"
            reverse="lg:order-1"
            />   
            
        <!-- CORPORATE Section -->
        <Membership class="lg:py-14 py-8"
            :package="corporateData"
            imgHight="lg:h-[25rem]"
            btnStyle="bg-darkCyan hover:border-darkCyan hover:bg-transparent hover:text-darkCyan"
            reverse="lg:order-2"
            />   
   </div>
</template>

