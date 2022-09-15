<script setup>
import NavMenu from "./NavMenu.vue"
</script>

<template>
  <router-link to="/" class="sidebar-title">
    Evergrow
  </router-link>
  <span class="divider"/>
  <nav-menu/>
</template>

<style scoped>
  .sidebar-title {
    @apply block text-white leading-6 text-[30px] mb-4 ml-6;
  }
  .divider{
    @apply block opacity-10 h-[1px] bg-white;
  }
</style>