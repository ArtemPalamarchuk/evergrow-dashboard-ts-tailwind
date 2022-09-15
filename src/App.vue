<script setup>
import Sidebar from "./components/Sidebar/Sidebar.vue";
</script>

<template>
  <div class="sidebar">
    <sidebar/>
  </div>
  <div class="content">
    <router-view/>
  </div>
</template>

<style scoped>
  .sidebar {
    @apply basis-[theme(spacing.sidebar)] shrink-0 pt-6 bg-main;
  }

  .content {
    @apply w-full h-screen overflow-hidden p-5 bg-content;
  }
</style>