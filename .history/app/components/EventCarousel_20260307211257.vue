<!-- components/EventsCarousel.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Props for passing events from parent or page
defineProps<{
  events: Array<{
    label: string
    title: string
    dob: string
    explore?: string
    url?: string
    description: string
    image: string
  }>
}>()


const carousel = ref<HTMLElement | null>(null)

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
  <button @click="prev" class="absolute -translate-x-18 top-80 start-0 z-30 lg:flex hidden items-start  w-10 justify-end h-full cursor-pointer group focus:outline-none">
      <span class="inline-flex items-center lg:justify-end justify-start w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-12 h-12 duration-300 text-slate-200 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
      </span>
  </button>

  <!-- Carousel -->
  <div class="overflow-hidden">
    <ul ref="carousel" class="carousel flex gap-6 cursor-grab">
      <li v-for="(item, i) in events" :key="i" class="card flex-shrink-0   rounded-lg shadow-md">
        <div c>

        </div>
        <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
            <img class="w-full h-full object-cover":src="item.image" alt="" draggable="false">
        </div>
        <div class="p-4">
          <p v-html="item.label" class="font-roman text-[#7D7F7D]"></p>
          <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
          <h3 v-html="item.title" class="lg:text-3xl font-roman text-2xl text-darkCyan"></h3>
          <p v-html="item.dob" class="lg:text-2xl text-xl font-roman text-darkCyan"></p>
          <p v-html="item.description" class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2"></p>
          <a v-if="item.explore" :href="item.url" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
            {{ item.explore }}
          </a>
        </div>
      </li>
    </ul>
  </div>

  <!-- Next -->
  <button @click="next" class="absolute translate-x-24 top-80 right-12 z-30 lg:flex hidden items-cemter lg:w-40 w-10 justify-end h-full cursor-pointer group focus:outline-none">
     <span class="inline-flex items-center lg:justify-start justify-end w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-12 h-12 duration-300 text-slate-200  dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/> 
        </svg>
     </span>
  </button>
</div>
</template>



