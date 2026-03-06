<script setup lang="ts">
defineProps<{
  textone?: string
  texttwo?: string
}>()
</script>

<template>
  <div class="block gap-y-8">
    <p v-if="textone"
       class="lg:text-2xl text-lg text-darkCyan text-justify mx-auto pr-0 mb-8 font-roman"
       v-html="textone"></p>

    <p v-if="texttwo"
       class="lg:text-2xl text-lg text-darkCyan text-justify mx-auto pr-0 mb-8 font-roman"
       v-html="texttwo"></p>
  </div>
</template>