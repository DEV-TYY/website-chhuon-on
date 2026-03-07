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

let firstCardWidth = 0

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


<style scope>
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
<template>
<div class="wrapper relative">
    <button id="left" type="button" class="absolute top-80 start-0 z-30 lg:flex hidden items-cemter lg:w-48 w-10 justify-end h-full cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center lg:justify-end justify-start w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-12 h-12 duration-300 text-slate-200 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path>
            </svg>
        </span>
    </button>
    <div class="mx-auto lg:max-w-8xl w-full">
        <div class="wrapper relative overflow-hidden">
            <ul class="carousel relative flex">
                                    <li class="card mb-10">
                        <div 0="" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" src="https://www.chhunon-golfresort.com/assets/images/event/previous_events07.webp" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">CORPORATE EVENTS</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan">THE <span>5<sup>th</sup></span> RED HORNET CHAIRMAN'S CUP 2024</h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">November <span>29<sup>th</sup></span> 2024</h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            The <span>5<sup>th</sup></span> Red Hornet Chairman’s Cup was scheduled to take place on Friday, November 29, 2024, at the Chhun On Golf Resort in Phnom Penh. This year’s 
                                     tournament marks a significant shift for the event, with a new venue that aligns with its mission of uniting key players from government, 
                                     diplomatic, and business sectors to support charitable causes—the Cambodia Kantha Bopha Foundation—through sport.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <a href="https://www.facebook.com/chhunongolfresort/" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                EXPLORE MORE
                            </a>
                                            </li>
                                    <li class="card mb-10">
                        <div 1="" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" src="https://www.chhunon-golfresort.com/assets/images/event/previous_events01.webp" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">CORPORATE EVENTS</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan">IBC Golf Day</h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">November <span>22<sup>nd</sup></span>, 2024  </h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            The International Business Chamber (IBC) Cambodia is hosting their annual golf tournament, the
                                     IBC Golf Day 2024, on November 22, 2024, at
                                     the Chhun On Golf Resort. This event is a perfect
                                     opportunity to enjoy a day on the Green, networking with fellow business professionals, and
                                     supporting the worthy cause—Sunrise Cambodia, a charity that helps vulnerable children with
                                     healthcare, education, and material aid
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <a href="https://www.facebook.com/chhunongolfresort/" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                EXPLORE MORE
                            </a>
                                            </li>
                                    <li class="card mb-10">
                        <div 2="" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" src="https://www.chhunon-golfresort.com/assets/images/event/previous_events02.webp" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">INTERNATIONAL EVENTS</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan"><span>2<sup>nd</sup></span> ASIAN SENIOR MASTERS</h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">November <span>18<sup>th</sup></span> - <span>21<sup>st</sup></span>, 2024</h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            We are pleased to announce that Chhun On Golf
                                    Resort has the esteemed honor of hosting the 2nd
                                    Asian Senior Masters 2024 in Cambodia from
                                    November 18th to 21st. This four-day international tournament presents a unique opportunity to
                                    witness world-class golf and to contribute to the
                                    success of this prestigious event. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <a href="https://www.facebook.com/chhunongolfresort/" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                EXPLORE MORE
                            </a>
                                            </li>
                                    <li class="card mb-10">
                        <div 3="" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" src="https://www.chhunon-golfresort.com/assets/images/event/previous_events03.webp" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">CORPORATE EVENTS</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan">RUIZHONG INSURANCE<br> ELITE GOLF GROUP</h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">November <span>08<sup>th</sup></span>, 2024 </h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            We are incredibly thankful to RUIZHONG
                                    INSURANCE ELITE GOLF GROUP, led by
                                    Jieseng Tour, for hosting such a fantastic event
                                    with us! Thank you for selecting Chhun On Golf
                                    Resort as the setting for a wonderful round of
                                    golf. We appreciate the confidence you give us
                                    and look forward to many more enjoyable events
                                    together. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <a href="https://www.facebook.com/chhunongolfresort/" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                EXPLORE MORE
                            </a>
                                            </li>
                                    <li class="card mb-10">
                        <div 4="" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" src="https://www.chhunon-golfresort.com/assets/images/event/previous_events04.webp" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">CORPORATE EVENTS</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan">THE <span>23<sup>rd</sup></span> VGC<br>CHAMPIONSHIP </h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">October <span>13<sup>st</sup></span>, 2024 </h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            We're immensely grateful to The <span>23<sup>rd</sup></span> VGC
                                    Championship for celebrating Happy Vietnamese Entrepreneurs’ Day at the stunning Chhun On
                                    Golf Resort. We are grateful for the opportunity
                                    to host such a prestigious event and honor the
                                    spirit of entrepreneurship that drives progress
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <a href="https://www.facebook.com/chhunongolfresort/" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                EXPLORE MORE
                            </a>
                                            </li>
                                    <li class="card mb-10">
                        <div 5="" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" src="https://www.chhunon-golfresort.com/assets/images/event/previous_events05.webp" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">CORPORATE EVENTS</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan">SAMBA ASIA-GROUP GOLF<br>TOURNAMENT 2024</h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">September <span>22<sup>nd</sup></span>, 2024</h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            We would like to express our profound appreciation to SAMBA ASIA-GROUP for allowing
                                    Chhun On Golf Resort to host the 2024 golf
                                    event. We had the honour of hosting 115 enthusiastic golfers on our course. Without your dedication and passion, this event would not have been
                                    possible
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <a href="https://www.facebook.com/chhunongolfresort/" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                EXPLORE MORE
                            </a>
                                            </li>
                                    <li class="card mb-10">
                        <div 6="" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" src="https://www.chhunon-golfresort.com/assets/images/event/previous_events06.webp" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">CORPORATE EVENTS</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan">ROYAL SALUTE MIAMI<br>POLO EDITION</h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">August <span>16<sup>th</sup></span>, 2024</h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            Chhun On Golf Resort would like to extend our
                                    heartfelt gratitude to Pernod Ricard for hosting
                                    an exclusive event at their cocktail launch, the
                                    Royal Salute Polo Miami, for their esteemed invited golfers. This renowned gathering was a
                                    celebration of sportsmanship and elegance,
                                    demonstrating the resort's dedication to providing excellent experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <a href="https://www.facebook.com/chhunongolfresort/" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                EXPLORE MORE
                            </a>
                                            </li>
                            <li class="card mb-10">
                        <div 0="" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" src="https://www.chhunon-golfresort.com/assets/images/event/previous_events07.webp" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">CORPORATE EVENTS</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan">THE <span>5<sup>th</sup></span> RED HORNET CHAIRMAN'S CUP 2024</h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">November <span>29<sup>th</sup></span> 2024</h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            The <span>5<sup>th</sup></span> Red Hornet Chairman’s Cup was scheduled to take place on Friday, November 29, 2024, at the Chhun On Golf Resort in Phnom Penh. This year’s 
                                     tournament marks a significant shift for the event, with a new venue that aligns with its mission of uniting key players from government, 
                                     diplomatic, and business sectors to support charitable causes—the Cambodia Kantha Bopha Foundation—through sport.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <a href="https://www.facebook.com/chhunongolfresort/" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                EXPLORE MORE
                            </a>
                                            </li><li class="card mb-10">
                        <div 1="" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" src="https://www.chhunon-golfresort.com/assets/images/event/previous_events01.webp" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">CORPORATE EVENTS</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan">IBC Golf Day</h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">November <span>22<sup>nd</sup></span>, 2024  </h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            The International Business Chamber (IBC) Cambodia is hosting their annual golf tournament, the
                                     IBC Golf Day 2024, on November 22, 2024, at
                                     the Chhun On Golf Resort. This event is a perfect
                                     opportunity to enjoy a day on the Green, networking with fellow business professionals, and
                                     supporting the worthy cause—Sunrise Cambodia, a charity that helps vulnerable children with
                                     healthcare, education, and material aid
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <a href="https://www.facebook.com/chhunongolfresort/" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                EXPLORE MORE
                            </a>
                                            </li><li class="card mb-10">
                        <div 2="" class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">
                            <div class="w-full mb-5">
                                <div class="block">
                                    <!-- Image -->
                                    <div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
                                        <img class="w-full h-full object-cover" src="https://www.chhunon-golfresort.com/assets/images/event/previous_events02.webp" alt="" draggable="false">
                                    </div>
                                    <!-- Title & Description -->
                                    <div class="block px-4 mt-3">
                                        <p class="font-roman text-[#7D7F7D]">INTERNATIONAL EVENTS</p>
                                        <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
                                        <h3 class="lg:text-3xl font-roman text-2xl text-darkCyan"><span>2<sup>nd</sup></span> ASIAN SENIOR MASTERS</h3>
                                        <h3 class="lg:text-2xl text-xl font-roman text-darkCyan">November <span>18<sup>th</sup></span> - <span>21<sup>st</sup></span>, 2024</h3>
                                        <p class="lg:mt-5 mt-4 lg:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2">
                                            We are pleased to announce that Chhun On Golf
                                    Resort has the esteemed honor of hosting the 2nd
                                    Asian Senior Masters 2024 in Cambodia from
                                    November 18th to 21st. This four-day international tournament presents a unique opportunity to
                                    witness world-class golf and to contribute to the
                                    success of this prestigious event. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    <a href="https://www.facebook.com/chhunongolfresort/" class="px-6 text-white py-1.5 border bg-amber rounded-lg hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman">
                                EXPLORE MORE
                            </a>
                                            </li></ul>
        </div>
   </div>
   <button id="right" type="button" class="absolute top-80 right-12 z-30 lg:flex hidden items-cemter lg:w-40 w-10 justify-start h-full cursor-pointer group focus:outline-none">
    <span class="inline-flex items-center lg:justify-start justify-end w-10 h-10 rounded-full group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-12 h-12 duration-300 text-slate-200  dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
        </svg>
    </span>
</button>
</div>
</template>
