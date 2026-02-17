<script setup>
    import Navbar from '~/components/Navbar.vue'
     import { useRoute } from 'vue-router'

  const route = useRoute()

  const pageTitle = computed(() => {
    // 👉 Default Home page
    if (route.path === '/') {
      return 'Home'
    }

    if (route.name) {
      return String(route.name)
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
    }

    return route.path
      .split('/')
      .filter(Boolean)
      .join(' ')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
  })

  useHead({
    titleTemplate: 'Chhun On - %s',
    title: pageTitle
  })
</script>


<template>
  <div>
    <Navbar />
    <NuxtPage />
  </div>
</template>
