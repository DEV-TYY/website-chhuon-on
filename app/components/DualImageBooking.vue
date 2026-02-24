
<script setup>
    defineProps({
        image1: String,
        image1Alt: String,
        image2: String,
        image2Alt: String,
        url: String,
        text: String
    })
</script>

<template>
  <div class="flex justify-center w-full">
    <div class="flex flex-col items-center lg:max-w-8xl w-4/5">
      
      <!-- Images Section -->
      <div class="w-full">
        <div class="gap-3 w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          
          <div class="flex-1">
            <NuxtImg
              v-if="image1"
              :src="image1"
              class="w-full aspect-[4/3] object-cover"
              loading="lazy"
              :alt="image1Alt || 'Golf Image 1'"
            />
          </div>

          <div class="flex-1">
            <NuxtImg
              v-if="image2"
              :src="image2"
              class="w-full aspect-[4/3] object-cover"
              loading="lazy"
              :alt="image2Alt || 'Golf Image 2'"
            />
          </div>

        </div>
      </div>

      <!-- Button Section -->
      <div class="flex justify-center py-10">
        <NuxtLink
          :to="url || '/'"
          class="text-slate-50 px-5 py-2 border bg-amber hover:border-amber hover:bg-transparent hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman"
        >
          {{ text || 'BOOK NOW' }}
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

