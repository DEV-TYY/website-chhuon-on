<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import logo from '~/assets/images/logo/logo.webp'
import { modules, MenuItem, SubMenuItem } from '../data/pages/home/data'

// ----------------------------
// MENU SPLIT
// ----------------------------
const leftMenu = computed(() => modules.slice(0, 4))
const rightMenu = computed(() => modules.slice(4))

// ----------------------------
// SUBMENU TOGGLE
// ----------------------------
const activeSubMenu = ref<string | null>(null)
const toggleSubMenu = (name: string) => {
  activeSubMenu.value = activeSubMenu.value === name ? null : name
}

// ----------------------------
// ROUTE
// ----------------------------
const route = useRoute()
const isActive = (path?: string) => path === route.path
const isChildActive = (children: MenuItem[] = []) => {
  return children.some(child => {
    if (child.url && child.url === route.path) return true
    if (child.subMenu)
      return child.subMenu.some((sub: SubMenuItem) => sub.url === route.path)
    return false
  })
}

// ----------------------------
// SCROLL TO TOP FUNCTION
// ----------------------------
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// ----------------------------
// HANDLE MENU CLICK
// ----------------------------
const handleMenuClick = (path?: string) => {
  if (!path) return
  if (path === route.path) {
    // Same page: scroll to top
    scrollToTop()
  } else {
    // Different page: navigate normally
    window.location.href = path
  }
}

// ----------------------------
// STICKY NAVBAR
// ----------------------------
onMounted(() => {
  const header = document.querySelector('.navbar')
  const toggleClass = 'is-sticky'

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      header?.classList.add(toggleClass)
    } else {
      header?.classList.remove(toggleClass)
    }
  }

  window.addEventListener('scroll', handleScroll)

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <section id="navbar" class="w-full navbar top-0 z-30 absolute">
    <nav class="flex items-center w-full px-5 mt-8 justify-center font-semibold">

      <ul class="items-center nav max-w-9xl hide-on-ipad-pro justify-center hidden lg:flex w-full gap-5 px-6">

        <!-- LEFT MENU -->
        <div class="border-t justify-center items-center border-b h-16 2xl:gap-10 gap-8 w-full lg:flex border-darkCyan py-5">
          <NuxtLink
            v-for="item in leftMenu"
            :key="item.name"
            :to="item.url"
            class="uppercase font-roman duration-200 lg:text-[17px] text-[13px] hover:text-amber"
            :class="isActive(item.url) ? 'text-amber' : 'text-darkCyan'"
            @click.prevent="handleMenuClick(item.url)"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- LOGO -->
        <NuxtLink to="/" class="mx-auto flex items-center w-[32rem]" @click.prevent="scrollToTop()">
          <img :src="logo" class="w-full h-full lg:-translate-y-1" />
        </NuxtLink>

        <!-- RIGHT MENU -->
        <div class="border-t border-b h-16 gap-8 w-full flex justify-center items-center border-darkCyan py-5">
          <div
            v-for="item in rightMenu"
            :key="item.name"
            class="relative group"
          >
            <!-- NORMAL LINK -->
            <NuxtLink
              v-if="item.url"
              :to="item.url"
              class="uppercase font-roman duration-200 lg:text-[17px] text-[13px] hover:text-amber"
              :class="isActive(item.url) ? 'text-amber' : 'text-darkCyan'"
              @click.prevent="handleMenuClick(item.url)"
            >
              {{ item.name }}
            </NuxtLink>

            <!-- DROPDOWN -->
            <div
              v-else
              class="uppercase font-roman cursor-pointer"
              :class="isChildActive(item.children) ? 'text-amber' : 'text-darkCyan'"
            >
              {{ item.name }}

              <!-- Dropdown Menu -->
              <div class="absolute hidden text-sm font-roman group-hover:block bg-darkCyan rounded-md px-2 z-50">
                <div
                  v-for="child in item.children"
                  :key="child.name"
                  class="relative"
                >
                  <button
                    class="text-amber py-2 block w-full text-left whitespace-nowrap"
                    @click="toggleSubMenu(child.name)"
                  >
                    {{ child.name }}
                  </button>

                  <!-- SUB-SUB MENU -->
                  <div
                    v-if="activeSubMenu === child.name"
                    class="absolute left-full top-0 bg-darkCyan rounded-md px-2 ml-2 whitespace-nowrap"
                  >
                    <NuxtLink
                      v-for="sub in child.subMenu"
                      :key="sub.name"
                      :to="sub.url"
                      class="block py-2 text-amber whitespace-nowrap"
                      @click.prevent="handleMenuClick(sub.url)"
                    >
                      {{ sub.name }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </ul>
    </nav>
  </section>
</template>