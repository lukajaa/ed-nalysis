<template>
  <div class="text-center">
    <p class="text-7xl">X</p>
    <p>
      X (multiply) is Ed Sheeran's 2nd studio album. It includes hits such as "Photograph" and "Thinking Out Loud".
    </p>
    <p class="text-2xl mt-4">Most Common Words</p>
    <p
      v-for="(occurrences, word) of multiplyWords"
      :key="word"
      class="capitalize"
    >
        {{ word }}: {{ occurrences }}
    </p>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import multiplyJSON from '@/assets/data/multiply.json'

const multiplyWords : { [key:string] : number } = multiplyJSON
</script>