<template>
  <div class="text-center mt-10">
    <p class="text-3xl">Word Frequency</p>
    <p class="text-left indent-8 mb-2">
        After scraping all of the lyrics for every Ed Sheeran song, I found the number of occurrences for each word. Ed Sheeran has written 250 songs, with over 92,000 words. Below are the top 10 most common, but you can see the whole list
        <NuxtLink to="/word-list" class="text-blue-500"> here</NuxtLink>.
    </p>
    <p
      v-for="word in Object.keys(allWords).splice(0, 10)"
      :key="word"
      class="capitalize"
    >
        {{ word }}: {{ allWords[word] }}
    </p>
    <p> 
      Pretty boring, right? Let's see what happens when we remove the most common words from the list.
    </p>
    <WithoutCommon />
    <p> 
      Still a little boring. Let's see what else we can do.
    </p>
  </div>
</template>

<script setup lang="ts">
import words_json from "~/assets/data/all.json"

const allWords : { [ key:string ] : number } = words_json
</script>