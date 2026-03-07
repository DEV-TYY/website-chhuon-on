<script setup lang="ts">
  import HeroBanner from '~/components/ImageHero.vue';
  import TournamentContent from '~/components/TournamentContent.vue';
  import { championshipData, championshipContent, registrationData, eventsCarousel } from '~/data/pages/events/data';
  import EventCarousel from '~/components/EventCarousel.vue';
  import Title from '~/components/Title.vue';
  import CreateEventBanner from '~/components/CreateEventBanner.vue';


  
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
    <div class="lg:mb-14 w-full h-fit">
        <div class="bg-[#F3F3F3] mb-8 py-8 h-fit">
            <div class="mx-auto lg:max-w-8xl w-full mb-10">
                <div class="w-full text-center lg:py-10 pt-10">
                    <Title textClass="text-amber border-none font-roman lg:text-5xl text-3xl mb-0 text-amber"
                    title="PREVIOUS EVENTS"/>
                 </div>
                <EventCarousel :events="eventsCarousel"/>
            </div>
        </div>
    </div>
    <div class="mx-auto lg:max-w-8xl w-full mb-10">
                    <div class="lg:mb-14 mb-8">
        <CreateEventBanner/>
        </div>
    </div>

  </div>
</template>