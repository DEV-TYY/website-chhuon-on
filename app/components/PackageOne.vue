<script setup>
defineProps({
  package: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="flex justify-center w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:max-w-8xl w-4/5">

      <template v-for="(item, index) in package" :key="index">

        <!-- Desktop text -->
        <div class="lg:block hidden">
          <div class="w-[140px] h-[3px] bg-amber mb-5"></div>

          <h1 class="text-amber uppercase 2xl:text-6xl lg:text-4xl font-roman text-3xl">
            {{ item.title }}
          </h1>

          <h2 class="text-amber uppercase 2xl:text-3xl font-roman text-2xl">
            {{ item.subtitle }}
          </h2>

          <div class="lg:mt-7 mt-4 2xl:text-2xl text-lg text-justify text-darkCyan mx-auto lg:pr-12 pr-0 lg:mb-8 mb-0 font-roman">
            <p v-html="item.description"></p>
          </div>

          <NuxtLink
            v-if="item.button && item.url?.startsWith('/')"
            :to="item.url"
            class="text-slate-50 px-5 py-2 border bg-darkCyan hover:border-darkCyan hover:bg-transparent hover:text-darkCyan duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman"
          >
            {{ item.button }}
          </NuxtLink>

          <a
            v-else-if="item.button && item.url"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-50 px-5 py-2 border bg-darkCyan hover:border-darkCyan hover:bg-transparent hover:text-darkCyan duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman"
          >
            {{ item.button }}
          </a>
        </div>

        <!-- Desktop image -->
        <div class="lg:block hidden">
          <div class="relative w-full z-30">
            <div class="w-full h-full flex-shrink-0 lg:w-full relative">
              <div v-if="item.image" class="w-full lg:h-[25rem] aspect-[4/3]">
                <NuxtImg :src="item.image" class="h-full w-full z-0" loading="lazy" alt="" />
              </div>
            </div>
            <div class="absolute -top-5 -left-3 -translate-x-2 bg-darkCyan w-40 h-16 z-[-1]"></div>
          </div>
        </div>

        <!-- Mobile text -->
        <div class="lg:hidden block mb-10">
          <div class="w-[140px] h-[3px] bg-amber mb-5"></div>

          <h1 class="text-amber uppercase 2xl:text-6xl lg:text-4xl font-roman text-3xl">
            {{ item.title }}
          </h1>

          <h2 class="text-amber uppercase 2xl:text-3xl font-roman text-2xl">
            {{ item.subtitle }}
          </h2>

          <div class="lg:mt-7 mt-4 2xl:text-2xl text-lg text-darkCyan mx-auto lg:mb-8 mb-5 font-roman">
            <p v-html="item.description"></p>
          </div>

          <NuxtLink
            v-if="item.button && item.url?.startsWith('/')"
            :to="item.url"
            class="text-slate-50 px-5 py-2 border bg-darkCyan hover:border-darkCyan hover:bg-transparent hover:text-darkCyan duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman"
          >
            {{ item.button }}
          </NuxtLink>

          <a
            v-else-if="item.button && item.url"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-50 px-5 py-2 border bg-darkCyan hover:border-darkCyan hover:bg-transparent hover:text-darkCyan duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman"
          >
            {{ item.button }}
          </a>
        </div>

        <!-- Mobile image -->
        <div class="lg:hidden block">
          <div class="relative w-full z-30">
            <div class="w-full h-full flex-shrink-0 lg:w-full relative">
              <div v-if="item.image" class="w-full lg:h-[25rem] aspect-[4/3]">
                <NuxtImg :src="item.image" class="h-full w-full z-0" loading="lazy" alt="" />
              </div>
            </div>
            <div class="absolute -top-5 -left-3 -translate-x-2 bg-darkCyan w-40 h-16 z-[-1]"></div>
          </div>
        </div>

      </template>

    </div>
  </div>
</template>