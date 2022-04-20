export type RouteKey = keyof typeof _routes

const _routes = {
  index: {
    path: '/pages/index/index',
    name: 'Home',
  },
}

export const routes: Record<RouteKey, { path: string; name: string }> = _routes
