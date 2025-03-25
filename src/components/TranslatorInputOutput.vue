<script setup>
import { computed, reactive, watch, defineEmits } from 'vue'
import { inputStyles, siteStyles } from '@/state'
import { cellOn } from '@/state'

const searchTerm = reactive({
  query: ''
})

const emit = defineEmits(['update:query'])

watch(searchTerm, (newVal) => {
  emit('update:query', newVal.query)
})

const clearInput = () => {
  searchTerm.query = ''
}

const textToBraille = (text) => {
  const brailleDict = {

    //abcs
    a: '⠁', b: '⠃', c: '⠉', d: '⠙', e: '⠑',
    f: '⠋', g: '⠛', h: '⠓', i: '⠊', j: '⠚',
    k: '⠅', l: '⠇', m: '⠍', n: '⠝', o: '⠕',
    p: '⠏', q: '⠟', r: '⠗', s: '⠎', t: '⠞',
    u: '⠥', v: '⠧', w: '⠺', x: '⠭', y: '⠽',
    z: '⠵',

    //numebers
    1: '⠼⠁', 2: '⠼⠃', 3: '⠼⠉', 4: '⠼⠙', 5: '⠼⠑',
    6: '⠼⠋', 7: '⠼⠛', 8: '⠼⠓', 9: '⠼⠊', 0: '⠼⠚',

    //symbols
    ' ': ' ', ',': '⠂', '.': '⠲', '?': '⠦',
    '!': '⠖', ';': '⠆', ':': '⠒', '-': '⠤', "'": '⠄',
    '@': '⠈⠁', '$': '⠈⠎', '#': '⠼', '%': '⠨⠴', '&': '⠈⠯',
    '*': '⠈⠔', '+': '⠬', '/': '⠸⠌', '<': '⠐⠣', '=': '⠐⠶',
    '>': '⠐⠜', '(': '⠐⠣', ')': '⠐⠜', '[': '⠸⠣', ']': '⠸⠜',
    '{': '⠸⠹', '}': '⠸⠻', '~': '⠈⠢', '_': '⠈⠤', '^': '⠈⠡'
  };

  // const innerDoubleQuote = '⠦'
  const innerDoubleQuote = '⠦'
  const outerDoubleQuote = '⠴'

  // Dot 6 for capitals
  const dot6 = '⠠'

  //Use a toggle state for openiong and closing quote

  let isOpeningQuote = true;

  console.log("whole input: ", text);

  return text
    .split('')
    .map((char) => {
      if (char >= 'A' && char <= 'Z') {
        return dot6 + (brailleDict[char.toLowerCase()] || char)
      }
      if (char === '"') {
        const quote = isOpeningQuote ? innerDoubleQuote : outerDoubleQuote
        isOpeningQuote = !isOpeningQuote
        return quote
      }
      return brailleDict[char] || char
    })
    .join('')
}

const inputClass = computed(() => {
  return `${inputStyles.value.width} ${inputStyles.value.border} ${inputStyles.value.background} ${inputStyles.value.rounded} ${inputStyles.value.placeholder} ${inputStyles.value.text} ${inputStyles.value.padding}`
})

const buttonClass = computed(() => {
  return `${siteStyles.value.border} ${siteStyles.value.text} ${siteStyles.value.text} ${siteStyles.value.padding}`
})
</script>

<template>
  <div>
    <div class="flex">
      <form @submit.prevent>
        <div>
          <input id="textInput" type="text" placeholder="Type here" :class="inputClass" v-model="searchTerm.query" />
        </div>
      </form>
      <button :class="buttonClass" class="border-none text-2xl sm:text-4xl hover:animate-jump" @click="clearInput">
        <i class="fa-solid fa-delete-left" />
      </button>
    </div>

    <div v-if="!cellOn" class="w-full text-5xl sm:text-6xl p-2 sm:p-6 overflow-auto break-words">
      {{ textToBraille(searchTerm.query) }}
    </div>

    <div v-else-if="cellOn" class="w-full text-5xl font-thin sm:text-6xl p-2 sm:p-6 overflow-auto break-words">
      {{ textToBraille(searchTerm.query) }}
    </div>
  </div>
</template>
