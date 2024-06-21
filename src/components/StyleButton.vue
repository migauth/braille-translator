<script setup>
// import { ref } from 'vue'
import { siteColour } from '@/state'

const blackAndWhite = () => {
  siteColour.value = 'p-5 border border-black text-black bg-white flex flex-col min-h-screen'
}

const greenAndBlack = () => {
  siteColour.value =
    'p-5 border border-green-400 text-green-400 bg-black flex flex-col min-h-screen'
}
</script>

<template>
  <div>
    <button @:click="blackAndWhite" class="border border-black text-black bg-white">
      Change color
    </button>
    <button @:click="greenAndBlack" class="border border-green-400 text-green-400 bg-black">
      Change color
    </button>
  </div>
</template>
