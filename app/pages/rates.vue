<script setup lang="ts">
    import Banner from "~/components/Banner.vue";
    import PackageOne from "~/components/PackageOne.vue";
    import { packages, allData } from "../data/pages/rates/data"
    import RateTable from "~/components/RateTable.vue";
    import GolfClub from "~/components/GolfClub.vue";


    // Computed for filtering by type example
    const weekdayTables = computed(() => allData.value.filter(item => item.type === 'weekday'))
    const weekendTables = computed(() => allData.value.filter(item => item.type === 'weekend'))

    const nightWeekDayTables = computed(() => allData.value.filter(item => item.type === 'night_weekday'))
    const nightWeekendTables = computed(() => allData.value.filter(item => item.type === 'night_weekend'))

    const juniorWeekdayTables = computed(() => allData.value.filter(item => item.type === 'junior_weekday'))
    const juniorWeekendTables = computed(() => allData.value.filter(item => item.type === 'junior_weekend'))
    
</script>

<template>
   <div>
        <!-- Main Banner -->
        <Banner image="/slide/gallery_5.webp" />

        <!-- Package -->
        <PackageOne class="lg:py-14 py-8" :package="packages" />

        <div>
            <RateTable v-for="(table, idx) in weekdayTables" :key="idx" :xdata="table" />
        </div>

        <div>
            <RateTable v-for="(table, idx) in weekendTables" :key="idx" :xdata="table" />
        </div>

        <div class="w-full flex justify-center">
            <div>
                <h1 class="font-roman lg:text-5xl text-3xl mb-3 text-darkCyan">NIGHT GOLF RATES</h1>
                <div class="w-full flex justify-center">
                    <div class="w-60 h-[1px] bg-darkCyan"></div>
                </div>
            </div>
        </div>

        <div>
            <RateTable v-for="(table, idx) in nightWeekDayTables" :key="idx" :xdata="table" />
        </div>

        <div>
            <RateTable v-for="(table, idx) in nightWeekendTables" :key="idx" :xdata="table" />
        </div>

        <div class="flex justify-center mt-10">
            <div>
                <h1 class="font-roman lg:text-5xl text-3xl mb-3 text-darkCyan">JUNIOR GOLF RATES</h1>
                <div class="w-full flex justify-center">
                    <div class="w-60 h-[1px] bg-darkCyan"></div>
                </div>
            </div>
        </div>

        <div>
            <RateTable v-for="(table, idx) in juniorWeekdayTables" :key="idx" :xdata="table" />
        </div>
    
        <div>
             <RateTable v-for="(table, idx) in juniorWeekendTables" :key="idx" :xdata="table" />
        </div>

        <div>
            <GolfClub 
            title="GOLF CLUBS"
            subtitle="RENTAL AVAILABLE"
            description="Our rental clubs include top-of-the-line brands such as Srixon and XXIO, ensuring a high-quality golfing experience. We offer both men's and women's sets, as well as left-handed and right-handed options."
            image="/banner/golf-rates.webp"/>
        </div>

        <Banner class="lg:py-14 py-8"
            title="ENJOY YOUR ULTIMATED"
            subTitle="GOLF EXPERIENCE IN PHNOM PENH"
            url="mailto:info@chhunon-golfresort.com"
            button="BOOK NOW"
            image="banner/banner.webp"
        />
   </div>
</template>

