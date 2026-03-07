<script setup lang="ts">
export const events = [
  {
    label: "CORPORATE EVENTS",
    title: "THE <span>5<sup>th</sup></span> RED HORNET CHAIRMAN'S CUP 2024",
    dob: "November <span>29<sup>th</sup></span> 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: `The <span>5<sup>th</sup></span> Red Hornet Chairman’s Cup was scheduled to take place on Friday, November 29, 2024, at the Chhun On Golf Resort in Phnom Penh.`,
    image: "/images/event/previous_events07.webp",
  },
  {
    label: "CORPORATE EVENTS",
    title: "IBC Golf Day",
    dob: "November <span>22<sup>nd</sup></span>, 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: `The International Business Chamber (IBC) Cambodia is hosting their annual golf tournament.`,
    image: "/images/event/previous_events01.webp",
  },
  {
    label: "INTERNATIONAL EVENTS",
    title: "<span>2<sup>nd</sup></span> ASIAN SENIOR MASTERS",
    dob: "November <span>18<sup>th</sup></span> - <span>21<sup>st</sup></span>, 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: `Chhun On Golf Resort has the honor of hosting the 2nd Asian Senior Masters 2024.`,
    image: "/images/event/previous_events02.webp",
  }
];
</script>
<template>
<div class="wrapper relative">

  <div class="carousel">

    <div
      v-for="(item, index) in events"
      :key="index"
      class="card mb-10"
    >
      
      <div class="img mb-6 bg-white">

        <!-- Image -->
        <div class="w-full aspect-[4/3] px-3 py-3">
          <img
            class="w-full h-full object-cover"
            :src="item.image"
          />
        </div>

        <!-- Text -->
        <div class="px-4 mt-3">

          <p
            class="text-[#7D7F7D]"
            v-html="item.label"
          />

          <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>

          <h3
            class="text-2xl text-darkCyan"
            v-html="item.title"
          />

          <h3
            class="text-xl text-darkCyan"
            v-html="item.dob"
          />

          <p
            class="mt-4 text-lg text-darkCyan"
            v-html="item.description"
          />

        </div>

      </div>

      <a
        v-if="item.explore"
        :href="item.url"
        class="px-6 text-white py-1.5 bg-amber rounded-lg"
      >
        {{ item.explore }}
      </a>

    </div>

  </div>

</div>
</template>