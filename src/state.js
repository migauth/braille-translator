// src/state.js
import { ref } from 'vue'

export const siteStyles = ref({
  padding: 'p-5',
  border: 'border border-yellow-300',
  text: 'text-yellow-300',
  background: 'bg-black',
  layout: 'flex flex-col min-h-screen'
})

export const inputStyles = ref({
  width: 'w-full sm:w-3/4',
  border: 'border-8 border-dashed border-yellow-300',
  background: 'bg-black',
  rounded: 'rounded-md',
  placeholder: 'placeholder-yellow-300',
  text: 'text-4xl sm:text-4xl',
  padding: 'p-2 sm:p-6'
})
