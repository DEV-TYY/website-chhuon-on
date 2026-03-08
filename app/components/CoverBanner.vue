<script setup lang="ts">
    const props = defineProps<{
        cover: string
        bgimage: string
    }>()
</script>

<template>
  <div class="py-6 md:py-12 lg:py-5 lg:max-w-8xl w-full">
    <div class="max-w-8xl mx-auto relative px-4 sm:px-0">

      <!-- Background Banner -->
      <div
        class="relative w-full 
        aspect-[4/3] sm:aspect-[16/7] lg:aspect-[16/6]
        bg-cover bg-center rounded-sm overflow-hidden
        flex items-center justify-center shadow-lg"
        :style="{ backgroundImage: `url(${bgimage})` }"
      >
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <!-- Cover Image -->
      <div
        class="absolute
        bottom-[-20px] left-1/2 -translate-x-1/2
        sm:left-auto sm:translate-x-0 sm:right-6 md:right-12 sm:bottom-6
        lg:right-16 lg:bottom-10
        z-40
        w-[140px] xs:w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px]"
      >
        <div class="shadow-2xl overflow-hidden">
          <img :src="cover"
            class="w-full h-auto object-cover"
            alt="Hole in one"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.absolute {
  transition: all 0.3s ease-in-out;
}

@media (max-width: 340px) {
  .absolute.z-40 {
    width: 120px !important;
    bottom: -15px !important;
  }
}

.bg-cover {
  background-size: cover;
  background-position: center;
}
</style>