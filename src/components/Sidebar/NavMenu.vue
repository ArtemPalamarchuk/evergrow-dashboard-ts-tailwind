<script setup lang="ts">
import NavLink from "./NavLink.vue"

import DashboardIcon from '../../assets/images/views-icons/dashboard.svg'
import MarketsIcon from '../../assets/images/views-icons/markets.svg'
import ScenariosIcon from '../../assets/images/views-icons/scenarios.svg'
import AssetsIcon from '../../assets/images/views-icons/assets.svg'
import PositionsIcon from '../../assets/images/views-icons/positions.svg'
import ComplianceIcon from '../../assets/images/views-icons/compliance.svg'
import ReportsIcon from '../../assets/images/views-icons/reports.svg'

interface NavLink {
  id: string;
  icon?: string;
  name: string;
  to: string;
}

type NavInterface = NavLink[];

const nav: NavInterface = ([
  {
    id: 'dashboard',
    icon: DashboardIcon,
    name: 'Dashboard',
    to: '/dashboard',
  },
  {
    id: 'markets',
    icon: MarketsIcon,
    name: 'Markets',
    to: '/markets',
  },
  {
    id: 'scenarios',
    icon: ScenariosIcon,
    name: 'Scenarios',
    to: '/scenarios',
  },
  {
    id: 'assets',
    icon: AssetsIcon,
    name: 'Assets',
    to: '/assets',
  },
  {
    id: 'positions',
    icon: PositionsIcon,
    name: 'Positions',
    to: '/positions',
  },
  {
    id: 'compliance',
    icon: ComplianceIcon,
    name: 'Compliance',
    to: '/compliance',
  },
  {
    id: 'reports',
    icon: ReportsIcon,
    name: 'Reports',
    to: '/reports',
  }
]);


</script>

<template>
  <nav class="nav-menu">
    <nav-link
      v-for="{ name, icon, to, id } in nav"
      :id="id"
      :key="id"
      :icon="icon"
      :name="name"
      :to="to"
    />
  </nav>
</template>

<style scoped>
  .nav-menu {
    @apply w-full text-[1rem];
  }
</style>