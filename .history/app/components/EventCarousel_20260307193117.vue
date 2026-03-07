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
    <button id="left" type="button" class="absolute top-80 start-0 z-30 lg:flex hidden items-cemter lg:w-48 w-10 justify-end h-full cursor-pointer group focus:outline-none">
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
                        <div {{ $key }} class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" :src="item.image" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">{!! $item['label'] !!}</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan">{!! $item['title'] !!}</h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">{!! $item['dob'] !!}</h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            {!! $item['description'] !!}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @if(!empty($item['explore']))
                            <a href="{{ $item['url'] }}" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                {{ $item['explore'] }}
                            </a>
                        @endif
                    </li>
                @endforeach
            </ul>
        </div>
   </div>
   <button id="right" type="button" class="absolute top-80 right-12 z-30 lg:flex hidden items-cemter lg:w-40 w-10 justify-start h-full cursor-pointer group focus:outline-none">
    <span class="inline-flex items-center lg:justify-start justify-end w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-12 h-12 duration-300 text-slate-200  dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/> 
        </svg>
    </span>
</button>
</div>
</template>

<style scoped>
    .wrapper .carousel{
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
    .carousel.no-transition {
       scroll-behavior: auto;
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