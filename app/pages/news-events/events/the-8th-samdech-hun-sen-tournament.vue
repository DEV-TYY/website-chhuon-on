<script setup lang="ts">
  import HeroBanner from '~/components/ImageHero.vue';
  import TournamentContent from '~/components/TournamentContent.vue';
  import { tournamentData, tournamentContent, schedule1, schedule2 } from '~/data/pages/events/data';
  import Schedule from '~/components/Schedule.vue';
</script>

<template>
  <div>
    <!--- MAIN BANNER -->
    <HeroBanner :data="tournamentData" />
    <div class="flex justify-center w-full mt-10">
        <div class="flex justify-center lg:max-w-8xl w-4/5 mb-10">
            <TournamentContent :content="tournamentContent" />
        </div>
    </div>

    <div class="bg-[#F3F3F3] mb-8 h-fit py-6">
       <Schedule :schedule="schedule1" />
    </div>

     <div class="flex justify-center w-full mb-14">
        <Schedule :schedule="schedule2" />
    </div>
  </div>
</template>