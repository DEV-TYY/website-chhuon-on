<script setup lang="ts">

</script>

<template>
<div class="wrapper relative">

  <div class="carousel">

    <div
      v-for="(item, index) in events"
      :key="index"
      class="card mb-10"
    >
      
      <div class="img mb-6 bg-white">

        <!-- Image -->
        <div class="w-full aspect-[4/3] px-3 py-3">
          <img
            class="w-full h-full object-cover"
            :src="item.image"
          >
        </div>

        <!-- Text -->
        <div class="px-4 mt-3">

          <p class="text-[#7D7F7D]" v-html="item.label"></p>

          <div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>

          <h3 class="text-2xl text-darkCyan" v-html="item.title"></h3>

          <h3 class="text-xl text-darkCyan" v-html="item.dob"></h3>

          <p class="mt-4 text-lg text-darkCyan" v-html="item.description"></p>

        </div>

      </div>

      <a
        v-if="item.explore"
        :href="item.url"
        class="px-6 text-white py-1.5 bg-amber rounded-lg"
      >
        {{ item.explore }}
      </a>

    </div>

  </div>

</div>
</template>