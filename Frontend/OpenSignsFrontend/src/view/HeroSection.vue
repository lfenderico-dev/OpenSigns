<template>
  <div class="h-[100vh] bg-[url('@/assets/photo/backgroundHero.jpg')] bg-cover bg-center flex flex-col pt-30 md:pt-15 2xl:pt-24 lg:pr-66 xl:pr-74 2xl:pr-160">
    <h1 class="text-white mx-6 sm:mx-14 lg:mx-8 2xl:mr-0 text-center pb-4 text-3xl md:text-4xl lg:text-6xl 2xl:text-8xl">Unlock a <strong class="text-green-600 font-bold">new way to connect</strong>, <strong class="text-green-600 font-bold">express</strong>, and <strong class="text-green-600 font-bold">understand others</strong></h1>

    <p class="text-white text-center mx-6 sm:mx-14 lg:mx-30 2xl:mr-0 text-[10px] md:text-[12px] lg:text-sm 2xl:text-lg">Learn sign language with clarity and purpose. Build real connections, express yourself fully, and understand others in a more meaningful way.</p>

    <router-link class="m-8 p-4 md:p-6 lg:p-8 2xl:p-12 lg:mr-55 lg:ml-55 bg-green-700 text-white md:text-lg lg:text-xl 2xl:text-3xl font-bold rounded-xl shadow-2xl shadow-green-900 text-center transition active:scale-120 active:translate-y-4 hover:-translate-y-2" to="/dashboard">
      <button>Start now!</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
