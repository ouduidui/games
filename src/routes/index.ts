import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('~/pages/home.vue'),
  },
  {
    name: 'Sudoku',
    path: '/sudoku',
    component: () => import('~/pages/sudoku.vue'),
  },
  {
    name: 'Minesweeper',
    path: '/minesweeper',
    component: () => import('~/pages/minesweeper.vue'),
  },
  {
    name: 'Tetris',
    path: '/tetris',
    component: () => import('~/pages/tetris.vue'),
  },
  {
    name: '2048',
    path: '/2048',
    component: () => import('~/pages/2048.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((to) => {
  if (to.path !== '/')
    document.title = `${to.name as string} | Dewey Ou`

  return true
})

export default router
