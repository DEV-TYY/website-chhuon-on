
<script setup>
    defineProps({
        title: String,
    })
</script>
<template>
    <div class="w-full flex justify-center">
        <div class="border rounded-full px-6 border-darkCyan mb-8">
            <span class="text-darkCyan 2xl:text-3xl font-roman text-2xl">{{ title }}</span>
        </div>
    </div>
</template>