<template>
  <div class="h-fit flex flex-col gap-6 mx-auto py-8 px-8 bg-transparent shadow-2xl shadow-black text-white rounded-2xl">
    <div class="flex flex-row gap-4 justify-center text-xl font-bold">
      <button :class="['', page == 'login' || page == null ? 'underline': 'no-underline']" @click="page = 'login'">LogIn</button>
      <span>|</span>
      <button :class="['', page == 'signup' ? 'underline': 'no-underline']" @click="page = 'signup'">SignUp</button>
    </div>

    <hr class="mx-auto w-full h-4 bg-green-800 border-0 rounded-sm">

    <!-- Log in form -->
    <div v-if="page == 'login' || page == null" class="flex flex-col gap-6">
      <div class="flex flex-row items-center gap-2">
        <label for="loginUsername"><i class="fa-solid fa-users"></i></label>
        <input class="focus:outline-0 p-2 text-lg" placeholder="Username" type="text" id="loginUsername" name="loginUsername">
      </div>

      <div class="flex flex-row items-center gap-2">
        <label for="loginEmail"><i class="fa-solid fa-envelope"></i></label>
        <input class="focus:outline-0 p-2 text-lg" placeholder="Email" type="text" id="loginEmail" name="loginEmail">
      </div>


      <div class="flex flex-row items-center gap-2">
        <label for="loginPassword"><i class="fa-solid fa-lock"></i></label>
        <input class="focus:outline-0 p-2 text-lg" placeholder="Password" type="text" id="loginPassword" name="loginPassword">
      </div>

      <button class="mx-auto py-4 px-12 bg-green-700 text-xl font-bold" type="submit">Join now</button>
    </div>

    <div v-if="page == 'signup'" class="flex flex-col gap-6">
      <div class="flex flex-row items-center gap-2">
        <label for="signupUsername"><i class="fa-solid fa-users"></i></label>
        <input class="focus:outline-0 p-2 text-lg" placeholder="Username" type="text" id="signupUsername" name="signupUsername">
      </div>

      <div class="flex flex-row items-center gap-2">
        <label for="signupEmail"><i class="fa-solid fa-envelope"></i></label>
        <input class="focus:outline-0 p-2 text-lg" placeholder="Email" type="text" id="signupEmail" name="signupEmail">
      </div>

      <div class="flex flex-row items-center gap-2">
        <label for="signupPswd"><i class="fa-solid fa-lock"></i></label>
        <input class="focus:outline-0 p-2 text-lg" placeholder="Password" type="text" id="signupPswd" name="signupPswd">
      </div>

      <button class="mx-auto py-4 px-8 bg-green-700 text-xl font-bold" type="submit">Welcome back</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const page = ref<string | null>(null)
</script>

<style scoped>

</style>
