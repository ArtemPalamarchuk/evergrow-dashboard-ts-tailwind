<script setup lang="ts">

interface NavLink {
  id: string;
  icon?: string;
  name: string;
  to: string;
}

const {id, icon, name, to} = defineProps<NavLink>()
</script>

<template>
  <div class="nav-link-box">
    <img class="nav-link-img" :src="icon" :alt="name">
    <router-link class="nav-link" :to="to">
      {{ name }}
    </router-link>
  </div>
</template>

<style scoped>
  .nav-link-box {
    @apply flex items-center relative mx-3 mt-1 py-2 pr-3 rounded-lg duration-300 overflow-hidden hover:bg-link;
  }
  .nav-link {
    @apply flex items-center text-white absolute w-full h-full pl-12 active:bg-link;
  }
  .nav-link-img {
    @apply w-6 h-6 ml-3 z-1;
  }
</style>