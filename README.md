# Cell Simulator Game

The "game" is a zero-player game, meaning that its evolution is determined by its initial state,
requiring no further input. One interacts with the Cell Simulator by creating an initial configuration
and observing how it evolves.

## Acceptance criteria

  At initial state, User should see an empty board.
  User can make Cells "alive".
  User can make Cells "dead".
  User can trigger "next generation".
  User can trigger a "reset" to the initial state.

## Next generation

  When the next generation is running:
      A Cell with fewer than two live neighbours dies of under-population.
      A Cell with 2 or 3 live neighbours lives on to the next generation.
      A Cell with more than 3 live neighbours dies of overcrowding.
      An empty Cell with exactly 3 live neighbours "comes to life".
      Cell who "comes to life" outside the board should wrap at the other side of the
      board.

Once the next generation is done, User can trigger "next generation" again.

## Clone the repo from github

### `git clone https://github.com/hareshaprajapati/cell-simulator-react.git`

## Install depenencies

First install the required depenencies

### `npm install`

## Run the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run the unit test cases

### `npm test`

## Run the end to end test cases

To run the e2e test cases first need to start the app

### `npm start`

then run below command it will launch the chrome browser and will do end to end test cases

### `npm run test:e2e`
