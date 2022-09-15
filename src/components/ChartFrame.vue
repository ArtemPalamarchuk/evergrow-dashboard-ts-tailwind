<script setup lang="ts">
const {chartHash} = defineProps<{ chartHash: string }>()

const baseUrl = 'https://docs.google.com/spreadsheets/d/1JWIyBbaqaWrsM4KB8xyv-tXH-hN1LrysMkrJq5kTdgc/edit';
const frameSrc = baseUrl + `?rm=minimal#gid=` + chartHash
</script>

<template>
  <div>
    <iframe class="chart-frame" :src="frameSrc"></iframe>
  </div>
</template>

<style scoped>
  .chart-frame {
    @apply w-full h-full overflow-hidden;
  }
</style>