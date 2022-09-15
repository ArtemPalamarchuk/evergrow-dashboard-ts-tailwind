<script setup lang="ts">
import Tabs from "../../components/Tabs.vue";
import TopBar from "../../components/TopBar.vue";

import HomeTab from "./Tabs/Home.vue";
import CarbonTab from "./Tabs/Carbon.vue";
import FeedstocksTab from "./Tabs/Feedstocks.vue";
import OutputTab from "./Tabs/Output.vue";

const tabs = [
  {
    id: 'home',
    name: 'Home',
    tab: HomeTab,
  },
  {
    id: 'carbon',
    name: 'Carbon',
    tab: CarbonTab,
  },
  {
    id: 'feedstocks',
    name: 'Feedstocks',
    tab: FeedstocksTab,
  },
  {
    id: 'output',
    name: 'Output',
    tab: OutputTab,
  },
]

</script>

<template>
  <top-bar contentTitle="Markets"/>
  <Tabs :tabs="tabs" initialTabId="home"/>
</template>
