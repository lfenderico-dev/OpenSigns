<template>
  <div class="h-fit pb-20 bg-black/95">
    <div class="grid grid-cols-1 gap-12">
      <img class="w-full h-64 object-cover rounded-b-4xl" src="@/assets/photo/authBg.webp">
      <authForm/>

    </div>

  </div>
</template>

<script setup lang="ts">
import authForm from '@/components/authForm.vue';
</script>

<style scoped>

</style>
