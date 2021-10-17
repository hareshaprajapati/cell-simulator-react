import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('should validate cell classes', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
  const cell = screen.getByTestId('cell-0-0');
  expect(cell).toHaveClass('col');
  fireEvent.click(cell);
  expect(cell).toHaveClass('col selected-column');
});

test('should validate buttons', () => {
  render(<App />);
  const nextGenBtn = screen.getByTestId('nextGenBtn');
  const resetBtn = screen.getByTestId('resetBtn');
  // bydefault both the buttons should be disabled
  expect(nextGenBtn).toBeDisabled();
  expect(resetBtn).toBeDisabled();
  const cell = screen.getByTestId('cell-0-0');
  // after clicking on the cell both the buttons should be enabled
  fireEvent.click(cell);
  expect(nextGenBtn).toBeEnabled();
  expect(resetBtn).toBeEnabled();
  // by clicking on the reset button both the button should be disabled and cell have only col class 
  fireEvent.click(resetBtn);
  expect(cell).toHaveClass('col');
  expect(nextGenBtn).toBeDisabled();
  expect(resetBtn).toBeDisabled();
});
