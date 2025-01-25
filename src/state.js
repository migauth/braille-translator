// src/state.js
import { ref } from 'vue'

export const siteStyles = ref({
  padding: 'p-5',
  border: 'border border-[rgba(255,255,0,1)]',
  text: 'text-[rgba(255,255,0,1)]',
  background: 'bg-black',
  layout: 'flex flex-col min-h-screen'
})

export const inputStyles = ref({
  width: 'w-full sm:w-3/4',
  border: 'border-8 border-dashed border-[rgba(255,255,0,1)]',
  background: 'bg-black',
  rounded: 'rounded-md',
  placeholder: 'placeholder-[rgba(255,255,0,1)]',
  text: 'text-4xl sm:text-4xl',
  padding: 'p-2 sm:p-6'
})
