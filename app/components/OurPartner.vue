<script setup lang="ts">
    import { defineProps } from 'vue'

    interface Partner {
    title: string
    description: string
    linkTwogolf: string
    golfGenius: string
    iagto: string
    }

    const props = defineProps<{
    partners: Partner[]
    }>()
</script>

<template>
  <div class="w-full flex lg:flex-nowrap flex-wrap gap-5 justify-center">

    <!-- Left content box -->
    <div class="w-full flex bg-darkCyan px-5 py-10 justify-end items-center">
      <div class="w-[95%] px-4 pl-3">
        <div class="w-[140px] h-[3px] bg-amber mb-5"></div>

        <h1 class="text-amber uppercase 2xl:text-6xl lg:text-4xl font-roman text-3xl mt-2">
          {{ partners[0].title }}
        </h1>

        <p
          class="text-white font-roman 2xl:text-2xl text-lg lg:pt-10 pt-5 pb-5"
          v-html="partners[0].description"
        ></p>
      </div>
    </div>

    <!-- Right logos section -->
    <div class="w-4/5 flex items-center justify-end">
      <div class="w-full bg-white">

        <template v-for="(partner, index) in partners" :key="index">

          <div class="grid grid-cols-1 lg:py-12 py-5 w-full h-fit items-center justify-center">

            <!-- Link Two Golf logo -->
            <div class="w-full flex lg:px-5 lg:mb-10 mb-5 justify-center">
              <div class="w-2/3 px-0">
                <NuxtImg
                  class="lg:px-10 px-0 w-full h-full object-cover"
                  :src="partner.linkTwogolf"
                  alt=""
                />
              </div>
            </div>

            <!-- Two bottom logos -->
            <div class="w-full flex justify-center lg:px-10 px-0">
              <div class="w-2/3 px-0 gap-5 grid lg:grid-cols-2 grid-cols-2">

                <div class="w-full h-full mb-5">
                  <NuxtImg
                    class="w-full h-full object-cover"
                    :src="partner.golfGenius"
                    alt=""
                  />
                </div>

                <div class="w-full h-full">
                  <NuxtImg
                    class="w-full h-full object-cover"
                    :src="partner.iagto"
                    alt=""
                  />
                </div>

              </div>
            </div>

          </div>

        </template>

      </div>
    </div>

  </div>
</template>