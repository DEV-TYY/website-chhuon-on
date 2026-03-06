<script setup>
defineProps({
  title: String,
  textClass: {
    type: String,
    default: 'text-darkCyan 2xl:text-3xl'
  },
})
</script>

<template>
  <div class="w-full flex justify-center">
    <div :class="textClass" class="border rounded-full px-6 border-darkCyan mb-8 text-justify lg:text-center md:text-center sm:text-center lg:px-[50px] lg:mb-10 ">
      <span :class="textClass" class="font-roman" v-html="title">

      </span>
    </div>
  </div>
</template>