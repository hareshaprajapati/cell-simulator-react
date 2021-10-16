import React, { useState } from 'react';
import './App.css';

const gridInitState = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]];

const App = () => {

  const [grid, setGrid] = useState<number[][]>(JSON.parse(JSON.stringify(gridInitState)));

  const setConfig = (rowIndex: number, columnIndex: number) => {
    const gridCopy = JSON.parse(JSON.stringify(grid));
    gridCopy[rowIndex][columnIndex] = gridCopy[rowIndex][columnIndex] === 0 ? 1 : 0;
    setGrid(gridCopy);
  }

  const resetConfig = () => {
    setGrid(JSON.parse(JSON.stringify(gridInitState)));
  }

  const generateNext = () => {

  }

  return (
    <div className="app">
      <>
        {
          grid.map((row, rowIndex) => {
            return <div className="row" key={rowIndex}>
              {row.map((column, columnIndex) =>
                <div className={` ${grid[rowIndex][columnIndex] === 1 ? 'selected-column' : ''} col `} onClick={() => setConfig(rowIndex, columnIndex)}
                  key={`${rowIndex}+${columnIndex}`}>

                </div>
              )}
            </div>
          })
        }
      </>
      <div className="btn-container">
        <button className="btn next-generation-btn" onClick={generateNext}>Next Generation</button>
        <button className="btn reset-btn" onClick={resetConfig}>Reset</button>
      </div>
    </div >
  );
}

export default App;
