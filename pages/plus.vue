<template>
  <div class="text-center">
    <p class="text-7xl">+</p>
    <p>
      + (Plus) is Ed Sheeran's debut studio album. It features hits like "The A Team" and "Lego House".
    </p>
    <p class="text-2xl mt-4">Most Common Words</p>
    <p
      v-for="(occurrences, word) of plusWords"
      :key="word"
      class="capitalize"
    >
        {{ word }}: {{ occurrences }}
    </p>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import plusJSON from '@/assets/data/add.json'

const plusWords : { [key:string] : number } = plusJSON
</script>