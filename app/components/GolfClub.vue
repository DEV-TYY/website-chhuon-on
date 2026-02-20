<script setup lang="ts">
    interface Props {
    title: string
    subtitle: string
    description: string
    image: string
    }

    withDefaults(defineProps<Props>(), {
    title: '',
    subtitle: '',
    description: '',
    image: ''
    })
</script>

<template>
  <section class="w-full flex justify-center">
    <div class="relative lg:max-w-8xl overflow-hidden w-4/5 py-5 px-4">

      <div class="max-w-4xl mx-auto text-center">
        <h2 class="font-roman lg:text-5xl text-3xl mb-3 text-darkCyan">
          {{ title }}
        </h2>

        <h3 class="text-xl md:text-xl font-roman mb-4 text-darkCyan">
          {{ subtitle }}
        </h3>

        <div class="w-24 h-[1px] bg-black mx-auto mb-8"></div>

        <p class="text-darkCyan 2xl:text-2xl text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-roman">
          {{ description }}
        </p>
      </div>

      <div class="w-full mx-auto overflow-hidden rounded-sm shadow-sm mt-6">
        <!-- Nuxt optimized image -->
        <NuxtImg
          :src="image"
          :alt="title"
          class="w-full h-auto object-cover"
          format="webp"
          loading="lazy"
        />
      </div>

    </div>
  </section>
</template>