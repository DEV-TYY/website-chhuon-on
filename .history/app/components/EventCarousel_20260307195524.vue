<!-- components/EventsCarousel.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const events = ref([
  {
    label: "CORPORATE ",
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
])

const carousel = ref<HTMLElement | null>(null)
const isDragging = ref(false)
let startX = 0
let startScrollLeft = 0

const prev = () => {
  if (!carousel.value) return
  const width = carousel.value.querySelector(".card")?.clientWidth || 0
  carousel.value.scrollLeft -= width
}

const next = () => {
  if (!carousel.value) return
  const width = carousel.value.querySelector(".card")?.clientWidth || 0
  carousel.value.scrollLeft += width
}

const dragStart = (e: MouseEvent) => {
  if (!carousel.value) return
  isDragging.value = true
  carousel.value.classList.add("dragging")
  startX = e.pageX
  startScrollLeft = carousel.value.scrollLeft
}

const dragging = (e: MouseEvent) => {
  if (!isDragging.value || !carousel.value) return
  carousel.value.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStop = () => {
  if (!carousel.value) return
  isDragging.value = false
  carousel.value.classList.remove("dragging")
}

onMounted(() => {
  if (!carousel.value) return
  carousel.value.addEventListener("mousedown", dragStart)
  carousel.value.addEventListener("mousemove", dragging)
  document.addEventListener("mouseup", dragStop)
})

onUnmounted(() => {
  if (!carousel.value) return
  carousel.value.removeEventListener("mousedown", dragStart)
  carousel.value.removeEventListener("mousemove", dragging)
  document.removeEventListener("mouseup", dragStop)
})
</script>

<template>
<div class="wrapper relative">
  <!-- Prev button -->
  <button id="left" @click="prev" type="button" class="absolute top-80 start-0 z-30 lg:flex hidden items-center lg:w-48 w-10 justify-end h-full cursor-pointer group focus:outline-none">
    <span class="inline-flex items-center lg:justify-end justify-start w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg class="w-12 h-12 duration-300 text-slate-200 dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
      </svg>
    </span>
  </button>

  <div class="mx-auto lg:max-w-8xl w-full">
    <div class="wrapper relative overflow-hidden">
      <ul ref="carousel" class="carousel relative flex">
        <li v-for="(item, index) in events" :key="index" class="card mb-10">
          <div class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
            <div class="w-full mb-5">
              <div class="block">
                <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                  <img class="w-full h-full object-cover" :src="item.image" alt="" draggable="false">
                </div>
                <div class="block px-4 mt-3">
                  <p class="font-roman text-[#7D7F7D]" v-html="item.label"></p>
                  <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                  <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan" v-html="item.title"></h3>
                  <h3 class="lg:text-2xl text-xl font-roman text-darkCyan" v-html="item.dob"></h3>
                  <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2" v-html="item.description"></p>
                </div>
              </div>
            </div>
          </div>
          <a v-if="item.explore" :href="item.url" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
            {{ item.explore }}
          </a>
        </li>
      </ul>
    </div>
  </div>

  <!-- Next button -->
  <button id="right" @click="next" type="button" class="absolute top-80 right-12 z-30 lg:flex hidden items-center lg:w-40 w-10 justify-start h-full cursor-pointer group focus:outline-none">
    <span class="inline-flex items-center lg:justify-start justify-end w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg class="w-12 h-12 duration-300 text-slate-200 dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
      </svg>
    </span>
  </button>
</div>
</template>

<style scoped>
.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% / 3) - 25px);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 30px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}
.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}
@media screen and (max-width: 900px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 1) - 12px);
  }
}
@media screen and (max-width: 600px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 1) - 3px);
    gap: 30px;
    padding: 45px;
    padding-right: 27px;
  }
}
</style>