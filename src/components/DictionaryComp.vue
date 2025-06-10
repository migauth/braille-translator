<script setup>
import { computed, ref } from 'vue';
import { cellOn, siteStyles } from '@/state'


const showAlphabet = ref(false)

const toggleAlphabtet = () => {
  showAlphabet.value = !showAlphabet.value
}

const buttonClass = computed(() => {
  return `${siteStyles.value.border} ${siteStyles.value.text} ${siteStyles.value.text} ${siteStyles.value.padding}`
})

</script>

<template>
  <div>
    <button @click="toggleAlphabtet" :class="buttonClass"
      class="rounded-md p-2 text-3xl sm:text-2xl mb-3 mr-0 w-full sm:w-auto">
      <i class="fa-solid fa-caret-down" />Alphabet and Numbers</button>

    <div v-if="!showAlphabet" :class="buttonClass" class="grid grid-cols-10 gap-4 p-4 text-5xl border">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>0</div>

      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
      <div>e</div>
      <div>f</div>
      <div>g</div>
      <div>h</div>
      <div>i</div>
      <div>j</div>

      <div :class="!cellOn ? '' : 'brl'">⠁</div>
      <div :class="!cellOn ? '' : 'brl'">⠃</div>
      <div :class="!cellOn ? '' : 'brl'">⠉</div>
      <div :class="!cellOn ? '' : 'brl'">⠙</div>
      <div :class="!cellOn ? '' : 'brl'">⠑</div>
      <div :class="!cellOn ? '' : 'brl'">⠋</div>
      <div :class="!cellOn ? '' : 'brl'">⠛</div>
      <div :class="!cellOn ? '' : 'brl'">⠓</div>
      <div :class="!cellOn ? '' : 'brl'">⠑</div>
      <div :class="!cellOn ? '' : 'brl'">⠚</div>

      <div>k</div>
      <div>l</div>
      <div>m</div>
      <div>n</div>
      <div>o</div>
      <div>p</div>
      <div>q</div>
      <div>r</div>
      <div>s</div>
      <div>t</div>

      <div :class="!cellOn ? '' : 'brl'">⠅</div>
      <div :class="!cellOn ? '' : 'brl'">⠇</div>
      <div :class="!cellOn ? '' : 'brl'">⠍</div>
      <div :class="!cellOn ? '' : 'brl'">⠝</div>
      <div :class="!cellOn ? '' : 'brl'">⠕</div>
      <div :class="!cellOn ? '' : 'brl'">⠏</div>
      <div :class="!cellOn ? '' : 'brl'">⠟</div>
      <div :class="!cellOn ? '' : 'brl'">⠗</div>
      <div :class="!cellOn ? '' : 'brl'">⠎</div>
      <div :class="!cellOn ? '' : 'brl'">⠞</div>

      <div>u</div>
      <div>v</div>
      <div>x</div>
      <div>y</div>
      <div>z</div>

      <div></div>
      <div>w</div>
      <div></div>
      <div></div>
      <div></div>

      <div :class="!cellOn ? '' : 'brl'">⠥</div>
      <div :class="!cellOn ? '' : 'brl'">⠧</div>
      <div :class="!cellOn ? '' : 'brl'">⠭</div>
      <div :class="!cellOn ? '' : 'brl'">⠽</div>
      <div :class="!cellOn ? '' : 'brl'">⠵</div>

      <div></div>
      <div :class="!cellOn ? '' : 'brl'">⠺</div>
    </div>

    <p class="p-4 text-4xl">Indicators</p>

    <div :class="buttonClass">

      <div class="grid grid-cols-2 gap-4 p-4 text-4xl ">
        <div class="text-2xl sm:text-4xl">Numeric</div>
        <div :class="!cellOn ? '' : 'brl'">⠼</div>
      </div>

      <p class="p-4 text-4xl">Capital</p>
      <div class="grid grid-cols-2 gap-4 p-4 text-4xl ">
        <div class="text-2xl sm:text-4xl">letter</div>
        <div :class="!cellOn ? '' : 'brl'">⠠</div>
        <div class="text-2xl sm:text-4xl">word</div>
        <div :class="!cellOn ? '' : 'brl'">⠠⠠</div>
        <div class="text-2xl sm:text-4xl">passage</div>
        <div :class="!cellOn ? '' : 'brl'">⠠⠠⠠</div>
        <div class="text-2xl sm:text-4xl">Grade 1 terminator</div>
        <div :class="!cellOn ? '' : 'brl'">⠄⠠</div>
      </div>

      <p class="p-4 text-4xl">Typeform</p>
      <div class="grid grid-cols-2 gap-4 p-4 text-5xl sm:grid-cols-4">

        <div class="text-2xl sm:text-4xl">italic symbol</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠆</div>
        <div class="text-2xl sm:text-4xl">italic word</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠂</div>
        <div class="text-2xl sm:text-4xl">italic passage</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠶</div>
        <div class="text-2xl sm:text-4xl">italic terminator</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠄</div>

        <div class="text-2xl sm:text-4xl">bold symbol</div>
        <div :class="!cellOn ? '' : 'brl'">⠘⠨</div>
        <div class="text-2xl sm:text-4xl">bold word</div>
        <div :class="!cellOn ? '' : 'brl'">⠘⠨</div>
        <div class="text-2xl sm:text-4xl">bold passage</div>
        <div :class="!cellOn ? '' : 'brl'">⠘⠨</div>
        <div class="text-2xl sm:text-4xl">bold terminator</div>
        <div :class="!cellOn ? '' : 'brl'">⠘⠨</div>


        <div class="text-2xl sm:text-4xl">underline symbol</div>
        <div :class="!cellOn ? '' : 'brl'">⠸⠆</div>
        <div class="text-2xl sm:text-4xl">underline word</div>
        <div :class="!cellOn ? '' : 'brl'">⠸⠂</div>
        <div class="text-2xl sm:text-4xl">underline passage</div>
        <div :class="!cellOn ? '' : 'brl'">⠸⠶</div>
        <div class="text-2xl sm:text-4xl">underline terminator</div>
        <div :class="!cellOn ? '' : 'brl'">⠸⠄</div>


        <div class="text-2xl sm:text-4xl">script symbol</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠆</div>
        <div class="text-2xl sm:text-4xl">script word</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠂</div>
        <div class="text-2xl sm:text-4xl">script passage</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠶</div>
        <div class="text-2xl sm:text-4xl">script terminator</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠄</div>

      </div>

    </div>

    <p class="p-4 text-4xl">Punctuation</p>

    <div :class="buttonClass">

      <div class="grid grid-cols-2 gap-4 p-4 text-3xl sm:grid-cols-2">

        <div class="text-2xl sm:text-4xl">comma ,</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠆</div>
        <div class="text-2xl sm:text-4xl">period .</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠂</div>
        <div class="text-2xl sm:text-4xl">apostrophe '</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠶</div>
        <div class="text-2xl sm:text-4xl">colon :</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠄</div>
        <div class="text-2xl sm:text-4xl">dash </div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠄</div>


        <div class="text-2xl sm:text-4xl">long-dash </div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠆</div>
        <div class="text-2xl sm:text-4xl">exclamation mark !</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠂</div>
        <div class="text-2xl sm:text-4xl">hyphen -</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠶</div>
        <div class="text-2xl sm:text-4xl">question mark ?</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠄</div>
        <div class="text-2xl sm:text-4xl">semicolon ;</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠄</div>


        <div class="text-2xl sm:text-4xl">elipsis ...</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠆</div>
        <div class="text-2xl sm:text-4xl">forward slash /</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠂</div>
        <div class="text-2xl sm:text-4xl">backward slash \</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠶</div>
        <div class="text-2xl sm:text-4xl">opening outter quotation mark "</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠄</div>
        <div class="text-2xl sm:text-4xl">opening outter quotation mark "</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠄</div>


        <div class="text-2xl sm:text-4xl">opening inner quotation mark</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠄</div>
        <div class="text-2xl sm:text-4xl">opening inner quotation mark</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠄</div>
        <div></div>
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        <div></div>

      </div>

    </div>

    <p class="p-4 text-4xl">Grouping Punctuation</p>

    <div :class="buttonClass">

      <div class="grid grid-cols-2 gap-4 p-4 text-2xl sm:grid-cols-4">

        <div>opening round parenthesis</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠣</div>
        <div>closing round parenthesis</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠜</div>
        <div>opening square parenthesis</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠣</div>
        <div>closing square parenthesis</div>
        <div :class="!cellOn ? '' : 'brl'">⠨⠜</div>


        <div>opening curly parenthesis</div>
        <div :class="!cellOn ? '' : 'brl'">⠸⠣</div>
        <div>closing curly parenthesis</div>
        <div :class="!cellOn ? '' : 'brl'">⠸⠜</div>
        <div>opening angle parenthesis</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠣</div>
        <div>closing angle parenthesis</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠜</div>


      </div>

    </div>

    <p class="p-4 text-4xl">Signs of Operations and Comparison</p>

    <div :class="buttonClass">
      <div class="grid grid-cols-2 gap-4 p-4 text-xl sm:grid-cols-4">

        <div>plus +</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠖</div>
        <div>minus -</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠤</div>
        <div>multiplication x</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠦</div>
        <div>multiplication dot</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠲</div>


        <div>division</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠌</div>
        <div>greater than</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠜</div>
        <div>less than</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠣</div>
        <div>equals</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠶</div>

      </div>
    </div>

    <p class="p-4 text-4xl">Currency and Measurement</p>

    <div :class="buttonClass">
      <div class="grid grid-cols-2 gap-4 p-4 text-3xl ">
        <div>cent</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠉</div>
        <div>dollar</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠎</div>
        <div>euro</div>
        <div :class="!cellOn ? '' : 'brl'">⠈⠑</div>


        <div>British Pound</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠖</div>
        <div>feet</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠤</div>
        <div>inches</div>
        <div :class="!cellOn ? '' : 'brl'">⠐⠲</div>

      </div>
    </div>
  </div>
</template>

<style>
.brl {
  font-weight: lighter;
}
</style>