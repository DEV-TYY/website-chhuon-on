
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


    const showModal = ref(false)

    const openModal = () => {
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }
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
            @click="openModal"
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


    <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center modal-bg px-3"
    @click.self="closeModal"
  >
    <div class="bg-darkCyan lg:w-[60%] w-full px-10 py-10">
      <div class="lg:mt-10 lg:mb-10">
        <p class="text-lg lg:text-2xl text-white text-justify font-roman">
            We would like to extend our heartfelt gratitude to each of you for your participation and support in making the City Golf
            Loyalty Championship a resounding success. Your enthusiasm and commitment were pivotal in bringing together
            08 players for this memorable event. A special thank you goes out to our sponsors for their generous contributions,
            which played a crucial role in enhancing the experience for everyone involved. Your support not only enriches the
            tournament but also strengthens our community of golfers.
        </p>

        <p class="text-lg lg:text-2xl text-white text-justify font-roman mt-5">
            We would like to extend our heartfelt gratitude to each of you for your participation and support in making the City Golf Loyalty Championship a resounding success. Your enthusiasm and commitment were pivotal in bringing together 108 players for this memorable event. A special thank you goes out to our sponsors for their generous contributions, which played a crucial role in enhancing the experience for everyone involved.
            Your support not only enriches the tournament but also strengthens our community of golfers.
        </p>
      </div>
    </div>
  </div>
  </div>

</template>