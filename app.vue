<template>
  <div class="transition duration-300 h-full min-h-screen" :class="background_color">
    <div class="w-full md:w-3/4 lg:w-1/2 2xl:w-1/3 py-10 px-4 mx-auto">
      <p class="text-7xl font-bold text-center">Ed-nalysis</p>
      <div class="flex flex-row space-x-2 mdspace-x-8 columns-5 justify-center mt-16 w-full">
        <div class="flex flex-col w-1/6" @mouseover="background_color = 'bg-[#d67a3e]'" @mouseleave="background_color = 'bg-white'">
          <img src="~/assets/images/add.jpg" class="rounded-xl" />
        </div>
        <div class="flex flex-col w-1/6" @mouseover="background_color = 'bg-[#1dcb57]'" @mouseleave="background_color = 'bg-white'">
          <img src="~/assets/images/multiply.jpg" class="rounded-xl" />
        </div>
        <div class="flex flex-col w-1/6" @mouseover="background_color = 'bg-[#65c9e6]'" @mouseleave="background_color = 'bg-white'">
          <img src="~/assets/images/divide.jpg" class="rounded-xl" />
        </div>
        <div class="flex flex-col w-1/6" @mouseover="background_color = 'bg-[#cc2c34]'" @mouseleave="background_color = 'bg-white'">
          <img src="~/assets/images/equals.jpg" class="rounded-xl" />
        </div>
        <div class="flex flex-col w-1/6" @mouseover="background_color = 'bg-[#f4d811]'" @mouseleave="background_color = 'bg-white'">
          <img src="~/assets/images/subtract.jpg" class="rounded-xl" />
        </div>
      </div>

      <div class="flex flex-row mt-10">
        <Transition name="fade">
          <div v-if="ed_hover" class="flex flex-col w-1/5 scale-150"> 
            <img src="~/assets/images/left.jpg" class="transition ease-in-out scale-150 rounded-xl mt-16 -rotate-[30deg] translate-y-20 -translate-x-8" />
          </div>
        </Transition>
        <div class="flex flex-col w-3/5 z-50 justify-center mx-auto scale-125"> 
          <img src="~/assets/images/hero.jpg" class="transition ease-in-out hover:scale-105 rounded-xl mt-16" @mouseover="ed_hover = true" @mouseleave="ed_hover = false" />
        </div>
        <Transition name="fade">
          <div v-if="ed_hover" class="flex flex-col w-1/5 scale-150"> 
            <img src="~/assets/images/right.jpg" class="transition ease-in-out scale-150 rounded-xl mt-16 rotate-[30deg] translate-y-20 translate-x-8" />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
const background_color = ref('bg-white');
const ed_hover = ref(false);
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

* {
  font-family: 'Lato', sans-serif;
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