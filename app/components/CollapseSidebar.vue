<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter, useRoute } from '#app'
    import { modules, type MenuItem } from '../data/pages/home/data'

    const router = useRouter()
    const route = useRoute()

    // Sidebar state
    const showSidebar = ref(false)
    const activeSubMenu = ref<string | null>(null)
    const activeChildSubMenu = ref<string | null>(null)

    // Open / Close sidebar
    const openSidebar = () => (showSidebar.value = true)
    const closeSidebar = () => {
        showSidebar.value = false
        activeSubMenu.value = null
        activeChildSubMenu.value = null
    }

    // Active menu detection
    const isActive = (path?: string) => path === route.path
    const isChildActive = (children: MenuItem[] = []) =>
    children.some(child => child.url === route.path || child.subMenu?.some(sub => sub.url === route.path))

    // Toggle menus
    const toggleSubMenu = (name: string) => {
    if (activeSubMenu.value === name) {
        activeSubMenu.value = null
        activeChildSubMenu.value = null
    } else {
        activeSubMenu.value = name
        activeChildSubMenu.value = null
    }
    }
    const toggleChildSubMenu = (name: string) => {
    activeChildSubMenu.value = activeChildSubMenu.value === name ? null : name
    }

    // Navigation
    const handleMenuClick = async (path?: string) => {
        if (!path) return
        closeSidebar()
        if (path === route.path) window.scrollTo({ top: 0, behavior: 'smooth' })
        else await router.push(path)
    }
</script>

<template>
  <div>
    <!-- Navbar & Page -->
    <button @click="openSidebar" class="fixed items-center cursor-pointer hover:ring-2 transition-all ring-black/20  rounded-lg  z-50 right-3 translate-y-5 h-10 w-10 lg:hidden px-2 bg-black/5 text-amber">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
        </svg>
    </button>

    <!-- BACKDROP -->
    <div v-if="showSidebar" class="fixed inset-0 z-[999] lg:hidden transition-opacity duration-300" @click="closeSidebar" />

    <!-- SIDEBAR -->
    <!-- SIDEBAR -->
    <div 
      class="lg:hidden fixed top-0 right-0 h-full w-80 bg-darkCyan z-[9999] transition-transform duration-300 ease-in-out"
      :class="showSidebar ? 'translate-x-0' : 'translate-x-full'">
      <!-- WAVE BOTTOM -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg class="fill-primary" viewBox="0 0 1440 320">
          <path fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,117.3C1248,85,1344,43,1392,21.3L1440,0L1440,320L0,320Z"/>
        </svg>
      </div>

      <!-- CLOSE BUTTON -->
      <div class="flex items-center h-12 bg-primary w-full px-2">
        <button @click="closeSidebar" class="flex items-center justify-center rounded-lg cursor-pointer bg-primary w-7 h-7">
            <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
      </div>

      <!-- MENU LIST -->
      <ul class="flex flex-col h-full gap-2 px-4 scrollbar-hide ml-2">
        <!-- LOGO -->
        <li class="flex justify-center">
            <div class="w-full flex justify-center items-end">
                <div class="w-4/5 h-4/5">
                    <a href="/" aria-label="Red Ant" aria-labelledby="chhun_on">
                        <img src="/assets/images/logo/footer-logo.webp" class="object-cover h-full w-full" loading="lazy" alt="Logo">
                    </a>
                </div>
            </div>
        </li>

        <!-- MENU ITEMS -->
        <li v-for="(menu, key) in modules" :key="menu.name" class="w-full relative">

          <!-- Menu with children -->
          <div v-if="menu.children && menu.children.length" class="group relative">
            <button
              @click="toggleSubMenu(menu.name)"
              class="uppercase flex items-center gap-1 font-roman py-1.5 transition-all text-[11.5px] text-white"
              :class="{ 'md:text-sm text-primary font-bold': isChildActive(menu.children) }"
            >
              {{ menu.name }}
            </button>

            <!-- CHILD MENU -->
            <div v-if="activeSubMenu === menu.name" class="absolute z-10 w-fit bg-darkCyan py-1.5 rounded-md text-amber shadow-lg drop-shadow-lg">
              <ul>
                <li v-for="child in menu.children" :key="child.name" class="relative">
                  <button
                    class="block px-4 py-1.5 text-[11.5px] font-roman bg-darkCyan text-amber rounded-md w-full text-left"
                    @click="child.subMenu ? toggleChildSubMenu(child.name) : handleMenuClick(child.url)"
                  >
                    {{ child.name }}
                  </button>

                  <!-- Sub Child Menu (NEWS / EVENTS) -->
                  <div v-if="child.subMenu && activeChildSubMenu === child.name" class="absolute z-20 mt-1 py-1 px-2 bg-darkCyan rounded-md w-fit">
                    <button
                      v-for="sub in child.subMenu" :key="sub.name"
                      class="block text-amber text-[11.5px] py-2 pl-2 font-roman w-full text-left whitespace-nowrap"
                      @click="handleMenuClick(sub.url)">
                      <span v-html="sub.name"></span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Menu without children -->
          <button v-else
            @click="handleMenuClick(menu.url)"
            class="uppercase py-2 text-white w-full text-left text-[11.5px] font-roman"
            :class="{ 'text-primary font-bold md:text-sm': isActive(menu.url) }"
          >
            {{ menu.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>