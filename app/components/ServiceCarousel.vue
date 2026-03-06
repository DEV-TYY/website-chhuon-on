<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface ServiceItem {
  title: string
  url: string
  image: string[]
}

const props = defineProps<{
  service: ServiceItem[]
  currentSlide: number[]
}>()

const emit = defineEmits<{
  (e: 'prev', index: number): void
  (e: 'next', index: number): void
}>()
</script>

<template>
  <div class="mx-auto lg:max-w-8xl w-4/5">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
      <div v-for="(item, index) in service" :key="index" class="relative w-full h-full">
        <!-- Carousel wrapper -->
        <div class="w-full relative overflow-hidden lg:h-[23rem] aspect-[3/2] h-full">
          <!-- Sliding container -->
          <div
            class="flex transition-transform duration-700 ease-in-out h-full"
            :style="`transform: translateX(-${props.currentSlide[index] * 100}%);`"
          >
            <div
              v-for="(img, imgIndex) in item.image"
              :key="imgIndex"
              class="flex-shrink-0 w-full h-full"
            >
              <img
                :src="img"
                alt="Event Image"
                class="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="$emit('prev', index)"
          >
            <svg
              class="w-6 h-6 opacity-60 duration-300"
              fill="none"
              stroke="#c28f64"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
          </button>

          <button
            type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="$emit('next', index)"
          >
            <svg
              class="w-6 h-6 opacity-60 duration-300 dark:text-gray-800"
              fill="none"
              stroke="#c28f64"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
          </button>
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