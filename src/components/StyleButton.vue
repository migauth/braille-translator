<script setup>
// import { ref } from 'vue'
import { border } from '@/state'

const changeColor = () => {
  border.value = 'border border-black text-black bg-white'
}
</script>

<template>
  <div>
    <button @:click="changeColor" :class="border">Change color</button>
  </div>
</template>
