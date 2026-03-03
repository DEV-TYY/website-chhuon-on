<template>
  <div class="flex justify-center w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-0 lg:max-w-8xl w-4/5">
      <template v-for="(item, index) in article" :key="index">
        <!-- First Column -->
        <div class="block">
          <div class="lg:text-2xl text-lg text-darkCyan text-justify mx-auto pr-0 mb-8 font-roman">
            <p v-html="item.description"></p>
          </div>

          <div class="lg:text-2xl text-lg text-darkCyan text-justify mx-auto pr-0 mb-8 font-roman">
            <p v-html="item.descriptionOne"></p>
          </div>

          <div class="aspect-[4/3] w-full flex-shrink-0 lg:w-full relative mb-8">
            <div v-if="item.image" class="w-full h-full text-justify">
              <img
                :src="item.image"
                class="h-full w-full z-0 object-cover"
                aria-label="image"
                loading="lazy"
                alt="image"
              />
            </div>
          </div>

          <div class="mt-7 lg:text-2xl text-lg text-darkCyan text-justify mx-auto pr-0 mb-8 font-roman italic">
            <p><span v-html="item.descriptionTwo"></span></p>
          </div>
        </div>

        <!-- Second Column -->
        <div>
          <div class="relative w-full 2xl:mb-10 mb-2 z-30 top-0">
            <div class="lg:text-2xl text-lg text-darkCyan text-justify mx-auto pr-0 mb-8 font-roman">
              <p v-html="item.descriptionThree"></p>
            </div>

            <div class="aspect-[4/3] w-full flex-shrink-0 lg:w-full relative mb-8">
              <div v-if="item.imageOne" class="w-full h-full">
                <img
                  :src="item.imageOne"
                  class="h-full w-full z-0 object-cover"
                  aria-label="image"
                  loading="lazy"
                  alt="image"
                />
              </div>
            </div>

            <div class="lg:text-2xl text-lg text-darkCyan text-justify mx-auto pr-0 mb-8 font-roman">
              <p v-html="item.descriptionThree2"></p>
            </div>

            <div class="lg:text-2xl text-lg text-darkCyan text-justify mx-auto pr-0 mb-8 font-roman">
              <p v-html="item.descriptionThree3"></p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
    interface InformationItem {
        description: string
        descriptionOne: string
        descriptionTwo: string
        descriptionThree: string
        descriptionThree2: string
        descriptionThree3: string
        image?: string
        imageOne?: string
    }

    const props = defineProps<{
        article: InformationItem[]
    }>()
</script>