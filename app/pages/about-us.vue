<script setup lang="ts">
  import Form from '~/components/Form.vue';
   import FindUs from '~/components/FindUs.vue';
</script>

<template>
<div class="relative h-full w-full">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-center bg-cover h-full" 
        :style="{ backgroundImage: `url('/banner/golf-rate-banner.webp')` }">
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0" 
        style="background: linear-gradient(0deg, #ffffff 56.1%, rgba(255,255,255,0.753) 80.08%);">
    </div>

    <!-- Content -->
    <div class="relative grid grid-cols-1 lg:grid-cols-2 items-start justify-center w-full mb-5">
        <Form/>
        <FindUs/>
    </div>
</div>
</template>