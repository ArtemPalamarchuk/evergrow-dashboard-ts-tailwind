<script setup>
import Tabs from "../../components/Tabs.vue";
import TopBar from "../../components/TopBar.vue";

import PriceForecasts from "./Tabs/PriceForecasts.vue";
import KeyDrivers from "./Tabs/KeyDrivers.vue";
import Assumptions from "./Tabs/Assumptions.vue";
import NewsAndResearch from "./Tabs/NewsAndResearch.vue";

const tabs = [
  {
    id: 'price_forecasts',
    name: 'Price forecasts',
    tab: PriceForecasts,
  },
  {
    id: 'key_drivers',
    name: 'Key drivers',
    tab: KeyDrivers,
  },
  {
    id: 'assumptions',
    name: 'Assumptions',
    tab: Assumptions,
  },
  {
    id: 'news_and_research',
    name: 'News and Research',
    tab: NewsAndResearch,
  },
]
</script>

<template>
  <top-bar contentTitle="Scenarios"/>
  <Tabs :tabs="tabs" initialTabId="price_forecasts"/>
</template>
