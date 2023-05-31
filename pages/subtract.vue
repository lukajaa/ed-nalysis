<template>
  <div class="text-center">
    <p class="text-7xl">-</p>
    <p>
      - (subtract) is Ed Sheeran's 5th and latest studio album. It includes hits such as "Boat", "Eyes Closed", and "Curtains".
    </p>
    <p class="text-2xl mt-4">Most Common Words</p>
    <p
      v-for="(occurrences, word) of subtractWords"
      :key="word"
      class="capitalize"
    >
        {{ word }}: {{ occurrences }}
    </p>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import subtractJSON from '@/assets/data/subtract.json'

const subtractWords : { [key:string] : number } = subtractJSON
</script>