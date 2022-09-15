<script setup lang="ts">
import {computed, ref} from 'vue'
import type {TabsInterface} from "../../types";

const {tabs, initialTabId} = defineProps<{
  tabs: TabsInterface,
  initialTabId: string,
}>()

const currentTabId = ref(initialTabId)

const setCurrentTab = (tabId: string): void => {
  currentTabId.value = tabId
}

const currentTab = computed(() => tabs.find((tab) => tab.id === currentTabId.value));

</script>

<template>
  <div class="tab-buttons-group">
    <button
      v-for="(tab) in tabs"
      :key="tab.id"
      :class="['tab-button', {active: currentTabId === tab.id}]"
      @click="setCurrentTab(tab.id)"
    >
      {{ tab.name }}
    </button>
  </div>
  <component :is="currentTab?.tab" class="active-tab"/>
</template>

<style scoped>
  .tab-button {
    @apply relative px-4 py-2 cursor-pointer ml-[-1px] text-[1rem]
    leading-5 text-inactive bg-content hover:bg-hover duration-300;
  }

  .tab-button.active {
    @apply bg-white text-black z-[2];
  }

  .tab-button.active:before {
    content: '';
    @apply absolute top-0 left-0 h-[2px] w-full bg-[green] rounded-t-[3px];
  }

  .tab-button.active:after {
    @apply hidden;
  }

  .tab-button:not(:last-child):after {
    content: "";
    @apply w-[1px] h-6 absolute right-0 top-1/2 -translate-y-1/2 bg-line z-[1];
  }

  .active-tab {
    @apply h-[calc(100%_-_84px)] bg-white ml-[-1px] p-4;
  }
</style>