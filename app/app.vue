<script setup>
    import Navbar from '~/components/Navbar.vue'
    useHead({
      titleTemplate: '%s - Chhun On',
      title: 'Chhun On',
    })
</script>


<template>
  <div>
    <Navbar />
    <NuxtPage />
  </div>
</template>
