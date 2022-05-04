import { describe, expect, it } from 'vitest'
import { initPuzzle } from 'composables/sudoku'

describe('Sudoku', () => {
  const holes = 20
  const { solvePuzzle, startingPuzzle, removeValues } = initPuzzle(holes)
  it('solvePuzzle should be safe', () => {
    const expectedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const boxMap = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]
    for (let i = 0; i < 9; i++) {
      // row
      expect(
        [...solvePuzzle[i]].sort((a, b) => a - b),
      ).toStrictEqual(expectedArr)

      // col
      expect(
        solvePuzzle.map(row => row[i]).sort((a, b) => a - b),
      ).toStrictEqual(expectedArr)

      // box
      const [row, col] = boxMap[0]
      expect(
        solvePuzzle
          .slice(row * 3, row * 3 + 3)
          .map(r => r.slice(col * 3, col * 3 + 3))
          .flat()
          .sort((a, b) => a - b),
      ).toStrictEqual(expectedArr)
    }
  })

  it('startingPuzzle zero count should be equal to holes', () => {
    let count = 0
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++)
        if (startingPuzzle[i][j] === 0) count++
    }

    expect(count).toBe(holes)
  })

  it('removeValues add to startingPuzzle should be equal to solvePuzzle', () => {
    for (const { row, col, val } of removeValues)
      startingPuzzle[row][col] = val

    expect(startingPuzzle).toStrictEqual(solvePuzzle)
  })
})
