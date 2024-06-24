<script setup>
import TranslatorInput from './components/TranslatorInput.vue'
import StyleButton from './components/StyleButton.vue'
// import { siteColour } from './state.js'
import { siteStyles } from './state.js'
import { computed } from 'vue'

const siteClass = computed(() => {
  return `${siteStyles.value.padding} ${siteStyles.value.border} ${siteStyles.value.text} ${siteStyles.value.background} ${siteStyles.value.layout}`
})
</script>

<template>
  <main :class="siteClass">
    <h1 class="text-9xl">Welcome to Simple Braille Translator</h1>
    <!-- Translator -->
    <div class="border border-red-400">
      <TranslatorInput></TranslatorInput>
    </div>
    <div>
      <StyleButton></StyleButton>
    </div>
  </main>
</template>
