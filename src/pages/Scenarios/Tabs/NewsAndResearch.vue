<script setup>
import ChartFrame from "../../../components/ChartFrame.vue";
import { scenariosChartsHashes } from "../../../mocks/data";
</script>

<template>
  <chart-frame :chartHash="scenariosChartsHashes.newsAndResearch"/>
</template>