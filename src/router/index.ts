import { createRouter, createWebHistory } from 'vue-router'
import FirstPageVue from '@/views/FirstPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstPageVue
    },
  ]
})

export default router
