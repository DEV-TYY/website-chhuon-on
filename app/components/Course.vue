<script setup>
    import { defineProps } from 'vue'

    // Accept courses array as a prop
    const props = defineProps({
    courses: {
        type: Array,
        default: () => []
    }
    })
</script>

<template>
  <div class="flex justify-center w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-0 lg:max-w-8xl w-4/5">

      <template v-for="(courseItem, index) in props.courses" :key="index">
        <!-- Title & Subtitle & List -->
        <div class="block mb-7">
          <div class="w-[140px] h-[3px] bg-amber mb-5"></div>
          <h1 class="text-amber uppercase 2xl:text-6xl lg:text-4xl font-roman text-3xl">
            {{ courseItem.title }}
          </h1>
          <h2 class="text-amber uppercase 2xl:text-3xl font-roman text-2xl">
            {{ courseItem.subtitle }}
          </h2>
          <ul class="lg:mt-7 mt-4 2xl:text-2xl text-lg text-darkCyan mx-auto lg:mb-8 mb-5 font-roman">
            <li v-for="(listItem, liIndex) in courseItem.list" :key="liIndex"
                class="font-roman list-disc text-justify"
                v-html="listItem.description">
            </li>
          </ul>
        </div>

        <!-- Image -->
        <div class="relative w-full">
          <div class="spread-distance-box-shadow w-full lg:h-[28rem] lg:w-full relative overflow-hidden">
            <NuxtImg v-for="(image, imgIndex) in courseItem.image" :key="imgIndex"
                 :src="image"
                 class="object-cover h-full w-full"
                 loading="lazy"
                 alt="" />
          </div>
          <div class="absolute 2xl:-top-5 2xl:-left-3 -top-4 -left-2 -translate-x-2
                      bg-darkCyan 2xl:w-40 2xl:h-16 w-36 h-14 z-[-1]">
          </div>
        </div>
      </template>

    </div>
  </div>
</template>