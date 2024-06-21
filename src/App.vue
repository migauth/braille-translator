<script setup>
import TranslatorInput from './components/TranslatorInput.vue'
import StyleButton from './components/StyleButton.vue'
import { border } from './state.js'
</script>

<template>
  <main :class="border">
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
