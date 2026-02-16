<template>
  <div class="relative w-full top-0">
    <div class="w-full overflow-hidden lg:max-h-[53rem] h-full">

      <div class="lg:h-[53rem] md:h-[40rem] h-96 2xl:h-[53rem] border-b relative overflow-hidden">
        <video class="object-cover w-full h-full" autoplay muted loop>
            <source :src="video" type="video/mp4">
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  video: {
    type: String,
    required: true
  }
})
</script>