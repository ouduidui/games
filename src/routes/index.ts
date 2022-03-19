import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/home.vue'
import about from '~/pages/about.vue'

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: about,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
