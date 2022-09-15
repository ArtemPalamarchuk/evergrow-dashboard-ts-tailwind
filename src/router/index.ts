import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../pages/Dashboard.vue')
    },
    {
      path: '/markets',
      name: 'markets',
      component: () => import('../pages/Markets/Markets.vue')
    },
    {
      path: '/scenarios',
      name: 'scenarios',
      component: () => import('../pages/Scenarios/Scenarios.vue')
    },
    {
      path: '/assets',
      name: 'assets',
      component: () => import('../pages/Assets.vue')
    },
    {
      path: '/positions',
      name: 'positions',
      component: () => import('../pages/Positions.vue')
    },
    {
      path: '/compliance',
      name: 'compliance',
      component: () => import('../pages/Compliance.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../pages/Reports.vue')
    },
  ]
})

export default router
