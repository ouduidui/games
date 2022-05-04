export type SudokuNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type SudokuNumberWithEmply = SudokuNumber | 0

export type SudokuType<T> = [
  [T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T],
]

const NUMS: Readonly<SudokuNumber[]> = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const shuffle = <T = SudokuNumber>(arr: T[]): T[] => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) >> 0;
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/**
 * Check if Location Safe
 */

const rowSafe = (
  puzzle: SudokuType<SudokuNumberWithEmply>,
  row: number,
  num: SudokuNumber,
): boolean => {
  return puzzle[row].every(n => n !== num)
}

const colSafe = (
  puzzle: SudokuType<SudokuNumberWithEmply>,
  col: number,
  num: SudokuNumber,
): boolean => {
  return puzzle.map(row => row[col]).every(n => n !== num)
}

const boxSafe = (
  puzzle: SudokuType<SudokuNumberWithEmply>,
  row: number,
  col: number,
  num: SudokuNumber,
): boolean => {
  const boxRow = Math.floor(row / 3)
  const boxCol = Math.floor(col / 3)
  const box = puzzle.slice(boxRow * 3, boxRow * 3 + 3)
  return box.every(row => row.slice(boxCol * 3, boxCol * 3 + 3).every(n => n !== num))
}

const safeToPlace = (
  puzzle: SudokuType<SudokuNumberWithEmply>,
  row: number,
  col: number,
  num: SudokuNumber,
): boolean => {
  return rowSafe(puzzle, row, num)
   && colSafe(puzzle, col, num)
   && boxSafe(puzzle, row, col, num)
}

/**
 * Obtain Next Empty Cell
 */

const nextEmptyCell = (
  puzzle: SudokuType<SudokuNumberWithEmply>,
): { row: number; col: number } | false => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (puzzle[row][col] === 0) {
        return {
          row,
          col,
        }
      }
    }
  }

  return false
}

/**
 * Generate Filled Board
 */

let count = 0
const fillPuzzle = (
  puzzle: SudokuType<SudokuNumberWithEmply> = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
): SudokuType<SudokuNumber> | false => {
  const emptyCell = nextEmptyCell(puzzle)
  if (!emptyCell) return puzzle as SudokuType<SudokuNumber>

  for (const num of shuffle([...NUMS])) {
    count++
    if (count > 20000000)
      throw new Error('Recursion Timeout')

    if (safeToPlace(puzzle, emptyCell.row, emptyCell.col, num)) {
      puzzle[emptyCell.row][emptyCell.col] = num

      if (fillPuzzle(puzzle)) return puzzle as SudokuType<SudokuNumber>

      puzzle[emptyCell.row][emptyCell.col] = 0
    }
  }

  return false
}

/**
 * Generate Playable Board
 */

interface removeType {
  row: number
  col: number
  val: SudokuNumber
}

const pokeHoles = (
  puzzle: SudokuType<SudokuNumberWithEmply>,
  holes: number,
): {
  removeValues: removeType[]
  startingPuzzle: SudokuType<SudokuNumberWithEmply>
} => {
  const removeValues: removeType[] = []
  while (removeValues.length < holes) {
    const row = Math.floor(Math.random() * 9)
    const col = Math.floor(Math.random() * 9)

    if (puzzle[row][col] === 0) continue

    removeValues.push({ row, col, val: puzzle[row][col] as SudokuNumber })
    puzzle[row][col] = 0

    const proposedPuzzle = puzzle.map(row => row.slice()) as SudokuType<SudokuNumberWithEmply>
    if (!fillPuzzle(proposedPuzzle))
      puzzle[row][col] = removeValues.pop()!.val
  }

  return {
    removeValues,
    startingPuzzle: puzzle,
  }
}

/**
 * Initialize
 */
export const initPuzzle = (holes: number): {
  removeValues: removeType[]
  startingPuzzle: SudokuType<SudokuNumberWithEmply>
  solvePuzzle: SudokuType<SudokuNumber>
} => {
  try {
    count = 0
    const solvePuzzle = fillPuzzle()!
    if (!solvePuzzle) return initPuzzle(holes)

    const { startingPuzzle, removeValues } = pokeHoles(
      solvePuzzle.map(row => row.slice()) as SudokuType<SudokuNumberWithEmply>,
      holes,
    )

    return {
      solvePuzzle,
      startingPuzzle,
      removeValues,
    }
  }
  catch (err) {
    return initPuzzle(holes)
  }
}
