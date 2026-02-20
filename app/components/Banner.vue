<script setup>
    defineProps({
        title: String,
        subTitle: String,
        url: String,
        button: String,
        image: String
    })
</script>

<template>
  <div class="w-full flex-shrink-0 relative">

    <!-- Image -->
    <div class="aspect-[1300/600] w-full flex-shrink-0 lg:w-full">
      <NuxtImg
        class="w-full object-cover h-full"
        :src="image"
        loading="lazy"
        alt=""
      />
    </div>

    <!-- Title + Subtitle + Button -->
    <div class="flex w-4/5 lg:max-w-8xl justify-center">
      <div class="absolute inset-0 flex flex-col items-center text-center justify-center">

        <h1 class="px-3 lg:text-3xl md:text-3xl text-sm text-white font-roman">
          {{ title }}
        </h1>

        <p class="px-3 lg:text-3xl md:text-3xl text-sm text-white font-roman">
          {{ subTitle }}
        </p>

        <div v-if="button" class="relative mt-2 lg:pt-10 pt-0">
          <!-- Use NuxtLink for internal routing -->
          <NuxtLink
            v-if="url && url.startsWith('/')"
            :to="url"
            class="text-slate-50 2xl:px-10 lg:p-2 md:px-3 p-1 px-2 bg-transparent font-roman uppercase border hover:bg-white duration-150 hover:text-darkCyan hover:border-none 2xl:text-2xl lg:text-lg text-sm"
          >
            {{ button }}
          </NuxtLink>

          <!-- Fallback for external links -->
          <a
            v-else
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-50 2xl:px-10 lg:p-2 md:px-3 p-1 px-2 bg-transparent font-roman uppercase border hover:bg-white duration-150 hover:text-darkCyan hover:border-none 2xl:text-2xl lg:text-lg text-sm"
          >
            {{ button }}
          </a>
        </div>

      </div>
    </div>

  </div>
</template>