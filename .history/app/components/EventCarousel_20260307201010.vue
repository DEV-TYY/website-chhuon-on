<!-- components/EventsCarousel.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

// Props for passing events from parent or page
// defineProps<{
//   events: Array<{
//     label: string
//     title: string
//     dob: string
//     explore?: string
//     url?: string
//     description: string
//     image: string
//   }>
// }>()

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
    },
        {
        label: "INTERNATIONAL EVENTS",
        title: "<span>2<sup>nd</sup></span> ASIAN SENIOR MASTERS",
        dob: "November <span>18<sup>th</sup></span> - 21<sup>st</sup>",
        explore: "EXPLORE MORE",
        url: "https://www.facebook.com/chhunongolfresort/",
        description: "Chhun On Golf Resort has the honor of hosting...",
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
    },
            {
        label: "INTERNATIONAL EVENTS",
        title: "<span>2<sup>nd</sup></span> ASIAN SENIOR MASTERS",
        dob: "November <span>18<sup>th</sup></span> - 21<sup>st</sup>",
        explore: "EXPLORE MORE",
        url: "https://www.facebook.com/chhunongolfresort/",
        description: "Chhun On Golf Resort has the honor of hosting...",
        image: "/activities-on-course/activities-on-course-image-six.webp"
    },
    // You can add more items here (removed duplicate)
    ])


const carousel = ref<HTMLElement | null>(null)

let firstCardWidth = 1

onMounted(() => {
  const slider = carousel.value
  if (!slider) return

  firstCardWidth = slider.querySelector(".card")?.clientWidth || 0

  const carouselChildren = [...slider.children]
  const cardPerView = 3

  // duplicate cards for smooth scroll
  carouselChildren.slice(0, cardPerView).forEach(card => {
    slider.insertAdjacentHTML("beforeend", card.outerHTML)
  })

  // drag support
  let isDragging = false, startX = 0, startScrollLeft = 0

  const dragStart = (e: MouseEvent) => {
    isDragging = true
    slider.classList.add("dragging")
    startX = e.pageX
    startScrollLeft = slider.scrollLeft
  }

  const dragging = (e: MouseEvent) => {
    if (!isDragging) return
    slider.scrollLeft = startScrollLeft - (e.pageX - startX)
  }

  const dragStop = () => {
    isDragging = false
    slider.classList.remove("dragging")
  }

  slider.addEventListener("mousedown", dragStart)
  slider.addEventListener("mousemove", dragging)
  document.addEventListener("mouseup", dragStop)
})

// Functions for next and prev buttons
const next = () => {
  if (carousel.value) {
    carousel.value.scrollLeft += firstCardWidth
  }
}

const prev = () => {
  if (carousel.value) {
    carousel.value.scrollLeft -= firstCardWidth
  }
}
</script>

<template>
<div class=" relative">
    <button id="left" @click="prev" type="button" class="absolute top-80 start-0 z-30 lg:flex hidden items-cemter lg:w-48 w-10 justify-end h-full cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center lg:justify-end justify-start w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-12 h-12 duration-300 text-slate-200 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
        </span>
    </button>
    <div class="mx-auto lg:max-w-8xl w-full">
        <div class="wrapper relative overflow-hidden">
            <ul class="carousel relative flex">
                    <li v-for="(item, index) in events" :key="index" class="card mb-10">
                        <div :key="index" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" :src="item.image" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]" v-html="item.label"></p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan" v-html="item.title"></h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan" v-html="item.dob"></h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2" v-html="item.description">
                                           
                                        </p>
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
   <button id="right" @click="next" type="button" class="absolute top-80 right-12 z-30 lg:flex hidden items-cemter lg:w-40 w-10 justify-start h-full cursor-pointer group focus:outline-none">
    <span class="inline-flex items-center lg:justify-start justify-end w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-12 h-12 duration-300 text-slate-200  dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/> 
        </svg>
    </span>
</button>
</div>
</template>
