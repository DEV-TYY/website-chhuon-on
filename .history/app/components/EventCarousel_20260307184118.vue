<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const events = [
  {
    label: "CORPORATE EVENTS",
    title: "THE <span>5<sup>th</sup></span> RED HORNET CHAIRMAN'S CUP 2024",
    dob: "November <span>29<sup>th</sup></span> 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: "The 5th Red Hornet Chairman’s Cup was scheduled to take place...",
    image: "/activities-on-course/activities-on-course-image-six.webp"
  },
  {
    label: "CORPORATE EVENTS",
    title: "IBC Golf Day",
    dob: "November <span>22<sup>nd</sup></span>, 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: "The International Business Chamber Cambodia is hosting...",
    image: "/activities-on-course/activities-on-course-image-six.webp"
  },
  {
    label: "INTERNATIONAL EVENTS",
    title: "<span>2<sup>nd</sup></span> ASIAN SENIOR MASTERS",
    dob: "November <span>18<sup>th</sup></span> - 21<sup>st</sup>",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: "Chhun On Golf Resort has the honor of hosting...",
    image: "/activities-on-course/activities-on-course-image-six.webp"
  }
];

const carousel = ref<HTMLElement | null>(null);

const next = () => {
  if (!carousel.value) return;
  const firstCard = carousel.value.querySelector(".card") as HTMLElement;
  if (!firstCard) return;
  carousel.value.scrollLeft += firstCard.offsetWidth + 30;
};

const prev = () => {
  if (!carousel.value) return;
  const firstCard = carousel.value.querySelector(".card") as HTMLElement;
  if (!firstCard) return;
  carousel.value.scrollLeft -= firstCard.offsetWidth + 30;
};

onMounted(async () => {
  await nextTick();
  const slider = carousel.value;
  if (!slider) return;

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  // Drag start
  const dragStart = (e: MouseEvent) => {
    isDragging = true;
    slider.classList.add("dragging");
    startX = e.pageX || e.touches?.[0].pageX || 0;
    startScrollLeft = slider.scrollLeft;
  };

  // Drag move
  const dragging = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // prevent text selection
    const x = e.pageX || e.touches?.[0].pageX || 0;
    const walk = startX - x;
    slider.scrollLeft = startScrollLeft + walk;
  };

  // Drag stop
  const dragStop = () => {
    isDragging = false;
    slider.classList.remove("dragging");
  };

  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("mouseleave", dragStop);
  document.addEventListener("mouseup", dragStop);

  // Touch events for mobile
  slider.addEventListener("touchstart", dragStart);
  slider.addEventListener("touchmove", dragging);
  slider.addEventListener("touchend", dragStop);
});
</script>

<template>
<div class="wrapper relative">

  <!-- LEFT BUTTON -->
  <button @click="prev" class="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-12 h-12 bg-black/30 rounded-full hover:bg-black/50">
    <svg class="w-6 h-6 text-white" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 1L1 5L5 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>

  <!-- CAROUSEL -->
  <div class="overflow-hidden">
    <ul ref="carousel" class="carousel flex gap-8">
      <li v-for="(item, index) in events" :key="index" class="card flex-shrink-0 w-[300px] lg:w-[400px]">
        <div class="bg-white rounded-lg overflow-hidden shadow-lg">
          <img :src="item.image" class="w-full h-60 object-cover" draggable="false" />
          <div class="p-4">
            <p class="text-gray-500" v-html="item.label"></p>
            <h3 class="text-xl font-bold text-darkCyan mt-2" v-html="item.title"></h3>
            <h4 class="text-md text-darkCyan mt-1" v-html="item.dob"></h4>
            <p class="mt-2 text-gray-700 text-sm" v-html="item.description"></p>
            <a :href="item.url" class="mt-3 inline-block px-4 py-1.5 bg-amber text-white rounded-lg hover:bg-transparent hover:text-amber border border-amber uppercase">{{ item.explore }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- RIGHT BUTTON -->
  <button @click="next" class="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-12 h-12 bg-black/30 rounded-full hover:bg-black/50">
    <svg class="w-6 h-6 text-white" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9L5 5L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>

</div>
</template>

<style scoped>
.carousel {
  scroll-behavior: smooth;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}

.carousel.dragging {
  scroll-behavior: auto;
  cursor: grabbing;
}
</style>