<script setup lang="ts">
import { ref } from 'vue'

interface ServiceItem {
  title: string
  url: string
  image: string[]
}

// Sample service data (you can import this from a data file)
const service = ref<ServiceItem[]>([
  {
    title: "REGISTRATION",
    url: "#",
    image: [
      "/slide/registration-01.webp",
      "/slide/registration-02.webp",
    ],
  },
  {
    title: "ON COURSE ACTIVITIES",
    url: "#",
    image: [
      "/slide/on-course-activities-02.webp",
      "/slide/on-course-activities-01.webp",
      "/slide/on-course-activities-03.webp",
      "/slide/on-course-activities-04.webp",
    ],
  },
  {
    title: "AWARD CEREMONY",
    url: "#",
    image: [
      "/slide/awards-ceremony-01.webp",
      "/slide/awards-ceremony-02.webp",
      "/slide/awards-ceremony-03.webp",
      "/slide/awards-ceremony-04.webp",
    ],
  },
])

// Track which image is currently visible for each service
const currentSlide = ref<number[]>(service.value.map(() => 0))

function prevSlide(index: number) {
  currentSlide.value[index] =
    (currentSlide.value[index] - 1 + service.value[index].image.length) %
    service.value[index].image.length
}

function nextSlide(index: number) {
  currentSlide.value[index] =
    (currentSlide.value[index] + 1) % service.value[index].image.length
}
</script>

<template>
  <div class="mx-auto lg:max-w-8xl w-4/5">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
      <div v-for="(item, index) in service" :key="index" class="relative w-full h-full">
        <div class="w-full">
          <div class="relative w-full overflow-hidden">
            <!-- Carousel images -->
            <div class="w-full lg:h-[23rem] aspect-[3/2] h-full overflow-hidden relative">
              <img
                v-for="(img, imgIndex) in item.image"
                :key="imgIndex"
                :src="img"
                class="object-cover w-full h-full absolute inset-0 transition-opacity duration-700 ease-in-out"
                :class="currentSlide[index] === imgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
                alt="Event Image"
                loading="lazy"
              />
            </div>

            <!-- Slider controls -->
            <button
              type="button"
              class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              @click="prevSlide(index)"
            >
              <span class="inline-flex items-center justify-center w-10 h-10">
                <svg
                  class="w-6 h-6 opacity-60 duration-300"
                  fill="none"
                  stroke="#c28f64"
                  viewBox="0 0 6 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>

            <button
              type="button"
              class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              @click="nextSlide(index)"
            >
                <span class="inline-flex items-center justify-center w-10 h-10 ">
                    <svg
                        class="w-6 h-6 opacity-60 duration-300 dark:text-gray-800"
                        fill="none"
                        stroke="#c28f64"
                        viewBox="0 0 6 10"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
          </div>
        </div>

        <!-- Button / title -->
        <div class="flex w-full justify-center mt-3">
          <a
            :href="item.url"
            class="px-6 py-1.5 text-white border bg-amber hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman"
            v-html="item.title"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>