import { createRouter, createWebHistory } from 'vue-router'
import FirstPageVue from '@/views/FirstPage.vue'
import SecondaryPageVue from '@/views/SecondaryPage.vue'
import ErrorVue from '@/views/Error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstPageVue
    },
    {
      path: '/secondary_page',
      name: 'second_page',
      component: SecondaryPageVue
    },
    {
      path: '/:catchAll(.*)*',
      name : 'PageNotFound',
      component : ErrorVue
    }
  ]
})

export default router
