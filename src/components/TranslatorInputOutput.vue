<script setup>
import { computed, reactive, watch, defineEmits } from 'vue'
import { inputStyles, siteStyles } from '@/state'

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
    a: '⠁', b: '⠃', c: '⠉', d: '⠙', e: '⠑',
    f: '⠋', g: '⠛', h: '⠓', i: '⠊', j: '⠚',
    k: '⠅', l: '⠇', m: '⠍', n: '⠝', o: '⠕',
    p: '⠏', q: '⠟', r: '⠗', s: '⠎', t: '⠞',
    u: '⠥', v: '⠧', w: '⠺', x: '⠭', y: '⠽',
    z: '⠵',
    1: '⠼⠁', 2: '⠼⠃', 3: '⠼⠉', 4: '⠼⠙', 5: '⠼⠑',
    6: '⠼⠋', 7: '⠼⠛', 8: '⠼⠓', 9: '⠼⠊', 0: '⠼⠚',
    ' ': ' ', ',': '⠂', '.': '⠲', '?': '⠦',
    '!': '⠖', ';': '⠆', ':': '⠒', '-': '⠤', "'": '⠄',
    '@': '⠈⠁', '$': '⠈⠎', '#': '⠼', '%': '⠨⠴', '&': '⠈⠯',
    '*': '⠈⠔', '+': '⠬', '/': '⠸⠌', '<': '⠐⠣', '=': '⠐⠶',
    '>': '⠐⠜', '(': '⠐⠣', ')': '⠐⠜', '[': '⠸⠣', ']': '⠸⠜',
    '{': '⠸⠹', '}': '⠸⠻', '~': '⠈⠢', '_': '⠈⠤', '^': '⠈⠡'
  };

  // Dot 6 for capitals
  const dot6 = '⠠'

  return text
    .split('')
    .map((char) => {
      if (char >= 'A' && char <= 'Z') {
        return dot6 + (brailleDict[char.toLowerCase()] || char)
      } else {
        return brailleDict[char] || char
      }
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
  <div class="w-full sm:w-3/4">
    <div class="flex">
      <form @submit.prevent>
        <div class="w-full">
          <input id="textInput" type="text" placeholder="Type here" :class="inputClass" v-model="searchTerm.query" />
        </div>
      </form>
      <button :class="buttonClass" class="border-none text-2xl sm:text-4xl hover:animate-jump" @click="clearInput">
        <i class="fa-solid fa-delete-left" />
      </button>
    </div>
    <div class="w-full text-5xl sm:text-6xl p-2 sm:p-6 overflow-auto break-words">
      <!-- <div v-if="textToBraille.length === 0">
        <p>hi</p>
        text will appear here
      </div> -->
      <!-- {{ textToBraille.length }} -->
      {{ textToBraille(searchTerm.query) }}
    </div>
  </div>
</template>
