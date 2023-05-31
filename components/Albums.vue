<template>
  <div>
    <p class="text-3xl text-center mt-10">Individual Albums</p>
    <div class="flex flex-row space-x-2 mdspace-x-8 columns-5 justify-center mt-2 w-full">
      <NuxtLink class="flex flex-col w-1/6" to="/plus">
        <img
          src="~/assets/images/add.jpg"
          class="transition ease-in-out hover:scale-105 rounded-xl"
        />
      </NuxtLink>
      <NuxtLink class="flex flex-col w-1/6" to="/multiply">
        <img
          src="~/assets/images/multiply.jpg"
          class="transition ease-in-out hover:scale-105 rounded-xl"
        />
      </NuxtLink>
      <NuxtLink class="flex flex-col w-1/6" to="/divide">
        <img
          src="~/assets/images/divide.jpg"
          class="transition ease-in-out hover:scale-105 rounded-xl"
        />
      </NuxtLink>
      <NuxtLink class="flex flex-col w-1/6" to="/equals">
        <img
          src="~/assets/images/equals.jpg"
          class="transition ease-in-out hover:scale-105 rounded-xl"
        />
      </NuxtLink>
      <NuxtLink class="flex flex-col w-1/6" to="/subtract">
        <img
          src="~/assets/images/subtract.jpg"
          class="transition ease-in-out hover:scale-105 rounded-xl"
        />
      </NuxtLink>
    </div>
  </div>
</template>