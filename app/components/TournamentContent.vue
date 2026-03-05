
<script setup lang="ts">

    interface ContentItem {
        description: string
        subDescription?: string
        subSubDescription?: string
        image: string
        button?: string
    }

    // Declare a prop
    defineProps<{
        content: ContentItem[]
    }>()
</script>


<template>
  <div v-for="(item, index) in content" :key="index" class="grid 2xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10">
    <div class="flex flex-col">
      
      <!-- Mobile Image -->
      <div class="lg:hidden block">
        <img :src="item.image" class="w-full object-cover h-full" loading="lazy" alt="" />
      </div>

      <!-- Text Content -->
      <div class="block">
        <div class="mx-auto pr-0 mb-8">
          <p class="text-lg lg:text-2xl text-darkCyan text-justify font-roman" v-html="item.description"></p>
        </div>
        <div class="mx-auto pr-0 mb-8" v-if="item.subDescription">
          <p class="text-lg lg:text-2xl text-darkCyan text-justify font-roman" v-html="item.subDescription"></p>
        </div>
        <div class="mx-auto pr-0 mb-8" v-if="item.subSubDescription">
          <p class="text-lg lg:text-2xl text-darkCyan text-justify font-roman" v-html="item.subSubDescription"></p>
        </div>
        <div v-if="item.button">
          <button
            type="button"
            @click="toggleModal"
            class="text-slate-50 px-5 py-2 p-1 rounded-md border bg-amber hover:border-amber hover:bg-transparent hover:text-amber duration-150 uppercase lg:text-2xl md:text-2xl text-sm font-roman"
          >
            {{ item.button }}
          </button>
        </div>
      </div>
    </div>
    <!-- Desktop Image -->
    <div class="lg:block hidden">
        <img :src="item.image" class="w-full object-cover h-full" loading="lazy" alt="" />
    </div>
  </div>

</template>