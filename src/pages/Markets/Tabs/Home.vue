<script setup>
import ChartFrame from "../../../components/ChartFrame.vue";
import { marketsChartsHashes } from "../../../mocks/data";
</script>

<template>
  <chart-frame :chartHash="marketsChartsHashes.home"/>
</template>