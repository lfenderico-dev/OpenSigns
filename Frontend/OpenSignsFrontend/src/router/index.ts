import { createRouter, createWebHistory } from 'vue-router'

import HeroSection from '@/view/HeroSection.vue'
import LogSignInSection from '@/view/LogSignInSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroSection,
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: LogSignInSection
    }
  ],
})

export default router
