import type { RouteKey } from '~/router/routes'

export interface GameType {
  id: string
  name: string
  iconClass: string
  gradients: string[]
  routeKey?: RouteKey
}
