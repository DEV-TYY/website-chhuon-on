<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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
    // more items...
])

const carousel = ref<HTMLElement | null>(null)
let firstCardWidth = 0

let isDragging = false
let startX = 0
let startScrollLeft = 0

onMounted(() => {
  const slider = carousel.value
  if (!slider) return

  firstCardWidth = slider.querySelector(".card")?.clientWidth || 0

  // duplicate cards for smooth infinite scroll (optional)
  const carouselChildren = [...slider.children]
  const cardPerView = 3
  carouselChildren.slice(0, cardPerView).forEach(card => {
    slider.insertAdjacentHTML("beforeend", card.outerHTML)
  })

  // Drag start
  const dragStart = (e: MouseEvent) => {
    isDragging = true
    slider.classList.add("dragging")
    startX = e.pageX
    startScrollLeft = slider.scrollLeft
  }

  // Drag move
  const dragging = (e: MouseEvent) => {
    if (!isDragging) return
    slider.scrollLeft = startScrollLeft - (e.pageX - startX)
  }

  // Drag stop
  const dragStop = () => {
    isDragging = false
    slider.classList.remove("dragging")
  }

  slider.addEventListener("mousedown", dragStart)
  slider.addEventListener("mousemove", dragging)
  document.addEventListener("mouseup", dragStop)
  slider.addEventListener("mouseleave", dragStop)
})

// Scroll next and prev
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
<div class="relative">
  <!-- Prev Button -->
  <button @click="prev" class="absolute top-1/2 left-2 z-30 hidden lg:flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300">
    &lt;
  </button>

  <!-- Carousel -->
  <div class="overflow-hidden">
    <ul ref="carousel" class="carousel flex gap-6">
      <li v-for="(item, index) in events" :key="index" class="card flex-shrink-0 w-[300px] bg-white rounded-lg shadow-md">
        <img :src="item.image" alt="" class="w-full h-48 object-cover rounded-t-lg" />
        <div class="p-4">
          <p v-html="item.label" class="text-gray-500 mb-2"></p>
          <h3 v-html="item.title" class="text-lg font-semibold text-darkCyan mb-1"></h3>
          <p v-html="item.dob" class="text-gray-700 mb-2"></p>
          <p v-html="item.description" class="text-gray-600 mb-2"></p>
          <a v-if="item.explore" :href="item.url" class="inline-block px-4 py-1 bg-amber text-white rounded hover:bg-transparent hover:text-amber border border-amber">
            {{ item.explore }}
          </a>
        </div>
      </li>
    </ul>
  </div>

  <!-- Next Button -->
  <button @click="next" class="absolute top-1/2 right-2 z-30 hidden lg:flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300">
    &gt;
  </button>
</div>
</template>

<style scoped>
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  gap: 20px;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}

.card {
  scroll-snap-align: start;
  cursor: grab;
  user-select: none;
}
</style>