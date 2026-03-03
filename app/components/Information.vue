
<script setup lang="ts">

    defineProps<{
         information: informationItem[]
    }>()

</script>
<template>
  <div class="flex justify-center w-full mb-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-0 lg:max-w-8xl w-4/5">
      
      <div v-for="(item, index) in information" :key="index" class="contents">

        <!-- LEFT COLUMN -->
        <div>
          <div class="lg:text-2xl text-lg text-darkCyan text-justify mb-8 font-roman"
               v-html="item.description" />
               
          <div class="lg:text-2xl text-lg text-darkCyan text-justify mb-8 font-roman"
               v-html="item.descriptionOne" />

          <div class="aspect-[4/2] w-full relative">
            <img v-if="item.image"
                 :src="item.image"
                 class="h-full w-full object-cover"
                 loading="lazy"
                 alt="image" />
          </div>

          <div class="mt-7 lg:text-2xl text-lg text-darkCyan text-justify mb-8 font-roman"
               v-html="item.descriptionTwo" />

          <div class="mt-7 lg:text-2xl text-lg text-darkCyan text-justify mb-8 font-roman"
               v-html="item.descriptionTwos" />
        </div>

        <!-- RIGHT COLUMN -->
        <div>
          <div class="lg:text-2xl text-lg text-darkCyan text-justify mb-8 font-roman"
               v-html="item.descriptionThree" />

          <div class="lg:text-2xl text-lg text-darkCyan text-justify mb-8 font-roman"
               v-html="item.descriptionThree1" />

          <div class="lg:text-2xl text-lg text-darkCyan text-justify mb-8 font-roman"
               v-html="item.descriptionThree2" />

          <div class="lg:text-2xl text-lg text-darkCyan text-justify mb-8 font-roman"
               v-html="item.descriptionThree3" />

          <div class="aspect-[4/2] w-full relative">
            <img v-if="item.imageOne"
                 :src="item.imageOne"
                 class="h-full w-full object-cover"
                 loading="lazy"
                 alt="image" />
          </div>
        </div>

      </div>

    </div>
  </div>
</template>