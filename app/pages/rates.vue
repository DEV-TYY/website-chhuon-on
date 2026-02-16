<script setup>
    import bannerImg from "../assets/images/slide/gallery_5.webp"
    import Banner from "~/components/Banner.vue";
    import PackageOne from "~/components/PackageOne.vue";
    import { packages, allData } from "../data/pages/rates/data"
    import RateTable from "~/components/RateTable.vue";


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
        <Banner :image="bannerImg" />

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
   </div>
</template>

