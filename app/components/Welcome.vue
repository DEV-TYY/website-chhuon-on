<template>
  <div class="w-full h-auto bg-darkCyan">
    <div
      v-for="(content, index) in data"
      :key="index"
      class="w-full py-10 h-full mx-auto flex items-center relative md:top-3 sm:top-2 top-0 lg:top-3 flex-col px-10 lg:px-40 sm:px-16 md:px-28 xl:px-60"
    >
      <!-- Title & Subtitle -->
      <div class="w-full flex flex-col text-center">
        <h1 class="2xl:text-6xl lg:text-4xl text-3xl font-roman text-slate-50 mb-2">
          {{ content.title }}
        </h1>
        <h2 class="2xl:text-6xl lg:text-4xl text-3xl font-roman text-slate-50">
          {{ content.subtitle }}
        </h2>
      </div>

      <!-- Description -->
      <div class="w-full">
        <p class="xl:py-10 lg:py-7 md:py-7 py-5 text-slate-50 font-roman 2xl:text-2xl lg:text-lg text-sm mx-auto mb-8 leading-8 text-center">
          {{ content.description }}
        </p>
      </div>

      <!-- Button -->
      <div class="w-full text-center mb-7">
        <a
          :href="content.link || 'mailto:info@chhunon-golfresort.com'"
          class="text-slate-50 2xl:px-10 p-2 px-3 bg-transparent font-roman uppercase border hover:bg-white duration-150 hover:text-darkCyan hover:border-none lg:text-2xl md:text-2xl text-sm"
        >
          {{ content.button }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
    defineProps({
        data: {
            type: Array,
            required: true
        }
    });
</script>