export type RouteKey = keyof typeof _routes

const _routes = {
  index: {
    path: '/pages/index/index',
    name: 'Home',
  },
  sudoku: {
    path: '/pages/sudoku/index',
    name: 'Sudoku',
  },
}

export const routes: Record<RouteKey, { path: string; name: string }> = _routes
