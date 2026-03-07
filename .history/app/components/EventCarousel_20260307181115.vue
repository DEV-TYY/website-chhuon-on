<script setup lang="ts">
import { events } from '~/data/events'
</script>

<template>
<div class="wrapper relative">

<button id="left" class="absolute top-80 left-0 z-30 lg:flex hidden">
◀
</button>

<div class="mx-auto lg:max-w-8xl w-full">

<div class="wrapper relative overflow-hidden">

<ul class="carousel relative flex">

<li
v-for="(item, index) in events"
:key="index"
class="card mb-10"
>

<div class="img mb-6 lg:h-[58rem] h-[46rem] bg-white">

<!-- Image -->
<div class="w-full lg:h-[23rem] aspect-[4/3] px-3 py-3">
<img
:src="item.image"
class="w-full h-full object-cover"
draggable="false"
/>
</div>

<!-- Content -->
<div class="block px-4 mt-3">

<p
class="font-roman text-[#7D7F7D]"
v-html="item.label"
/>

<div class="w-24 h-[3px] bg-darkCyan mt-3 mb-3"></div>

<h3
class="lg:text-3xl text-2xl text-darkCyan"
v-html="item.title"
/>

<h3
class="lg:text-2xl text-xl text-darkCyan"
v-html="item.dob"
/>

<p
class="lg:mt-5 mt-4 lg:text-2xl text-lg text-darkCyan"
v-html="item.description"
/>

</div>

</div>

<a
v-if="item.explore"
:href="item.url"
class="px-6 text-white py-1.5 bg-amber rounded-lg uppercase"
>
{{ item.explore }}
</a>

</li>

</ul>

</div>
</div>

<button id="right" class="absolute top-80 right-12 z-30 lg:flex hidden">
▶
</button>

</div>
</template>