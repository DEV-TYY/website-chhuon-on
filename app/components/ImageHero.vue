<script setup>
defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="w-full flex-shrink-0 relative">
    
    <!-- Image Section -->
    <div
      v-for="(item, index) in data"
      :key="index"
      class="aspect-[1440/661] w-full flex flex-shrink-0 lg:w-full relative overflow-hidden"
    >
      
      <!-- Image -->
      <img
        class="w-[150rem] object-cover h-full"
        :src="item.image"
        loading="lazy"
        alt=""
      />

      <!-- Title & Description -->
      <div class="flex justify-center w-full absolute h-full">
        <div
          class="w-4/5 lg:ml-20 inset-0 flex flex-col lg:left-12 left-0 lg:items-start lg:justify-end items-center justify-center py-10 text-center text-white lg:translate-x-8 translate-x-0"
        >

          <!-- Title -->
          <h1
            v-if="item.title"
            class="text-2xl lg:text-5xl font-roman"
            v-html="item.title"
          />

          <!-- Subtitle -->
          <h2
            v-if="item.subTitle"
            class="text-lg lg:text-2xl font-roman mb-2 py-1.5"
            v-html="item.subTitle.replace('&amp;', '&')"
          />

          <!-- Button -->
          <NuxtLink
            v-if="item.button"
            :to="item.url || '#'"
            class="text-slate-50 px-7 py-2 p-1 border bg-transparent hover:bg-amber hover:text-white duration-150 lg:text-2xl md:text-2xl text-sm font-roman"
          >
            {{ item.button }}
          </NuxtLink>

        </div>
      </div>

    </div>

  </div>
</template>