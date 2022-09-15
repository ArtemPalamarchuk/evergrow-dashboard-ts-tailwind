<script setup lang="ts">
const { contentTitle } = defineProps<{ contentTitle: string }>()
</script>

<template>
  <div class="top-bar-container">
    <h2 class="top-bar-title">
      {{ contentTitle }}
    </h2>
  </div>
</template>

<style scoped>
  .top-bar-container{
    @apply sticky top-0 z-[3] mb-6 bg-content;
  }
  .top-bar-title{
    @apply text-[22px] leading-6 font-bold;
  }
</style>


