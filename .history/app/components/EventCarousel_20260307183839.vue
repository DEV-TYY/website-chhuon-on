<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const events = [
  {
    label:"CORPORATE EVENTS",
    title:"THE <span>5<sup>th</sup></span> RED HORNET CHAIRMAN'S CUP 2024",
    dob:"November <span>29<sup>th</sup></span> 2024",
    explore:"EXPLORE MORE",
    url:"https://www.facebook.com/chhunongolfresort/",
    description:"The 5th Red Hornet Chairman’s Cup was scheduled to take place...",
    image:"/activities-on-course/activities-on-course-image-six.webp"
  },
  {
    label:"CORPORATE EVENTS",
    title:"IBC Golf Day",
    dob:"November <span>22<sup>nd</sup></span>, 2024",
    explore:"EXPLORE MORE",
    url:"https://www.facebook.com/chhunongolfresort/",
    description:"The International Business Chamber Cambodia is hosting...",
    image:"/activities-on-course/activities-on-course-image-six.webp"
  },
  {
    label:"INTERNATIONAL EVENTS",
    title:"<span>2<sup>nd</sup></span> ASIAN SENIOR MASTERS",
    dob:"November <span>18<sup>th</sup></span> - 21<sup>st</sup>",
    explore:"EXPLORE MORE",
    url:"https://www.facebook.com/chhunongolfresort/",
    description:"Chhun On Golf Resort has the honor of hosting...",
    image:"/activities-on-course/activities-on-course-image-six.webp"
  }
];

const carousel = ref<HTMLElement | null>(null);
const cardPerView = ref(3); // number of visible cards

// Scroll helpers
const next = () => {
  if (!carousel.value) return;
  const firstCard = carousel.value.querySelector(".card") as HTMLElement;
  if (!firstCard) return;
  carousel.value.scrollLeft += firstCard.clientWidth + 30;
  handleInfiniteScroll();
};

const prev = () => {
  if (!carousel.value) return;
  const firstCard = carousel.value.querySelector(".card") as HTMLElement;
  if (!firstCard) return;
  carousel.value.scrollLeft -= firstCard.clientWidth + 30;
  handleInfiniteScroll();
};

// Infinite scroll logic
const handleInfiniteScroll = () => {
  if (!carousel.value) return;
  const maxScrollLeft = carousel.value.scrollWidth - carousel.value.offsetWidth;
  if (carousel.value.scrollLeft >= maxScrollLeft) {
    carousel.value.scrollLeft = 0;
  }
};

// Drag functionality
let isDragging = false;
let startX = 0;
let startScrollLeft = 0;

const dragStart = (e: MouseEvent) => {
  if (!carousel.value) return;
  isDragging = true;
  carousel.value.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.value.scrollLeft;
};

const dragging = (e: MouseEvent) => {
  if (!isDragging || !carousel.value) return;
  carousel.value.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  if (!carousel.value) return;
  isDragging = false;
  carousel.value.classList.remove("dragging");
};

onMounted(async () => {
  await nextTick();

  if (!carousel.value) return;

  // Duplicate first cards for "infinite" scroll effect
  const children = [...carousel.value.children];
  children.slice(0, cardPerView.value).forEach(card => {
    carousel.value?.appendChild(card.cloneNode(true));
  });

  carousel.value.addEventListener("mousedown", dragStart);
  carousel.value.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);

  // Optional: handle touch drag
  carousel.value.addEventListener("touchstart", (e) => dragStart(e.touches[0] as unknown as MouseEvent));
  carousel.value.addEventListener("touchmove", (e) => dragging(e.touches[0] as unknown as MouseEvent));
  carousel.value.addEventListener("touchend", dragStop);
});
</script>

<template>
<div class="wrapper relative">
  <!-- LEFT BUTTON -->
  <button @click="prev" type="button"
      class="absolute top-1/2 -translate-y-1/2 left-2 z-30 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50">
    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" stroke-width="2" d="M5 1 1 5l4 4"/>
    </svg>
  </button>

  <!-- CAROUSEL -->
  <div class="overflow-hidden">
    <ul ref="carousel" class="carousel flex gap-6 scroll-smooth">
      <li v-for="(item, index) in events" :key="index" class="card min-w-[300px] bg-white rounded-lg shadow">
        <img :src="item.image" class="w-full h-48 object-cover rounded-t-lg" draggable="false" />
        <div class="p-4">
          <p class="text-gray-500" v-html="item.label"></p>
          <h3 class="text-xl font-bold text-darkCyan" v-html="item.title"></h3>
          <p class="text-gray-700 mt-2" v-html="item.description"></p>
          <a v-if="item.explore" :href="item.url" class="mt-3 inline-block px-4 py-1 bg-amber text-white rounded hover:bg-transparent border border-amber hover:text-amber">{{ item.explore }}</a>
        </div>
      </li>
    </ul>
  </div>

  <!-- RIGHT BUTTON -->
  <button @click="next" type="button"
      class="absolute top-1/2 -translate-y-1/2 right-2 z-30 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50">
    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" stroke-width="2" d="m1 9 4-4-4-4"/>
    </svg>
  </button>
</div>
</template>

<style scoped>
.carousel {
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
  cursor: grabbing;
}
.card {
  scroll-snap-align: start;
  flex-shrink: 0;
}
</style>