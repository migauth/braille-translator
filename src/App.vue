<script setup>
import TranslatorInputOutput from './components/TranslatorInputOutput.vue'
import StyleButton from './components/StyleButton.vue'
import { siteStyles } from './state.js'
import { computed, ref } from 'vue'

const siteClass = computed(() => {
  return `${siteStyles.value.padding} ${siteStyles.value.border} ${siteStyles.value.text} ${siteStyles.value.background} ${siteStyles.value.layout}`
})

const showColorOptions = ref(false)
const showHeader = ref(false)
const showTranslator = ref(false)
const showDictionary = ref(false)
const isTyping = ref(false)

const toggleColorOptions = () => {
  showColorOptions.value = !showColorOptions.value
}

const toggleHeader = () => {
  showHeader.value = !showHeader.value
}

const toggleDictionary = () => {
  showHeader.value = !showHeader.value
  showTranslator.value = !showTranslator.value
  showDictionary.value = !showDictionary.value
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
    <div class="flex flex-wrap">
      <button @click="toggleColorOptions" :class="buttonClass"
        class="rounded-md p-2 text-3xl sm:text-2xl mb-3 mr-0 sm:mr-3 w-full sm:w-auto">
        <i class="fa-solid fa-caret-down" /> Color Options
      </button>
      <button @click="toggleHeader" :class="buttonClass"
        class="rounded-md p-2 text-3xl sm:text-2xl mb-3 mr-3 w-full sm:w-auto">
        <i class="fa-solid fa-caret-down" /> Toggle Welcome
      </button>
      <button @click="toggleDictionary" :class="buttonClass"
        class="rounded-md p-2 text-3xl sm:text-2xl mb-3 w-full sm:w-auto">
        <i class="fa-solid fa-caret-down" /> Braille Dictionary
      </button>
    </div>
    <!-- Colour buttons -->
    <div v-if="showColorOptions" class="z-10 flex flex-wrap p-0 mb-4 animate-flip-down">
      <StyleButton></StyleButton>
    </div>
    <!-- Title -->
    <h1 v-if="!showHeader" class="text-5xl sm:text-5xl md:text-7xl lg:text-8xl w-3/4 animate-fade-down mb-3">
      Welcome to Simple Braille Translator
    </h1>
    <!-- Translator -->
    <div v-if="!showTranslator" class="w-full sm:w-3/4">
      <TranslatorInputOutput @update:query="handleQueryUpdate" />
    </div>
    <!-- Dictionary -->
    <div v-if="showDictionary">
      <p>Dictionary</p>
      <p>Alphabet and Numbers</p>
      <pre>
1 2 3 4 5 6 7 8 9 0
a b c d e f g h i j
⠁ ⠃ ⠉ ⠙ ⠑ ⠋ ⠛ ⠓ ⠑ ⠚
k l m n o p q r s t

u v x y z w

      </pre>
    </div>
  </main>
</template>
