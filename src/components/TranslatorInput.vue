<script setup>
import { computed, reactive } from 'vue'
import { inputStyles, siteStyles } from '@/state'

const searchTerm = reactive({
  query: ''
})

const clearInput = () => {
  searchTerm.query = ''
}

const textToBraille = (text) => {
  const brailleDict = {
    a: '⠁',
    b: '⠃',
    c: '⠉',
    d: '⠙',
    e: '⠑',
    f: '⠋',
    g: '⠛',
    h: '⠓',
    i: '⠊',
    j: '⠚',
    k: '⠅',
    l: '⠇',
    m: '⠍',
    n: '⠝',
    o: '⠕',
    p: '⠏',
    q: '⠟',
    r: '⠗',
    s: '⠎',
    t: '⠞',
    u: '⠥',
    v: '⠧',
    w: '⠺',
    x: '⠭',
    y: '⠽',
    z: '⠵',
    ' ': ' ',
    ',': '⠂',
    '.': '⠲',
    '?': '⠦',
    '!': '⠖',
    ';': '⠆',
    ':': '⠒',
    '-': '⠤',
    "'": '⠄',
    1: '⠼⠁',
    2: '⠼⠃',
    3: '⠼⠉',
    4: '⠼⠙',
    5: '⠼⠑',
    6: '⠼⠋',
    7: '⠼⠛',
    8: '⠼⠓',
    9: '⠼⠊',
    0: '⠼⠚'
  }
  return text
    .split('')
    .map((char) => brailleDict[char.toLowerCase()] || char)
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
    <div class="border flex">
      <form @submit.prevent>
        <div>
          <input
            id="textInput"
            type="text"
            placeholder="Type here"
            :class="inputClass"
            v-model="searchTerm.query"
          />
        </div>
      </form>
      <button :class="buttonClass" class="border-none text-4xl" @click="clearInput">
        <i class="fa-solid fa-delete-left" />
      </button>
    </div>
    <div class="w-full text-4xl p-6 overflow-auto break-words">
      {{ textToBraille(searchTerm.query) }}
    </div>
  </div>
</template>
