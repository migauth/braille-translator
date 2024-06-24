<script setup>
import { computed, reactive } from 'vue'
import { inputStyles } from '@/state'

const searchTerm = reactive({
  query: ''
})

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
</script>

<template>
  <div>
    <form @submit.prevent>
      <div class="">
        <input type="text" placeholder="Type here" :class="inputClass" v-model="searchTerm.query" />
      </div>
    </form>
    <div class="w-fit placeholder-yellow-300 text-4xl p-6">
      {{ textToBraille(searchTerm.query) }}
    </div>
  </div>
</template>
