<template>
  <div class="transition duration-300 h-full min-h-screen" :class="background_color">
    <div class="w-full md:w-3/4 lg:w-1/2 2xl:w-1/3 py-10 px-4 mx-auto">
      <p class="text-7xl font-bold text-center">
        Ed-nalysis
        <Transition name="fade">
          <span v-if="album != 'none'">: {{ album }} </span>
        </Transition>
      </p>
      <div
        class="flex flex-row space-x-2 mdspace-x-8 columns-5 justify-center mt-16 w-full"
      >
        <div
          class="flex flex-col w-1/6"
          @mouseover="set_background_color('Plus')"
          @mouseleave="set_background_color(album)"
          @click="
            album == 'Plus' ? (album = 'none') : (album = 'Plus');
            set_background_color(album);
          "
        >
          <img
            src="~/assets/images/add.jpg"
            class="transition ease-in-out hover:scale-105 rounded-xl"
          />
        </div>
        <div
          class="flex flex-col w-1/6"
          @mouseover="set_background_color('Multiply')"
          @mouseleave="set_background_color(album)"
          @click="
            album == 'Multiply' ? (album = 'none') : (album = 'Multiply');
            set_background_color(album);
          "
        >
          <img
            src="~/assets/images/multiply.jpg"
            class="transition ease-in-out hover:scale-105 rounded-xl"
          />
        </div>
        <div
          class="flex flex-col w-1/6"
          @mouseover="set_background_color('Divide')"
          @mouseleave="set_background_color(album)"
          @click="
            album == 'Divide' ? (album = 'none') : (album = 'Divide');
            set_background_color(album);
          "
        >
          <img
            src="~/assets/images/divide.jpg"
            class="transition ease-in-out hover:scale-105 rounded-xl"
          />
        </div>
        <div
          class="flex flex-col w-1/6"
          @mouseover="set_background_color('Equals')"
          @mouseleave="set_background_color(album)"
          @click="
            album == 'Equals' ? (album = 'none') : (album = 'Equals');
            set_background_color(album);
          "
        >
          <img
            src="~/assets/images/equals.jpg"
            class="transition ease-in-out hover:scale-105 rounded-xl"
          />
        </div>
        <div
          class="flex flex-col w-1/6"
          @mouseover="set_background_color('Subtract')"
          @mouseleave="set_background_color(album)"
          @click="
            album == 'Subtract' ? (album = 'none') : (album = 'Subtract');
            set_background_color(album);
          "
        >
          <img
            src="~/assets/images/subtract.jpg"
            class="transition ease-in-out hover:scale-105 rounded-xl"
          />
        </div>
      </div>

      <div class="text-center text-5xl mt-20">
        <p class="font-bold">{{ top_number }} Most Common Words</p>
        <input type="range" min="1" max="100" v-model="top_number" class="w-full md:w-1/2" />
        <p 
          v-for="word in ten_most_common"
          :key="word"
        >
          {{ word.charAt(0).toUpperCase() + word.slice(1) }}
        </p>
      </div>

      <!--
      <div class="flex flex-row mt-10">
        <Transition name="fade">
          <div v-if="ed_hover" class="flex flex-col w-1/5 scale-150">
            <img
              src="~/assets/images/left.jpg"
              class="transition ease-in-out scale-150 rounded-xl mt-16 -rotate-[30deg] translate-y-20 -translate-x-8"
            />
          </div>
        </Transition>
        <div class="flex flex-col w-3/5 z-50 justify-center mx-auto scale-125">
          <img
            src="~/assets/images/hero.jpg"
            class="rounded-xl mt-16"
            @mouseover="ed_hover = true"
            @mouseleave="ed_hover = false"
          />
        </div>
        <Transition name="fade">
          <div v-if="ed_hover" class="flex flex-col w-1/5 scale-150">
            <img
              src="~/assets/images/right.jpg"
              class="transition ease-in-out scale-150 rounded-xl mt-16 rotate-[30deg] translate-y-20 translate-x-8"
            />
          </div>
        </Transition>
      </div>
      -->
    </div>
  </div>
</template>

<script setup>
// import data jsons
import all from "~/assets/data/all.json";
import add from "~/assets/data/add.json";
import divide from "~/assets/data/divide.json";
import equals from "~/assets/data/equals.json";
import multiply from "~/assets/data/multiply.json";
import subtract from "~/assets/data/subtract.json";

const background_color = ref("bg-white");
// const ed_hover = ref(false);
const album = ref("none");
const top_number = ref(10);

const ten_most_common = computed(() => {
  switch (album.value) {
    case "Plus":
      return Object.keys(add).slice(0, top_number.value)
    case "Multiply":
      return Object.keys(multiply).slice(0, top_number.value)
    case "Divide":
      return Object.keys(divide).slice(0, top_number.value)
    case "Equals":
      return Object.keys(equals).slice(0, top_number.value)
    case "Subtract":
      return Object.keys(subtract).slice(0, top_number.value)
    case "none":
      return Object.keys(all).slice(0, top_number.value)
  }
})

function set_background_color(album) {
  switch (album) {
    case "Plus":
      background_color.value = "bg-[#d67a3e]";
      break;
    case "Multiply":
      background_color.value = "bg-[#1dcb57]";
      break;
    case "Divide":
      background_color.value = "bg-[#65c9e6]";
      break;
    case "Equals":
      background_color.value = "bg-[#cc2c34]";
      break;
    case "Subtract":
      background_color.value = "bg-[#f4d811]";
      break;
    case "none":
      background_color.value = "bg-white";
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

* {
  font-family: "Lato", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
