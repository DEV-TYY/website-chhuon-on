<script setup lang="ts">
import { ref } from 'vue'

/* ================= PROPS ================= */
const { slide, picture } = defineProps<{
  slide: { image: string }[]
  picture: { image: string }[]
}>()

/* ================= CAROUSEL ================= */
const currentIndex = ref(0)
const visibleSlides = 3

function nextSlide() {
  const maxIndex = Math.ceil(slide.length / visibleSlides) - 1
  if (currentIndex.value < maxIndex) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // loop to start
  }
}

function prevSlide() {
  const maxIndex = Math.ceil(slide.length / visibleSlides) - 1
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = maxIndex // loop to end
  }
}

/* ================= MODAL ================= */
const isOpen = ref(false)
const modalImage = ref('')
const modalAlt = ref('')

function openModal(src: string, alt: string) {
  modalImage.value = src
  modalAlt.value = alt
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}
</script>

<template>
    <section class="flex justify-center w-full">

        <!-- ================= MODAL ================= -->
        <div :class="['fixed top-0 left-0 z-50 w-screen h-screen bg-black/70 flex justify-center items-center',
            isOpen ? '' : 'hidden'
            ]">
            <div class="px-10">
            <div class="flex justify-end">
                <button @click="closeModal" class="text-white text-5xl cursor-pointer">
                    <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                    </svg>
                </button>
            </div>

            <div class="lg:w-[800px] w-full">
                <img :src="modalImage" :alt="modalAlt" class="w-full h-full" />
            </div>
            </div>
        </div>

        <!-- ================= GALLERY ================= -->
        <div class="w-[90%] max-w-9xl flex justify-center lg:gap-3 gap-2">
            <div class="grid gap-y-2 relative 2xl:w-[65rem] lg:w-[65rem]">

                <!-- ========== CAROUSEL ========== -->
                <div class="relative w-full flex items-center">
                    <!-- Prev Button -->
                    <button @click="prevSlide" class="absolute left-0 z-10 -translate-x-full flex items-center justify-center w-10 h-10">
                        <svg class="w-6 h-6 text-darkCyan" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 1 1 5l4 4" />
                        </svg>
                    </button>

                    <!-- Slides -->
                    <div class="w-full overflow-hidden">
                        <div class="flex gap-3 transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }" >
                            <div v-for="(item, index) in slide" :key="index" class="min-w-[33.3333%] relative">
                                <img :src="item.image"  alt="delivery" class="lg:h-60 h-[113px] w-full md:h-[140px] md:w-full cursor-pointer" @click="openModal(item.image, 'delivery')"/>
                            </div>
                        </div>
                    </div>

                    <!-- Next Button -->
                    <button @click="nextSlide" class="absolute right-0 z-10 translate-x-full flex items-center justify-center w-10 h-10">
                    <svg class="w-6 h-6 text-darkCyan" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1 9 4-4-4-4" />
                    </svg>
                    </button>
                </div>

                <!-- ========== SECOND ROW ========== -->
                <div class="relative w-full overflow-hidden mt-1">
                    <div class="flex gap-3">
                        <div v-for="(item, index) in picture" :key="'pic-' + index" class="min-w-[33.3333%] relative">
                            <img :src="item.image" alt="Gallery Image" class="lg:h-60 h-[113px] w-full md:h-[140px] md:w-full cursor-pointer" @click="openModal(item.image, 'Gallery Image')" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
</template>