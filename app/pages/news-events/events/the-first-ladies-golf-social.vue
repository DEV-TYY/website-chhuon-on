<script setup lang="ts">
  import HeroBanner from '~/components/ImageHero.vue';
  import { bannerData } from '~/data/pages/events/data';
  import EventContent from '~/components/EventContent.vue';
  import ServiceCarousel from '~/components/ServiceCarousel.vue';
  import CreateEventBanner from '~/components/CreateEventBanner.vue';
</script>

<template>
  <div>
    <!--- MAIN BANNER -->
    <HeroBanner :data="bannerData" />

    <div class="flex justify-center w-full mt-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-0 lg:max-w-8xl w-4/5">
            <EventContent
                textone="Earlier this season, Chhun On Golf Resort had the pleasure of hosting its very first Ladies Golf Social—a day of fun, friendships, and fantastic golf!"
                texttwo="The event brought together women of all skill levels, creating lasting bonds through shared swings and smiles. The wonderful 18-hole round was enjoyed under stunning weather, making for an unforgettable experience."
                />
            <EventContent
                textone="After the golf, the fun really kicked off with a lively BBQ buffet and free-flowing drinks. It was the perfect opportunity for everyone to unwind, mingle, and indulge in some delicious local flavors. The lucky draw added an extra touch of excitement, with some fantastic prizes for the winners."
                texttwo="This event wasn’t just a social gathering; it turned into a heartfelt celebration of friendship and empowerment, marking the start of what we hope will be a cherished new tradition for our community."
                />
        </div>
    </div>

    <div class="lg:mb-14 py-8">
        <ServiceCarousel/>
    </div>

    <div class="flex justify-center w-full mb-6">
        <div class="grid-cols-1 lg:gap-12 gap-0 lg:max-w-8xl w-4/5">
            <div class="lg:mb-14 mb-8">
                <CreateEventBanner/>
            </div>
        </div>
    </div>
  </div>
</template>