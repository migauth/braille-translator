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
    'border border-[rgba(0,255,0,1)]',
    'text-[rgba(0,255,0,1)]',
    'bg-black',
    'placeholder-[rgba(0,255,0,1)]',
    'border-8 border-dashed border-[rgba(0,255,0,1)]'
  )

const yellowAndBlack = () =>
  changeColorScheme(
    'border border-[rgba(255,255,0,1)]',
    'text-[rgba(255,255,0,1)]',
    'bg-black',
    'placeholder-[rgba(255,255,0,1)]',
    'border-8 border-dashed border-[rgba(255,255,0,1)]'
  )

const blackAndYellow = () =>
  changeColorScheme(
    'border border-black',
    'text-black',
    'bg-[rgba(255,255,0,1)]',
    'placeholder-black',
    'border-8 border-dashed border-black'
  )
const blueAndYellow = () =>
  changeColorScheme(
    'border border-[rgba(0,0,255,1)]',
    'text-[rgba(0,0,255,1)]',
    'bg-[rgba(255,255,0,1)]',
    'placeholder-[rgba(0,0,255,1)]',
    'border-8 border-dashed border-[rgba(0,0,255,1)]'
  )
</script>

<template>
  <div class="w-full flex flex-col gap-4 md:flex-row">
    <button @click="blackAndWhite"
      class="border border-black text-black bg-white rounded-md p-2 text-2xl hover:animate-jump">
      Change color
    </button>
    <button @click="whiteAndBlack"
      class="border border-white text-white bg-black rounded-md p-2 text-2xl hover:animate-jump">
      Change color
    </button>
    <button @click="greenAndBlack"
      class="border border-[rgba(0,255,0,1)] text-[rgba(0,255,0,1)] bg-black rounded-md p-2 text-2xl hover:animate-jump">
      Change color
    </button>
    <button @click="yellowAndBlack"
      class="border border-[rgba(255,255,0,1)] text-[rgba(255,255,0,1)] bg-black rounded-md p-2 text-2xl hover:animate-jump">
      Change color
    </button>
    <button @click="blackAndYellow"
      class="border border-black text-black bg-[rgba(255,255,0,1)] rounded-md p-2 text-2xl hover:animate-jump">
      Change color
    </button>
    <button @click="blueAndYellow"
      class="border border-[rgba(0,0,255,1)] text-[rgba(0,0,255,1)] bg-[rgba(255,255,0,1)] rounded-md p-2 text-2xl hover:animate-jump">
      Change color
    </button>
  </div>
</template>
