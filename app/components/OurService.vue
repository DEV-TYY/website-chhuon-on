<script setup lang="ts">
    import { ref } from 'vue'

    // Service item type
    export interface ServiceItem {
        discover: string
        title: string
        subtitle: string
        url: string
        description: string
        subdescription: string
        button?: string
        image: string
    }

    // Props
    const props = defineProps<{
        service: ServiceItem[]
    }>()

    // Read More toggle
    const expanded = ref<number | null>(null)
        const toggleReadMore = (index: number) => {
        expanded.value = expanded.value === index ? null : index
    }

    const beforeEnter = (el: Element) => {
        const element = el as HTMLElement
        element.style.height = '0'
        element.style.opacity = '0'
    }

    const enter = (el: Element) => {
        const element = el as HTMLElement
        element.style.transition = 'height 0.35s ease, opacity 0.35s ease'
        element.style.height = element.scrollHeight + 'px'
        element.style.opacity = '1'
    }

    const leave = (el: Element) => {
        const element = el as HTMLElement
        element.style.transition = 'height 0.35s ease, opacity 0.35s ease'
        element.style.height = '0'
        element.style.opacity = '0'
    }
</script>

<template>
  <div class="mx-auto lg:max-w-8xl w-4/5">
    <div class="grid grid-cols-1 w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(item, index) in props.service" :key="index" class="relative w-full h-full">
        <div class="block">
          <!-- Image -->
          <a :href="item.url" class="relative">
            <div class="w-full lg:h-[23rem] aspect-[4/3]">
              <img :src="item.image" alt="" class="w-full h-full object-cover"/>
            </div>
            <div class="w-full flex bottom-2 justify-center absolute">
              <h3 class="text-slate-200 2xl:text-4xl lg:text-2xl text-lg font-roman" v-html="item.discover"></h3>
            </div>
          </a>

          <!-- Title, subtitle, description -->
          <div class="block px-4 mt-10">
            <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>
            <h3 class="2xl:text-4xl font-roman text-3xl text-darkCyan" v-html="item.title"></h3>
            <h3 class="2xl:text-3xl text-2xl font-roman text-darkCyan">{{ item.subtitle }}</h3>
            <p class="lg:mt-5 mt-4 2xl:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2" v-html="item.description"></p>
            <!-- Full subdescription with slide toggle -->
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
            >
            <p
                v-show="expanded === index"
                class="moretext mt-3 2xl:text-2xl text-justify text-lg mx-auto pr-0 font-roman text-darkCyan mb-2 overflow-hidden"
                v-html="item.subdescription"
            ></p>
            </transition>

            <button
            v-if="item.subdescription"
            @click="toggleReadMore(index)"
            class="moreless-button text-amber font-roman mt-2"
            >
            {{ expanded === index ? 'Read Less' : 'Read More' }}
            </button>

            <a 
              v-if="item.button" 
              href="#"
              class="text-slate-50 px-10 py-2 p-1 bg-amber rounded-full 2xl:text-2xl lg:text-lg text-sm font-roman mt-3 inline-block"
            >
              {{ item.button }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    /* Slide toggle animation */
    .slide-enter-active,
    .slide-leave-active {
        transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
    }
        .slide-enter-from,
        .slide-leave-to {
        max-height: 0;
        opacity: 0;
        padding-top: 0;
        padding-bottom: 0;
    }
    .slide-enter-to,
    .slide-leave-from {
        max-height: 1000px; /* Adjust if content can be taller */
        opacity: 1;
        padding-top: 0.75rem; /* match your mt-3 */
        padding-bottom: 0.75rem;
    }
</style>