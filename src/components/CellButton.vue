<script setup>
import { computed } from 'vue';
import { siteStyles } from '@/state'

const buttonClass = computed(() => {
  return `${siteStyles.value.border} ${siteStyles.value.text} ${siteStyles.value.text} ${siteStyles.value.padding}`
})

</script>

<template>
  <button :class="buttonClass"
    class=" font-semibold rounded-md p-2 text-3xl sm:text-6xl mb-3 w-full sm:w-auto">⠀</button>

</template>