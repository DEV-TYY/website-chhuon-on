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
    },
    // You can add more items here (removed duplicate)
    ])

const carousel = ref<HTMLElement | null>(null)
const isDragging = ref(false)
let startX = 0
let scrollLeftStart = 0

const cardPerView = 3 // adjust for infinite scroll duplicates

// Next / Prev
const next = () => {
  if (!carousel.value) return
  const firstCard = carousel.value.querySelector('.card') as HTMLElement
  if (!firstCard) return
  carousel.value.scrollLeft += firstCard.offsetWidth + 30
  infiniteScroll()
}

const prev = () => {
  if (!carousel.value) return
  const firstCard = carousel.value.querySelector('.card') as HTMLElement
  if (!firstCard) return
  carousel.value.scrollLeft -= firstCard.offsetWidth + 30
  infiniteScroll()
}

// Drag functions
const dragStart = (e: MouseEvent | TouchEvent) => {
  if (!carousel.value) return
  isDragging.value = true
  carousel.value.classList.add('dragging')
  const pageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX
  startX = pageX - carousel.value.getBoundingClientRect().left
  scrollLeftStart = carousel.value.scrollLeft
}

const dragging = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value || !carousel.value) return
  const pageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX
  const walk = (pageX - startX) * 1.8
  carousel.value.scrollLeft = scrollLeftStart - walk
}

const dragStop = () => {
  if (!isDragging.value) return
  isDragging.value = false
  carousel.value?.classList.remove('dragging')
}

// Infinite scroll duplicates first few cards
const duplicateCards = () => {
  if (!carousel.value) return
  const children = [...carousel.value.children]
  children.slice(0, cardPerView).forEach(card => {
    carousel.value?.appendChild(card.cloneNode(true))
  })
}

// Infinite scroll reset
const infiniteScroll = () => {
  if (!carousel.value) return
  const maxScrollLeft = carousel.value.scrollWidth - carousel.value.offsetWidth
  if (carousel.value.scrollLeft >= maxScrollLeft) {
    carousel.value.classList.add('no-transition')
    carousel.value.scrollLeft = 0
    carousel.value.classList.remove('no-transition')
  }
}

onMounted(() => {
  duplicateCards()

  if (!carousel.value) return
  carousel.value.addEventListener('mousedown', dragStart)
  carousel.value.addEventListener('mousemove', dragging)
  carousel.value.addEventListener('touchstart', dragStart)
  carousel.value.addEventListener('touchmove', dragging)
  carousel.value.addEventListener('touchend', dragStop)
  document.addEventListener('mouseup', dragStop)
})
onUnmounted(() => {
  if (!carousel.value) return
  carousel.value.removeEventListener('mousedown', dragStart)
  carousel.value.removeEventListener('mousemove', dragging)
  carousel.value.removeEventListener('touchstart', dragStart)
  carousel.value.removeEventListener('touchmove', dragging)
  carousel.value.removeEventListener('touchend', dragStop)
  document.removeEventListener('mouseup', dragStop)
})
</script>

<template>
<div class="wrapper relative">
  <!-- Left Button -->
  <button @click="prev" type="button" class="absolute top-1/2 -translate-y-1/2 left-4 z-30 lg:flex hidden items-center justify-center w-12 h-12 cursor-pointer group">
    <svg class="w-8 h-8 text-slate-200 dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
      <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
    </svg>
  </button>

  <!-- Carousel -->
  <div class="mx-auto lg:max-w-8xl w-full overflow-hidden">
    <ul ref="carousel" class="carousel flex">
      <li v-for="(item, index) in events" :key="index" class="card mb-10 flex-shrink-0">
        <div class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
          <div class="w-full mb-5">
            <div class="block">
              <!-- Image -->
              <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                <img :src="item.image" class="w-full h-full object-cover" alt="" draggable="false"/>
              </div>
              <!-- Title & Description -->
              <div class="block px-4 mt-3">
                <p class="font-roman text-[#7D7F7D]" v-html="item.label"></p>
                <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan" v-html="item.title"></h3>
                <h3 class="lg:text-2xl text-xl font-roman text-darkCyan" v-html="item.dob"></h3>
                <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2" v-html="item.description"></p>
              </div>
            </div>
          </div>
          <a v-if="item.explore" :href="item.url" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
            {{ item.explore }}
          </a>
        </div>
      </li>
    </ul>
  </div>

  <!-- Right Button -->
  <button @click="next" type="button" class="absolute top-1/2 -translate-y-1/2 right-4 z-30 lg:flex hidden items-center justify-center w-12 h-12 cursor-pointer group">
    <svg class="w-8 h-8 text-slate-200 dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
      <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
    </svg>
  </button>
</div>
</template>

<style scoped>
.carousel {
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
  cursor: grabbing;
}

.card {
  cursor: grab;
  user-select: none;
}

@media screen and (max-width: 900px) {
  .carousel {
    grid-auto-columns: calc(100% - 12px);
  }
}
@media screen and (max-width: 600px) {
  .carousel {
    grid-auto-columns: calc(100% - 3px);
    gap: 30px;
    padding: 45px 27px 45px 45px;
  }
}
</style>