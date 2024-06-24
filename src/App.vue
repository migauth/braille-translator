<script setup>
import TranslatorInput from './components/TranslatorInput.vue'
import StyleButton from './components/StyleButton.vue'
import { siteStyles } from './state.js'
import { computed } from 'vue'

const siteClass = computed(() => {
  return `${siteStyles.value.padding} ${siteStyles.value.border} ${siteStyles.value.text} ${siteStyles.value.background} ${siteStyles.value.layout}`
})
</script>

<template>
  <main :class="siteClass">
    <div class="z-10 flex p-0 mb-4">
      <StyleButton></StyleButton>
    </div>
    <h1 class="border text-5xl sm:text-5xl md:text-7xl lg:text-8xl w-3/4">
      Welcome to Simple Braille Translator
    </h1>
    <!-- Translator -->
    <div class="border border-red-400 w-3/4 h-fit">
      <TranslatorInput></TranslatorInput>
    </div>
  </main>
</template>
