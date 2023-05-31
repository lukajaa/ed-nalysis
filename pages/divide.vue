<template>
  <div class="text-center">
    <p class="text-7xl">÷</p>
    <p>
      ÷ (divide) is Ed Sheeran's 3rd studio album. It includes hits such as "Galway Girl", "Shape of You", "Perfect", and "Castle on the Hill".
    </p>
    <p class="text-2xl mt-4">Most Common Words</p>
    <p
      v-for="(occurrences, word) of divideWords"
      :key="word"
      class="capitalize"
    >
        {{ word }}: {{ occurrences }}
    </p>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import divideJSON from '@/assets/data/divide.json'

const divideWords : { [key:string] : number } = divideJSON
</script>