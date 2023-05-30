<template>
  <div>
    <div class="flex flex-row justify-center text-2xl space-x-8">
      <div class="flex flex-col">
        Without 10 most common
        <p
          v-for="(occurrences, word) of topTenWithoutTopTenCommon"
          :key="word"
          class="text-lg capitalize"
        >
            {{ word }}: {{ occurrences }}
        </p>
      </div>
      <div class="flex flex-col">
        Without 100 most common
        <p
          v-for="(occurrences, word) of topTenWithoutAllCommon"
          :key="word"
          class="text-lg capitalize"
        >
            {{ word }}: {{ occurrences }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import words_json from "~/assets/data/all.json"

const tenMostCommon = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "i"]
const commonWords = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "i", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us"]

const allWords : { [ key:string ] : number } = words_json

const topTenWithoutTopTenCommon = computed(() => {
    let topTenWithoutTopTenCommon : { [ key:string ] : number } = {}

    for (const [key, value] of Object.entries(allWords)) {
        if (tenMostCommon.includes(key)) {
            continue
        }
        topTenWithoutTopTenCommon[key] = value
        if (Object.keys(topTenWithoutTopTenCommon).length === 10) {
            break
        }
    }
    return topTenWithoutTopTenCommon
})

const topTenWithoutAllCommon = computed(() => {
    let topTenWithoutAllCommon : { [ key:string ] : number } = {}

    for (const [key, value] of Object.entries(allWords)) {
        if (commonWords.includes(key)) {
            continue
        }
        topTenWithoutAllCommon[key] = value
        if (Object.keys(topTenWithoutAllCommon).length === 10) {
            break
        }
    }
    return topTenWithoutAllCommon
})
</script>