<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const props = defineProps({
    course: {
        type: Object,
        default: () => ({ image: [] })
    },
    interval: {
        type: Number,
        default: 3000
    }
    })

    const activeIndex = ref(0)
    let autoplayTimer = null

    // Go to next/prev slide
    function nextSlide() {
    activeIndex.value = (activeIndex.value + 1) % props.course.image.length
    }

    function prevSlide() {
    activeIndex.value =
        (activeIndex.value - 1 + props.course.image.length) % props.course.image.length
    }

    function goToSlide(index) {
    activeIndex.value = index
    }

    // Start autoplay
    function startAutoplay() {
    autoplayTimer = setInterval(nextSlide, props.interval)
    }

    // Stop autoplay
    function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer)
    }

    onMounted(() => {
    if (props.course.image.length > 1) startAutoplay()
    })

    onBeforeUnmount(() => {
    stopAutoplay()
    })
</script>

<template>
  <div class="flex justify-center lg:h-[44rem] items-center h-auto w-full py-10 bg-darkCyan">
    <div class="lg:max-w-8xl w-4/5">
      <div class="relative w-full grid grid-cols-1 gap-5 lg:grid-cols-2 items-center">

        <!-- Slider Images -->
        <div class="w-full h-full">
          <div class="spread-distance-box-shadow lg:h-[34rem] md:h-[17rem] sm:h-[17rem] h-[12rem] w-full relative overflow-hidden">
            <div
              v-for="(image, index) in props.course.image"
              :key="index"
              class="absolute inset-0 transition-transform duration-700 ease-in-out"
              :class="{
                'translate-x-0 z-20': index === activeIndex,
                '-translate-x-full z-10': index === (activeIndex - 1 + props.course.image.length) % props.course.image.length,
                'translate-x-full z-10': index === (activeIndex + 1) % props.course.image.length,
                'hidden': index !== activeIndex &&
                          index !== (activeIndex - 1 + props.course.image.length) % props.course.image.length &&
                          index !== (activeIndex + 1) % props.course.image.length
              }"
            >
              <NuxtImg
                :src="image"
                class="object-cover h-full w-full"
                :alt="`Course Image ${index + 1}`"
                aria-label="Delivery"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Slider Thumbnails -->
        <div class="slider-thumbnails flex justify-center w-full lg:h-[34rem]">
          <div class="w-full grid grid-cols-2 justify-center items-center gap-5">
            <button
              v-for="(thumbnail, key) in props.course.image"
              :key="key"
              @click="goToSlide(key)"
              type="button"
              class="cursor-pointer w-full lg:h-full md:h-[15rem] h-[6rem]"
              :aria-current="activeIndex === key ? 'true' : 'false'"
              :aria-label="`Slide ${key + 1}`"
            >
              <NuxtImg
                :src="thumbnail"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>