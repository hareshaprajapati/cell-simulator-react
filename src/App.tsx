import React, { useState } from 'react';
import './App.css';
import { GRID_INIT_STATE } from './Constant';
import { arrayDeepCopy, countNeighbours } from './Utils';

const App = () => {

  const [grid, setGrid] = useState<number[][]>(arrayDeepCopy(GRID_INIT_STATE));

  // when user click on the div set grid's value 1 or 0 depends on current value
  const setConfig = (rowIndex: number, columnIndex: number) => {
    const gridCopy = arrayDeepCopy(grid);
    gridCopy[rowIndex][columnIndex] = gridCopy[rowIndex][columnIndex] === 0 ? 1 : 0;
    setGrid(gridCopy);
  }

  const resetConfig = () => {
    setGrid(arrayDeepCopy(GRID_INIT_STATE));
  }

  const generateNext = () => {
    const gridCopy = arrayDeepCopy(grid);

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const neighboursCount = countNeighbours(i, j, grid);
        if (gridCopy[i][j] === 1) {
          // A Cell with fewer than two live neighbours dies of under-population.
          if (neighboursCount < 2) {
            gridCopy[i][j] = 0;
          }
          // A Cell with 2 or 3 live neighbours lives on to the next generation. 
          if (neighboursCount === 2 || neighboursCount === 3) {
            gridCopy[i][j] = 1;
          }
          // A Cell with more than 3 live neighbours dies of overcrowding.
          if (neighboursCount > 3) {
            gridCopy[i][j] = 0;
          }
        }
        // An empty Cell with exactly 3 live neighbours comes to life.
        if (gridCopy[i][j] === 0 && neighboursCount === 3) {
          gridCopy[i][j] = 1;
        }
      }
    }
    setGrid(gridCopy);
  }

  const canGenerateNext = grid.some(row => row.includes(1));

  return (
    <div className="app">
      <div className="grid">
        {
          grid.map((row, rowIndex) => {
            return <div className="row" key={rowIndex}>
              {row.map((column, columnIndex) =>
                <div data-testid={`cell-${rowIndex}-${columnIndex}`} className={`col ${grid[rowIndex][columnIndex] === 1 ? 'selected-column' : ''}`} onClick={() => setConfig(rowIndex, columnIndex)}
                  key={`${rowIndex}-${columnIndex}`} />
              )}
            </div>
          })
        }
      </div>
      <div className="btn-container">
        <button data-testid="nextGenBtn" disabled={!canGenerateNext} className={`btn next-generation-btn ${!canGenerateNext ? 'disable-btn' : 'active-btn'} `} onClick={generateNext}>Next Generation</button>
        <button data-testid="resetBtn" disabled={!canGenerateNext} className={`btn reset-btn ${!canGenerateNext ? 'disable-btn' : 'active-btn'} `} onClick={resetConfig}>Reset</button>
      </div>
    </div >
  );
}

export default App;


