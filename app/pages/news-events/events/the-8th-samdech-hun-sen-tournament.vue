<script setup lang="ts">
  import HeroBanner from '~/components/ImageHero.vue';
  import TournamentContent from '~/components/TournamentContent.vue';
  import { tournamentData,tournamentContent  } from '~/data/pages/events/data';
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
  </div>
</template>