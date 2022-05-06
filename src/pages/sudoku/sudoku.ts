import type { SudokuNumberWithEmply, SudokuType, removeType } from 'composables/sudoku'
import { initPuzzle } from 'composables/sudoku'
import { reactive } from 'vue'
import type { SudokuNumber } from './../../composables/sudoku'

type LevelType = 'easy' | 'medium' | 'hard'

export const LEVELS: ({ level: LevelType; holes: number })[] = [
  { level: 'easy', holes: 37 },
  { level: 'medium', holes: 47 },
  { level: 'hard', holes: 56 },
]

export interface PuzzleType {
  isLock: boolean
  notes: SudokuNumber[]
  val: SudokuNumberWithEmply
  ans: SudokuNumber
}

const puzzle = ref<SudokuType<PuzzleType> | null>(null)

const genPuzzle = (
  startingPuzzle: SudokuType<SudokuNumberWithEmply>,
  removeValues: removeType[],
) => {
  const localPuzzle: PuzzleType[][] = new Array(9).fill(0).map(() => new Array(9).fill(0))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = startingPuzzle[i][j]
      localPuzzle[i][j] = {
        isLock: val !== 0,
        notes: [],
        val,
        ans: val === 0
          ? removeValues.find(item => item.row === i && item.col === j)!.val
          : val,

      }
    }
  }

  puzzle.value = localPuzzle as SudokuType<PuzzleType>
}

const numButtons = reactive(
  Array(9).fill(0).map((_, i) => ({ num: i + 1, remain: 0 })),
) as { num: SudokuNumber; remain: number }[]

export const initSudoku = (level: LevelType) => {
  const holes = LEVELS.find(item => item.level === level)!.holes
  const { startingPuzzle, removeValues } = initPuzzle(holes)

  for (const btn of numButtons)
    btn.remain = 0
  for (const { val } of removeValues)
    numButtons[val - 1].remain++

  genPuzzle(startingPuzzle, removeValues)

  return {
    numButtons,
    puzzle: puzzle!,
    startingPuzzle: reactive(startingPuzzle),
  }
}

export const activeNumBtn = ref<SudokuNumber | 0>(0)

export const numBtnTapHandle = (numOrClear: SudokuNumber | 'clear') => {
  if (typeof numOrClear === 'number')
    activeNumBtn.value = activeNumBtn.value === numOrClear ? 0 : numOrClear
}
