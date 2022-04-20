import type { RouteKey } from '~/router/routes'

export interface GameType {
  id: string
  name: string
  iconClass: string
  gradients: string[]
  routeKey?: RouteKey
}

export const games: GameType[] = [
  {
    id: 'sudoku',
    name: 'Sudoku',
    iconClass: 'i-arcticons-opensudoku',
    gradients: ['#ff7e5f', '#feb47b'],
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    iconClass: 'i-arcticons-minesweeper',
    gradients: ['#4ecdc4', '#556270'],
  },
  {
    id: 'tetris',
    name: 'Tetris',
    iconClass: 'i-arcticons-tetris',
    gradients: ['#f85032', '#e73827'],
  },
  {
    id: '2048',
    name: '2048',
    iconClass: 'i-arcticons-a2048',
    gradients: ['#56ab2f', '#a8e063'],
  },
]
