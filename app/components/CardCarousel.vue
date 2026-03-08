<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue"

// Define the type for props
interface Hole5 {
  image: string
}

// Props with proper typing
const props = defineProps<{
  cards: Hole5[]
  bgimage: string
}>()

const carousel = ref<HTMLUListElement | null>(null)
const leftBtn = ref<HTMLButtonElement | null>(null)
const rightBtn = ref<HTMLButtonElement | null>(null)

onMounted(async () => {
  await nextTick()

  const carouselEl = carousel.value
  if (!carouselEl) return

  const firstCard = carouselEl.querySelector(".card")
  if (!firstCard) return

  const firstCardWidth = firstCard.clientWidth
  let isDragging = false
  let startX = 0
  let startScrollLeft = 0
  const cardPerView = 3

  const carouselChildren = [...carouselEl.children]

  // infinite scroll clone
  carouselChildren.slice(-cardPerView).forEach(card => {
    carouselEl.insertAdjacentHTML("afterbegin", (card as HTMLElement).outerHTML)
  })
  carouselChildren.slice(0, cardPerView).forEach(card => {
    carouselEl.insertAdjacentHTML("beforeend", (card as HTMLElement).outerHTML)
  })

  carouselEl.classList.add("no-transition")
  carouselEl.scrollLeft = carouselEl.offsetWidth
  carouselEl.classList.remove("no-transition")

  leftBtn.value?.addEventListener("click", () => {
    carouselEl.scrollLeft -= firstCardWidth
  })
  rightBtn.value?.addEventListener("click", () => {
    carouselEl.scrollLeft += firstCardWidth
  })

  carouselEl.addEventListener("mousedown", e => {
    isDragging = true
    carouselEl.classList.add("dragging")
    startX = e.pageX
    startScrollLeft = carouselEl.scrollLeft
  })
  window.addEventListener("mousemove", e => {
    if (!isDragging) return
    carouselEl.scrollLeft = startScrollLeft - (e.pageX - startX)
  })
  window.addEventListener("mouseup", () => {
    isDragging = false
    carouselEl.classList.remove("dragging")
  })

  carouselEl.addEventListener("scroll", () => {
    if (carouselEl.scrollLeft === 0) {
      carouselEl.classList.add("no-transition")
      carouselEl.scrollLeft = carouselEl.scrollWidth - 2 * carouselEl.offsetWidth
      carouselEl.classList.remove("no-transition")
    } else if (Math.ceil(carouselEl.scrollLeft) >= carouselEl.scrollWidth - carouselEl.offsetWidth) {
      carouselEl.classList.add("no-transition")
      carouselEl.scrollLeft = carouselEl.offsetWidth
      carouselEl.classList.remove("no-transition")
    }
  })
})
</script>

<template>
  <section class="lg:py-5 lg:max-w-8xl w-fulllg:py-5 lg:max-w-8xl w-full">
    <div class="max-w-8xl mx-auto overflow-visible">
      <div class="relative h-fit w-full aspect-[16/8] lg:aspect-[17/7] bg-cover bg-center flex items-center justify-center rounded-sm shadow-sm"
        :style="{ backgroundImage: `url(${props.bgimage})` }">
        <div class="absolute lg:translate-y-2/3 lg:-bottom-8 translate-y-1/2 -bottom-10 transform z-40 w-full">
          <div class="w-full flex justify-center items-center gap-0">
            <!-- LEFT -->
            <button ref="leftBtn" class="btn-left z-30 flex h-full">
              <span class="inline-flex items-center justify-center lg:w-10 lg:h-10 h-8 w-8 rounded-full">
                <svg class="lg:w-6 lg:h-6 w-5 h-5 text-black" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
              </span>
            </button>

            <div class="lg:max-w-8xl px-4 w-full">
              <div class="card-wrapper relative">
                <ul ref="carousel" class="card-carousel grid col-end-4 gap-0 relative overflow-hidden">
                  <li v-for="(item, index) in props.cards" :key="index" class="card">
                    <img
                      :src="item.image" 
                      draggable="false"
                      class="w-full h-full"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <!-- RIGHT -->
            <button ref="rightBtn" class="btn-right z-30 h-full">
              <span class="inline-flex items-center justify-center lg:w-10 lg:h-10 h-8 w-8 rounded-full">
                <svg class="lg:w-6 lg:h-6 w-5 h-5 text-black" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
              </span>
            </button>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>