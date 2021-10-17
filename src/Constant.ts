export const TOTAL_ROWS = 6;
export const TOTAL_COLUMNS = 6;

export const GRID_INIT_STATE: number[][] = new Array(TOTAL_ROWS)
  .fill(0)
  .map(() => new Array(TOTAL_COLUMNS).fill(0));
