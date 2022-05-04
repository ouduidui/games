import { initPuzzle } from 'composables/sudoku'
import { reactive } from 'vue'

type LevelType = 'easy' | 'medium' | 'hard'

export const LEVELS: ({ level: LevelType; holes: number })[] = [
  { level: 'easy', holes: 37 },
  { level: 'medium', holes: 47 },
  { level: 'hard', holes: 56 },
]

export const initSudoku = (level: LevelType) => {
  const holes = LEVELS.find(item => item.level === level)!.holes
  const { solvePuzzle, startingPuzzle, removeValues } = initPuzzle(holes)
  const numButtons = reactive<{ num: number; remain: number }[]>(
    Array(9).fill(0).map((_, i) => ({ num: i + 1, remain: 0 })),
  )
  for (const { val } of removeValues)
    numButtons[val - 1].remain++

  return {
    numButtons,
    solvePuzzle,
    removeValues,
    startingPuzzle: reactive(startingPuzzle),
  }
}
