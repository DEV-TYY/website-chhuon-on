<script setup lang="ts">
  import Form from '~/components/Form.vue';
</script>

<template>
     <div class="w-full h-full">
        <div class="w-full h-full flex items-end" 
           :style="{
            backgroundImage: `url('/banner/golf-rate-banner.webp')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
            }">
            <div aria-label="about-us" class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center gap-10 mb-5 w-full lg:mt-52 mt-40">
        <Form/>
            </div>
        </div>
  </div>
</template>