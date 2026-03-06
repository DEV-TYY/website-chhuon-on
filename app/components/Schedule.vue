<script setup lang="ts">

interface Card {
  title: string
  url: string
  image: string
}

interface ScheduleData {
  date: string
  cards: Card[]
}

defineProps<{
  schedule: ScheduleData
}>()

</script>

<template>
  <div class="mx-auto lg:max-w-8xl w-4/5">

    <!-- Date -->
    <div
      v-if="schedule.date"
      class="bg-darkCyan w-full text-center py-2 mb-10 mt-5"
    >
      <h1 class="font-roman lg:text-3xl text-2xl text-white">
        {{ schedule.date }}
      </h1>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 w-full gap-8 lg:grid-cols-3 md:grid-cols-2 mb-4">

      <div
        v-for="(card, index) in schedule.cards"
        :key="index"
        class="relative w-full h-full"
      >
        <div class="block">

          <!-- Image -->
          <div class="w-full lg:h-[23rem] aspect-[4/3]">
            <img
              :src="card.image"
              class="object-cover w-full h-full"
              alt="Event Image"
              loading="lazy"
            />
          </div>

          <!-- Title Button -->
          <div class="flex w-full justify-center mt-3">
            <a
              :href="card.url"
              class="px-6 text-white py-1.5 border bg-amber hover:bg-transparent border-amber hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman"
            >
              {{ card.title }}
            </a>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>