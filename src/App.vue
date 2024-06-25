<script setup>
import TranslatorInput from './components/TranslatorInput.vue'
import StyleButton from './components/StyleButton.vue'
import { siteStyles } from './state.js'
import { computed, ref } from 'vue'

const siteClass = computed(() => {
  return `${siteStyles.value.padding} ${siteStyles.value.border} ${siteStyles.value.text} ${siteStyles.value.background} ${siteStyles.value.layout}`
})

const showColorOptions = ref(false)
const isTyping = ref(false)

const toggleColorOptions = () => {
  showColorOptions.value = !showColorOptions.value
}

const handleQueryUpdate = (query) => {
  isTyping.value = query.length > 0
}

const buttonClass = computed(() => {
  return `${siteStyles.value.border} ${siteStyles.value.text} ${siteStyles.value.text} ${siteStyles.value.padding}`
})
</script>

<template>
  <main :class="siteClass">
    <!-- Toggle Button -->
    <div>
      <button
        @click="toggleColorOptions"
        :class="buttonClass"
        class="border border-black text-black rounded-md p-2 text-2xl mb-3"
      >
        <i class="fa-solid fa-caret-down" /> Color Options
      </button>
    </div>
    <!-- Colour buttons -->
    <div v-if="showColorOptions" class="z-10 flex p-0 mb-4 animate-flip-down">
      <StyleButton></StyleButton>
    </div>
    <!-- Title -->
    <h1
      v-if="!isTyping"
      class="text-5xl sm:text-5xl md:text-7xl lg:text-8xl w-3/4 animate-fade-down mb-3"
    >
      Welcome to Simple Braille Translator
    </h1>
    <!-- Translator -->
    <div class="w-3/4 h-fit">
      <TranslatorInput @update:query="handleQueryUpdate"></TranslatorInput>
    </div>
  </main>
</template>
