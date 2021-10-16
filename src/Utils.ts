import { TOTAL_COLUMNS, TOTAL_ROWS } from "./Constant";

/**
 * 0 0 0 0 0 0
 * 0 0 1 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 *
 * array[1][2] -> neighbours [0][1]    ,  [0][2] , [0][3]    , [1][1],   [1][3]  , [2][1]    , [2][2]  , [2][3]
 * array[i][j] -> neighbours [i-1][j-1], [i-1][j], [i-1][j+1], [i][j-1], [i][j+1], [i+1][j-1], [i+1][j], [i+1][j+1]
 */
export const countNeighbours = (i: number, j: number, grid: number[][]) => {
  let neighboursCount = 0;
  if (i - 1 >= 0 && j - 1 >= 0 && grid[i - 1][j - 1] === 1) {
    neighboursCount++;
  }
  if (i - 1 >= 0 && grid[i - 1][j] === 1) {
    neighboursCount++;
  }
  if (i - 1 >= 0 && j + 1 < TOTAL_COLUMNS && grid[i - 1][j + 1] === 1) {
    neighboursCount++;
  }
  if (j - 1 >= 0 && grid[i][j - 1] === 1) {
    neighboursCount++;
  }
  if (j + 1 < TOTAL_COLUMNS && grid[i][j + 1] === 1) {
    neighboursCount++;
  }
  if (i + 1 < TOTAL_ROWS && j - 1 >= 0 && grid[i + 1][j - 1] === 1) {
    neighboursCount++;
  }
  if (i + 1 < TOTAL_ROWS && grid[i + 1][j] === 1) {
    neighboursCount++;
  }
  if (i + 1 < TOTAL_ROWS && j + 1 < TOTAL_COLUMNS && grid[i + 1][j + 1] === 1) {
    neighboursCount++;
  }
  return neighboursCount;
};

export const arrayDeepCopy = (array: number[][]) =>
  JSON.parse(JSON.stringify(array));
