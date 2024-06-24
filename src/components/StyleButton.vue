<script setup>
import { siteStyles, inputStyles } from '@/state'

const changeColorScheme = (border, text, background, placeholder, inputBorder) => {
  siteStyles.value.border = border
  siteStyles.value.text = text
  siteStyles.value.background = background
  inputStyles.value.placeholder = placeholder
  inputStyles.value.background = background
  inputStyles.value.border = inputBorder
}

const blackAndWhite = () =>
  changeColorScheme(
    'border border-black',
    'text-black',
    'bg-white',
    'placeholder-black',
    'border-8 border-dashed border-black'
  )

const whiteAndBlack = () =>
  changeColorScheme(
    'border border-white',
    'text-white',
    'bg-black',
    'placeholder-white',
    'border-8 border-dashed border-white'
  )

const greenAndBlack = () =>
  changeColorScheme(
    'border border-green-400',
    'text-green-400',
    'bg-black',
    'placeholder-green-400',
    'border-8 border-dashed border-green-400'
  )

const yellowAndBlack = () =>
  changeColorScheme(
    'border border-yellow-300',
    'text-yellow-300',
    'bg-black',
    'placeholder-yellow-300',
    'border-8 border-dashed border-yellow-300'
  )
</script>

<template>
  <div class="w-full flex flex-col gap-4 md:flex-row">
    <button
      @click="blackAndWhite"
      class="border border-black text-black bg-white rounded-md p-2 text-2xl hover:animate-jump"
    >
      Change color
    </button>
    <button
      @click="whiteAndBlack"
      class="border border-white text-white bg-black rounded-md p-2 text-2xl hover:animate-jump"
    >
      Change color
    </button>
    <button
      @click="greenAndBlack"
      class="border border-green-400 text-green-400 bg-black rounded-md p-2 text-2xl hover:animate-jump"
    >
      Change color
    </button>
    <button
      @click="yellowAndBlack"
      class="border border-yellow-300 text-yellow-300 bg-black rounded-md p-2 text-2xl hover:animate-jump"
    >
      Change color
    </button>
  </div>
</template>
