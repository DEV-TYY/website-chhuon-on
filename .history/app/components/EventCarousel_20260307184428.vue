<!-- components/EventsCarousel.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

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

let isDragging = false
let startX = 0
let scrollLeftStart = 0

const next = () => {
  if (!carousel.value) return
  const firstCard = carousel.value.querySelector('.card') as HTMLElement
  if (!firstCard) return
  carousel.value.scrollLeft += firstCard.offsetWidth + 30
}

const prev = () => {
  if (!carousel.value) return
  const firstCard = carousel.value.querySelector('.card') as HTMLElement
  if (!firstCard) return
  carousel.value.scrollLeft -= firstCard.offsetWidth + 30
}

// ── Drag logic ───────────────────────────────────────────────
const dragStart = (e: MouseEvent) => {
  if (!carousel.value) return
  isDragging = true
  carousel.value.classList.add('dragging')
  startX = e.pageX - carousel.value.offsetLeft
  scrollLeftStart = carousel.value.scrollLeft
  e.preventDefault() // prevent text selection etc.
}

const dragging = (e: MouseEvent) => {
  if (!isDragging || !carousel.value) return
  e.preventDefault()
  const x = e.pageX - carousel.value.offsetLeft
  const walk = (x - startX) * 1.8 // multiply → faster/slower drag feel
  carousel.value.scrollLeft = scrollLeftStart - walk
}

const dragStop = () => {
  if (!isDragging) return
  isDragging = false
  carousel.value?.classList.remove('dragging')
}

// Touch support (mobile)
const touchStart = (e: TouchEvent) => {
  if (!carousel.value) return
  isDragging = true
  carousel.value.classList.add('dragging')
  startX = e.touches[0].pageX - carousel.value.offsetLeft
  scrollLeftStart = carousel.value.scrollLeft
}

const touchMove = (e: TouchEvent) => {
  if (!isDragging || !carousel.value) return
  const x = e.touches[0].pageX - carousel.value.offsetLeft
  const walk = (x - startX) * 1.8
  carousel.value.scrollLeft = scrollLeftStart - walk
}

onMounted(async () => {
  await nextTick()

  const slider = carousel.value
  if (!slider) return

  // Mouse events
  slider.addEventListener('mousedown', dragStart)
  slider.addEventListener('mousemove', dragging)
  window.addEventListener('mouseup', dragStop)
  window.addEventListener('mouseleave', dragStop) // important!

  // Touch events
  slider.addEventListener('touchstart', touchStart)
  slider.addEventListener('touchmove', touchMove)
  slider.addEventListener('touchend', dragStop)
})

onUnmounted(() => {
  const slider = carousel.value
  if (!slider) return

  slider.removeEventListener('mousedown', dragStart)
  slider.removeEventListener('mousemove', dragging)
  window.removeEventListener('mouseup', dragStop)
  window.removeEventListener('mouseleave', dragStop)

  slider.removeEventListener('touchstart', touchStart)
  slider.removeEventListener('touchmove', touchMove)
  slider.removeEventListener('touchend', dragStop)
})
</script>

<template>
  <div class="wrapper relative">
    <!-- LEFT BUTTON -->
    <button
      id="left"
      @click="prev"
      type="button"
      class="absolute top-1/2 -translate-y-1/2 left-0 z-30 hidden lg:flex items-center justify-end w-16 h-full cursor-pointer group focus:outline-none"
    >
      <span
        class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow group-hover:bg-white transition"
      >
        <svg
          class="w-8 h-8 text-gray-700 group-hover:text-darkCyan transition"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </span>
    </button>

    <div class="mx-auto w-full max-w-7xl px-4">
      <ul
        ref="carousel"
        class="carousel flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-8 scrollbar-hide"
      >
        <li
          v-for="(item, index) in events"
          :key="index"
          class="card flex-shrink-0 snap-start w-full lg:w-1/3"
        >
          <div class="bg-white shadow-lg rounded-xl overflow-hidden">
            <div class="aspect-[4/3] overflow-hidden">
              <img
                :src="item.image"
                class="w-full h-full object-cover"
                draggable="false"
                alt=""
              />
            </div>
            <div class="p-6">
              <p class="text-sm uppercase tracking-wider text-gray-500" v-html="item.label" />
              <div class="w-20 h-1 bg-darkCyan my-4" />
              <h3 class="text-2xl lg:text-3xl font-serif text-darkCyan" v-html="item.title" />
              <p class="text-xl lg:text-2xl text-darkCyan mt-1" v-html="item.dob" />
              <p class="mt-4 text-lg text-gray-700" v-html="item.description" />
              <a
                v-if="item.explore"
                :href="item.url"
                target="_blank"
                class="mt-6 inline-block px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition uppercase text-sm tracking-wider"
              >
                {{ item.explore }}
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- RIGHT BUTTON -->
    <button
      id="right"
      @click="next"
      type="button"
      class="absolute top-1/2 -translate-y-1/2 right-0 z-30 hidden lg:flex items-center justify-start w-16 h-full cursor-pointer group focus:outline-none"
    >
      <span
        class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow group-hover:bg-white transition"
      >
        <svg
          class="w-8 h-8 text-gray-700 group-hover:text-darkCyan transition"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  </div>
</template>

<style scoped>
.carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc(100% - 2rem); /* mobile: almost full width */
  gap: 2rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 1rem 0;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel.dragging {
  scroll-behavior: auto;
  scroll-snap-type: none;
  cursor: grabbing;
}

.card {
  cursor: grab;
  user-select: none;
}

@media (min-width: 1024px) {
  .carousel {
    grid-auto-columns: calc((100% / 3) - 2rem);
  }
}
</style>