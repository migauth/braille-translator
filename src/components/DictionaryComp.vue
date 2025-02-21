<script setup>
import { computed, ref } from 'vue';
import { siteStyles } from '@/state'


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
    <div v-if="!showAlphabet" class="grid grid-cols-10 gap-4 p-4 text-5xl border">
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

      <div>⠁</div>
      <div>⠃</div>
      <div>⠉</div>
      <div>⠙</div>
      <div>⠑</div>
      <div>⠋</div>
      <div>⠛</div>
      <div>⠓</div>
      <div>⠑</div>
      <div>⠚</div>

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

      <div>⠅</div>
      <div>⠇</div>
      <div>⠍</div>
      <div>⠝</div>
      <div>⠕</div>
      <div>⠏</div>
      <div>⠟</div>
      <div>⠗</div>
      <div>⠎</div>
      <div>⠞</div>

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

      <div>⠥</div>
      <div>⠧</div>
      <div>⠭</div>
      <div>⠽</div>
      <div>⠵</div>

      <div></div>
      <div>⠺</div>
    </div>
    <p class="p-4 text-4xl">Indicators</p>
    <div class="grid grid-cols-2 gap-4 p-4 text-3xl ">
      <div>Numeric</div>
      <div></div>
      <div>⠼</div>
    </div>
    <p class="p-4 text-4xl">Capital</p>
    <div class="grid grid-cols-4 gap-4 p-4 text-3xl ">
      <div>letter</div>
      <div>word</div>
      <div>passage</div>
      <div>Grade 1 terminator</div>

      <div>⠠</div>
      <div>⠠⠠</div>
      <div>⠠⠠⠠</div>
      <div>⠄⠠</div>
    </div>
    <p class="p-4 text-4xl">Typeform</p>
    <div class="grid grid-cols-4 gap-4 p-4 text-3xl ">
      <div>italic symbol</div>
      <div>italic word</div>
      <div>italic passage</div>
      <div>italic terminator</div>

      <div>⠨⠆</div>
      <div>⠨⠂</div>
      <div>⠨⠶</div>
      <div>⠨⠄</div>

      <div>bold symbol</div>
      <div>bold word</div>
      <div>bold passage</div>
      <div>bold terminator</div>

      <div>⠘⠨</div>
      <div>⠘⠨</div>
      <div>⠘⠨</div>
      <div>⠘⠨</div>

      <div>underline symbol</div>
      <div>underline word</div>
      <div>underline passage</div>
      <div>underline terminator</div>

      <div>⠸⠆</div>
      <div>⠸⠂</div>
      <div>⠸⠶</div>
      <div>⠸⠄</div>

      <div>script symbol</div>
      <div>script word</div>
      <div>script passage</div>
      <div>script terminator</div>

      <div>⠈⠆</div>
      <div>⠈⠂</div>
      <div>⠈⠶</div>
      <div>⠈⠄</div>
    </div>
    <p class="p-4 text-4xl">Punctuation</p>
    <div class="grid grid-cols-5 gap-4 p-4 text-3xl ">
      <div>comma ,</div>
      <div>period .</div>
      <div>apostrophe '</div>
      <div>colon :</div>
      <div>dash </div>

      <div>⠨⠆</div>
      <div>⠨⠂</div>
      <div>⠨⠶</div>
      <div>⠨⠄</div>
      <div>⠨⠄</div>

      <div>long-dash </div>
      <div>exclamation mark !</div>
      <div>hyphen -</div>
      <div>question mark ?</div>
      <div>semicolon ;</div>

      <div>⠨⠆</div>
      <div>⠨⠂</div>
      <div>⠨⠶</div>
      <div>⠨⠄</div>
      <div>⠨⠄</div>

      <div>elipsis ...</div>
      <div>forward slash /</div>
      <div>backward slash \</div>
      <div>opening outter quotation mark "</div>
      <div>opening outter quotation mark "</div>

      <div>⠨⠆</div>
      <div>⠨⠂</div>
      <div>⠨⠶</div>
      <div>⠨⠄</div>
      <div>⠨⠄</div>

      <div>opening inner quotation mark</div>
      <div>opening inner quotation mark</div>
      <div></div>
      <div></div>
      <div></div>

      <div>⠨⠄</div>
      <div>⠨⠄</div>
      <div></div>
      <div></div>
      <div></div>

    </div>
    <p class="p-4 text-4xl">Grouping Punctuation</p>
    <div class="grid grid-cols-4 gap-4 p-4 text-3xl ">
      <div>opening round parenthesis</div>
      <div>closing round parenthesis</div>
      <div>opening square parenthesis</div>
      <div>closing square parenthesis</div>

      <div>⠐⠣</div>
      <div>⠐⠜</div>
      <div>⠨⠣</div>
      <div>⠨⠜</div>

      <div>opening curly parenthesis</div>
      <div>closing curly parenthesis</div>
      <div>opening angle parenthesis</div>
      <div>closing angle parenthesis</div>

      <div>⠸⠣</div>
      <div>⠸⠜</div>
      <div>⠈⠣</div>
      <div>⠈⠜</div>

    </div>
    <p class="p-4 text-4xl">Signs of Operations and Comparison</p>
    <div class="grid grid-cols-4 gap-4 p-4 text-3xl ">
      <div>plus +</div>
      <div>minus -</div>
      <div>multiplication x</div>
      <div>multiplication dot</div>

      <div>⠐⠖</div>
      <div>⠐⠤</div>
      <div>⠐⠦</div>
      <div>⠐⠲</div>

      <div>division</div>
      <div>greater than</div>
      <div>less than</div>
      <div>equals</div>

      <div>⠐⠌</div>
      <div>⠈⠜</div>
      <div>⠈⠣</div>
      <div>⠐⠶</div>

    </div>
    <p class="p-4 text-4xl">Currency and Measurement</p>
    <div class="grid grid-cols-3 gap-4 p-4 text-3xl ">
      <div>cent</div>
      <div>dollar</div>
      <div>euro</div>

      <div>⠐⠖</div>
      <div>⠐⠤</div>
      <div>⠐⠲</div>

      <div>British Pound</div>
      <div>feet</div>
      <div>inches</div>

      <div>⠐⠖</div>
      <div>⠐⠤</div>
      <div>⠐⠲</div>
    </div>
  </div>
</template>