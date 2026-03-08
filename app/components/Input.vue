<script setup lang="ts">
defineProps({
  modelValue: String,
  error: Boolean,
  label: String,
  name: String
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
<div>
  <label class="text-darkCyan text-2xl">{{ label }}</label>

  <input
    :name="name"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    type="text"
    class="w-full rounded-md bg-transparent py-2 px-2 font-roman placeholder:text-amber lg:text-lg text-sm text-amber focus:outline-none border border-darkCyan outline-none"
    :class="{ 'border-red-500': error }"
  />
</div>
</template>