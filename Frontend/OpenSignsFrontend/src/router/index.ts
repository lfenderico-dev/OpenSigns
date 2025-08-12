import { createRouter, createWebHistory } from 'vue-router'

import HeroSection from '@/view/HeroSection.vue'
import DashboardSection from '@/view/DashboardSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroSection,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardSection
    }
  ],
})

export default router
