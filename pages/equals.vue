<template>
  <div class="text-center">
    <p class="text-7xl">=</p>
    <p>
      = (equals) is Ed Sheeran's 4th studio album. It includes hits such as "Shivers" and "Bad Habits".
    </p>
    <p class="text-2xl mt-4">Most Common Words</p>
    <p
      v-for="(occurrences, word) of equalsWords"
      :key="word"
      class="capitalize"
    >
        {{ word }}: {{ occurrences }}
    </p>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import equalsJSON from '@/assets/data/equals.json'

const equalsWords : { [key:string] : number } = equalsJSON
</script>