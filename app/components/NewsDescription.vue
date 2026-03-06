<script setup lang="ts">

interface Props {
  descriptiontone?: string
  descriptionttwo?: string
  descriptiontthree?: string
  descriptiontfour?: string
  descriptiontfive?: string
  image?: string
}

defineProps<Props>()

</script>

<template>
  <div class="w-full">

    <div v-if="descriptiontone" class="text-justify">
      <p class="lg:text-2xl text-lg text-darkCyan font-roman mb-8"
         v-html="descriptiontone" />
    </div>

    <div v-if="descriptionttwo" class="text-justify">
      <p class="lg:text-2xl text-lg text-darkCyan font-roman mb-8"
         v-html="descriptionttwo" />
    </div>

    <div v-if="descriptiontthree" class="text-justify">
      <p class="lg:text-2xl text-lg text-darkCyan font-roman mb-8"
         v-html="descriptiontthree" />
    </div>

    <div v-if="descriptiontfour" class="text-justify">
      <p class="lg:text-2xl text-lg text-darkCyan font-roman mb-8"
         v-html="descriptiontfour" />
    </div>

    <div v-if="descriptiontfive" class="text-justify">
      <p class="lg:text-2xl text-lg text-darkCyan font-roman mb-8"
         v-html="descriptiontfive" />
    </div>

    <div v-if="image" class="w-full flex-shrink-0 relative mb-8 mt-10">
      <div class="w-full aspect-[4/3]">
        <img
          :src="image"
          class="h-full w-full object-cover"
          loading="lazy"
          alt="news image"
        />
      </div>
    </div>

  </div>
</template>