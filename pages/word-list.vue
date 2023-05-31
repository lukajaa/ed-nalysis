<template>
  <div class="text-center">
    <p class="text-5xl md:text-7xl">Frequency of all Words</p>
    <p class="text-center indent-8 mt-2">
        Below is the full list of all words in Ed Sheeran's songs, sorted by frequency. Use ctrl/cmd + f to find a specific word.
    </p>
    <p
      v-for="(occurrences, word) of allWords"
      :key="word"
      class="capitalize"
    >
      {{ word }}: {{ occurrences }}
    </p>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import words_json from "~/assets/data/all.json"

const allWords : { [ key:string ] : number } = words_json
</script>