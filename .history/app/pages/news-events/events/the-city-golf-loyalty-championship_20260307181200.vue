<script setup lang="ts">
  import HeroBanner from '~/components/ImageHero.vue';
  import TournamentContent from '~/components/TournamentContent.vue';
  import { championshipData, championshipContent, registrationData, schedule2 } from '~/data/pages/events/data';
  import 
  import Schedule from '~/components/Schedule.vue';

  
    // Track which image is visible for each service
    const currentSlide = ref<number[]>(registrationData.value.map(() => 0))

    function prevSlide(index: number) {
    currentSlide.value[index] =
        (currentSlide.value[index] - 1 + registrationData.value[index].image.length) %
        registrationData.value[index].image.length
    }

    function nextSlide(index: number) {
    currentSlide.value[index] =
        (currentSlide.value[index] + 1) % registrationData.value[index].image.length
    }
</script>

<template>
  <div>
    <!--- MAIN BANNER -->
    <HeroBanner :data="championshipData" />
    <div class="flex justify-center w-full mt-10">
        <div class="flex justify-center lg:max-w-8xl w-4/5 mb-10">
            <TournamentContent :content="championshipContent" />
        </div>
    </div>

    <div class="lg:mb-14 py-8">
        <ServiceCarousel
            :service="registrationData"
            :currentSlide="currentSlide"
            @prev="prevSlide"
            @next="nextSlide"
        />
    </div>


  </div>
</template>