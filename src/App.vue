<script setup>
import TranslatorInputOutput from './components/TranslatorInputOutput.vue'
import StyleButton from './components/StyleButton.vue'
import CellButton from './components/CellButton.vue'
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
    <div class="flex flex-wrap sm:gap-3">
      <button @click="toggleColorOptions" :class="buttonClass"
        class="rounded-md p-2 text-3xl sm:text-2xl mb-3 mr-0 w-full sm:w-auto">
        <i class="fa-solid fa-caret-down" /> Color Options
      </button>
      <button @click="toggleHeader" :class="buttonClass"
        class="rounded-md p-2 text-3xl sm:text-2xl mb-3 w-full sm:w-auto">
        <i class="fa-solid fa-caret-down" /> Toggle Welcome
      </button>
      <button @click="toggleDictionary" :class="buttonClass"
        class="rounded-md p-2 text-3xl sm:text-2xl mb-3 w-full sm:w-auto">
        <i class="fa-solid fa-caret-down" />
        {{ !showDictionary ? "Braille Dictionary" : "Back to Translator" }}
      </button>
      <CellButton />
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
      <p class="text-4xl p-4">Dictionary</p> <button>add 6 cells</button>
      <p class="p-4 text-4xl border">Alphabet and Numbers</p>
      <div class="grid grid-cols-10 gap-4 p-4 text-5xl">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>0</div>

        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
        <div>f</div>
        <div>g</div>
        <div>h</div>
        <div>i</div>
        <div>j</div>

        <div>⠁</div>
        <div>⠃</div>
        <div>⠉</div>
        <div>⠙</div>
        <div>⠑</div>
        <div>⠋</div>
        <div>⠛</div>
        <div>⠓</div>
        <div>⠑</div>
        <div>⠚</div>

        <div>k</div>
        <div>l</div>
        <div>m</div>
        <div>n</div>
        <div>o</div>
        <div>p</div>
        <div>q</div>
        <div>r</div>
        <div>s</div>
        <div>t</div>

        <div>⠅</div>
        <div>⠇</div>
        <div>⠍</div>
        <div>⠝</div>
        <div>⠕</div>
        <div>⠏</div>
        <div>⠟</div>
        <div>⠗</div>
        <div>⠎</div>
        <div>⠞</div>

        <div>u</div>
        <div>v</div>
        <div>x</div>
        <div>y</div>
        <div>z</div>

        <div></div>
        <div>w</div>
        <div></div>
        <div></div>
        <div></div>

        <div>⠥</div>
        <div>⠧</div>
        <div>⠭</div>
        <div>⠽</div>
        <div>⠵</div>

        <div></div>
        <div>⠺</div>
      </div>
      <p class="p-4 text-4xl">Indicators</p>
      <div class="grid grid-cols-2 gap-4 p-4 text-3xl ">
        <div>Numeric</div>
        <div></div>
        <div>⠼</div>
      </div>
      <p class="p-4 text-4xl">Capital</p>
      <div class="grid grid-cols-4 gap-4 p-4 text-3xl ">
        <div>letter</div>
        <div>word</div>
        <div>passage</div>
        <div>Grade 1 terminator</div>

        <div>⠠</div>
        <div>⠠⠠</div>
        <div>⠠⠠⠠</div>
        <div>⠄⠠</div>
      </div>
      <p class="p-4 text-4xl">Typeform</p>
      <div class="grid grid-cols-4 gap-4 p-4 text-3xl ">
        <div>italic symbol</div>
        <div>italic word</div>
        <div>italic passage</div>
        <div>italic terminator</div>

        <div>⠨⠆</div>
        <div>⠨⠂</div>
        <div>⠨⠶</div>
        <div>⠨⠄</div>

        <div>bold symbol</div>
        <div>bold word</div>
        <div>bold passage</div>
        <div>bold terminator</div>

        <div>⠘⠨</div>
        <div>⠘⠨</div>
        <div>⠘⠨</div>
        <div>⠘⠨</div>

        <div>underline symbol</div>
        <div>underline word</div>
        <div>underline passage</div>
        <div>underline terminator</div>

        <div>⠸⠆</div>
        <div>⠸⠂</div>
        <div>⠸⠶</div>
        <div>⠸⠄</div>

        <div>script symbol</div>
        <div>script word</div>
        <div>script passage</div>
        <div>script terminator</div>

        <div>⠈⠆</div>
        <div>⠈⠂</div>
        <div>⠈⠶</div>
        <div>⠈⠄</div>
      </div>
      <p class="p-4 text-4xl">Punctuation</p>
      <div class="grid grid-cols-5 gap-4 p-4 text-3xl ">
        <div>comma</div>
        <div>period</div>
        <div>apostrophe</div>
        <div>colon</div>
        <div>dash</div>

        <div>⠨⠆</div>
        <div>⠨⠂</div>
        <div>⠨⠶</div>
        <div>⠨⠄</div>
        <div>⠨⠄</div>

        <div>long-dash</div>
        <div>exclamation mark</div>
        <div>hyphen</div>
        <div>question mark</div>
        <div>semicolon</div>

        <div>⠨⠆</div>
        <div>⠨⠂</div>
        <div>⠨⠶</div>
        <div>⠨⠄</div>
        <div>⠨⠄</div>

        <div>elipsis</div>
        <div>forward slash</div>
        <div>backward slash</div>
        <div>opening outter quotation mark</div>
        <div>opening outter quotation mark</div>

        <div>⠨⠆</div>
        <div>⠨⠂</div>
        <div>⠨⠶</div>
        <div>⠨⠄</div>
        <div>⠨⠄</div>

        <div>opening inner quotation mark</div>
        <div>opening inner quotation mark</div>
        <div></div>
        <div></div>
        <div></div>

        <div>⠨⠄</div>
        <div>⠨⠄</div>
        <div></div>
        <div></div>
        <div></div>

      </div>
      <p class="p-4 text-4xl">Grouping Punctuation</p>
      <div class="grid grid-cols-4 gap-4 p-4 text-3xl ">
        <div>opening round parenthesis</div>
        <div>closing round parenthesis</div>
        <div>opening square parenthesis</div>
        <div>closing square parenthesis</div>

        <div>⠐⠣</div>
        <div>⠐⠜</div>
        <div>⠨⠣</div>
        <div>⠨⠜</div>

        <div>opening curly parenthesis</div>
        <div>closing curly parenthesis</div>
        <div>opening angle parenthesis</div>
        <div>closing angle parenthesis</div>

        <div>⠸⠣</div>
        <div>⠸⠜</div>
        <div>⠈⠣</div>
        <div>⠈⠜</div>

      </div>
    </div>
  </main>
</template>
