<template>
  <div class="transition duration-300 h-full min-h-screen" :class="background_color">
    <div class="w-full md:w-3/4 lg:w-1/2 2xl:w-1/3 py-10 px-4 mx-auto">
      <p class="text-7xl font-bold text-center">
        Ed-nalysis
        <Transition name="fade">
          <span v-if="album != 'none'">: {{ album_symbol }} </span>
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
        <input type="range" min="1" max="100" v-model="top_number" class="w-full md:w-1/2 outline-0" :class="accent_color" />
        <p 
          v-for="word in most_common"
          :key="word"
          @mouseover="hovered_word = word"
          @mouseleave="hovered_word = ''"
        >
            <span v-if="hovered_word == word">{{ most_common.indexOf(word) + 1 }}. </span>{{ word.charAt(0).toUpperCase() + word.slice(1) }}<span v-if="hovered_word == word">: {{ album_dict[word] }}</span>
        </p>
      </div>

      <p class="text-5xl font-bold text-center mt-20">Comparisons</p>

      <div class="text-center mt-8">
        <p class="font-semibold text-4xl">I/Me vs. You vs. We/Us</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 mt-8">
          <div class="w-full">
            <Icon name="fa6-solid:user" class="w-full h-48 rounded-lg" color="red" />
            <p class="text-xl mt-2">I/Me (5,357 occurrences)</p>
          </div>

          <div class="w-full">
            <Icon name="fa6-solid:user" class="w-full h-48 rounded-lg" color="blue" />
            <p class="text-xl mt-2">You (2840 occurrences)</p>
          </div>

          <div class="full">
            <Icon name="fa6-solid:user-group" class="w-full h-48 rounded-lg" color="purple" />
            <p class="text-xl mt-2">We/Us (1,057 occurrences)</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <p class="font-semibold text-4xl">Love or Hate?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-1 mt-8">
          <div class="w-full">
            <Icon name="fa6-solid:heart" class="w-full h-48 rounded-lg" color="red" />
            <p class="text-xl">Love (945 occurrences)</p>
          </div>

          <div class="w-full">
            <Icon name="fa6-solid:heart-crack" class="w-full h-48 rounded-lg" color="red" />
            <p class="text-xl">Hate (25 occurrences)</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <p class="font-semibold text-4xl">Day or Night?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-1 mt-8">
          <div class="w-full">
            <Icon name="fa6-solid:sun" class="w-full h-48 rounded-lg" color="yellow" />
            <p class="text-xl mt-2">Day (160 occurrences)</p>
          </div>

          <div class="w-full">
            <Icon name="fa6-solid:moon" class="w-full h-48 rounded-lg" color="black" />
            <p class="text-xl mt-2">Night (433 occurrences)</p>
          </div>
        </div>
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
const accent_color = ref("");

const album = ref("none");
const album_dict = ref(all) 
const album_symbol = ref("")

const top_number = ref(10);
const hovered_word = ref("");
// const ed_hover = ref(false);


const most_common = computed(() => {
  return Object.keys(album_dict.value).slice(0, top_number.value)
})

watch (album, (val) => {
  set_background_color(val);
  switch (val) {
    case "Plus":
      album_dict.value = add;
      album_symbol.value = "+";
      break;
    case "Multiply":
      album_dict.value = multiply;
      album_symbol.value = "X";
      break;
    case "Divide":
      album_dict.value = divide;
      album_symbol.value = "÷";
      break;
    case "Equals":
      album_dict.value = equals;
      album_symbol.value = "=";
      break;
    case "Subtract":
      album_dict.value = subtract;
      album_symbol.value = "-";
      break;
    case "none":
      album_dict.value = all;
      album_symbol.value = "";
      accent_color.value = "";
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
