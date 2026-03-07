<!-- components/EventsCarousel.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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
const wrapper = ref<HTMLElement | null>(null)

let firstCardWidth = 0
let isDragging = false
let startX = 0
let startScrollLeft = 0
const cardPerView = 3

onMounted(() => {
  const slider = carousel.value
  if (!slider) return

  firstCardWidth = slider.querySelector(".card")?.clientWidth || 0

  const carouselChildren = [...slider.children]

  // duplicate cards for infinite scroll
  carouselChildren.slice(0, cardPerView).forEach(card => {
    slider.insertAdjacentHTML("beforeend", card.outerHTML)
  })

  // scroll to start
  slider.classList.add("no-transition")
  slider.scrollLeft = 0
  slider.classList.remove("no-transition")

  // drag functionality
  const dragStart = (e: MouseEvent) => {
    isDragging = true
    startX = e.pageX
    startScrollLeft = slider.scrollLeft
    slider.classList.add("dragging")
  }

  const dragging = (e: MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    slider.scrollLeft = startScrollLeft - (e.pageX - startX)
  }

  const dragStop = () => {
    isDragging = false
    slider.classList.remove("dragging")
  }

  slider.addEventListener("mousedown", dragStart)
  slider.addEventListener("mousemove", dragging)
  document.addEventListener("mouseup", dragStop)
  slider.addEventListener("mouseleave", dragStop)

  // infinite scroll
  const infiniteScroll = () => {
    const maxScrollLeft = slider.scrollWidth - slider.offsetWidth
    if (slider.scrollLeft >= maxScrollLeft) {
      slider.classList.add("no-transition")
      slider.scrollLeft = 0
      slider.classList.remove("no-transition")
    }
  }

  slider.addEventListener("scroll", infiniteScroll)
})

// Next / Prev buttons
const next = () => {
  if (carousel.value) carousel.value.scrollLeft += firstCardWidth
}

const prev = () => {
  if (carousel.value) carousel.value.scrollLeft -= firstCardWidth
}
</script>

<template>
<div ref="wrapper" class="relative">
  <!-- Prev -->
  <button @click="prev" class="absolute -translate-x-8 top-80 start-0 z-30 lg:flex hidden items-start  w-10 justify-end h-full cursor-pointer group focus:outline-none">
      <span class="inline-flex items-center lg:justify-end justify-start w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-12 h-12 duration-300 text-slate-200 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
      </span>
  </button>

  <!-- Carousel -->
  <div class="overflow-hidden">
    <ul ref="carousel" class="carousel flex gap-6 cursor-grab">
      <li v-for="(item, i) in events" :key="i" class="card flex-shrink-0  bg-white rounded-lg shadow-md">
        <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
            <img class="w-full h-full object-cover":src="item.image" alt="" draggable="false">
        </div>
        <div class="p-4">
          <p v-html="item.label" class="text-gray-500 mb-2"></p>
          <h3 v-html="item.title" class="text-lg font-semibold text-darkCyan mb-1"></h3>
          <p v-html="item.dob" class="text-gray-700 mb-2"></p>
          <p v-html="item.description" class="text-gray-600 mb-2"></p>
          <a v-if="item.explore" :href="item.url" class="inline-block px-4 py-1 bg-amber text-white rounded border border-amber hover:bg-transparent hover:text-amber">
            {{ item.explore }}
          </a>
        </div>
      </li>
    </ul>
  </div>

  <!-- Next -->
  <button @click="next" class="absolute translate-x-1 top-80 right-12 z-30 lg:flex hidden items-cemter lg:w-40 w-10 justify-end h-full cursor-pointer group focus:outline-none">
     <span class="inline-flex items-center lg:justify-start justify-end w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-12 h-12 duration-300 text-slate-200  dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/> 
        </svg>
     </span>
  </button>
</div>
</template>



