function Board({
  NO_PLAYER,
  TIE_PLAYER,
  PLAYER_1,
  PLAYER_2,
  X_CELLS,
  Y_CELLS,
}) {
  class Cell {
    constructor(x, y) {
      this.value = NO_PLAYER;
      this.x = x;
      this.y = y;
    }

    get taken() {
      return this.value !== NO_PLAYER;
    }
  }

  return class Board {
    constructor(cells) {
      this.cells =
        cells ||
        new Array(Y_CELLS)
          .fill()
          .map((e, y) =>
            new Array(X_CELLS).fill().map((e, x) => new Cell(x, y))
          );
    }

    getCell(x, y) {
      return this.cells[y][x];
    }

    getVal(x, y) {
      return this.getCell(x, y).value;
    }

    setCell(x, y, value) {
      this.getCell(x, y).value = value;
    }

    areFourConnected(player) {}

    get winner() {
      // horizontalCheck
      for (let j = 0; j < Y_CELLS - 3; j++) {
        for (let i = 0; i < X_CELLS; i++) {
          let player = this.getVal(i, j);
          if (
            player !== NO_PLAYER &&
            this.getVal(i, j + 1) === player &&
            this.getVal(i, j + 2) === player &&
            this.getVal(i, j + 3) === player
          ) {
            return player;
          }
        }
      }
      // verticalCheck
      for (let i = 0; i < X_CELLS - 3; i++) {
        for (let j = 0; j < Y_CELLS; j++) {
          let player = this.getVal(i, j);
          if (
            player !== NO_PLAYER &&
            this.getVal(i + 1, j) === player &&
            this.getVal(i + 2, j) === player &&
            this.getVal(i + 3, j) === player
          ) {
            return player;
          }
        }
      }
      // ascendingDiagonalCheck
      for (let i = 3; i < X_CELLS; i++) {
        for (let j = 0; j < Y_CELLS - 3; j++) {
          let player = this.getVal(i, j);
          if (
            player !== NO_PLAYER &&
            this.getVal(i - 1, j + 1) === player &&
            this.getVal(i - 2, j + 2) === player &&
            this.getVal(i - 3, j + 3) === player
          )
            return player;
        }
      }
      // descendingDiagonalCheck
      for (let i = 3; i < X_CELLS; i++) {
        for (let j = 3; j < Y_CELLS; j++) {
          let player = this.getVal(i, j);
          if (
            player !== NO_PLAYER &&
            this.getVal(i - 1, j - 1) === player &&
            this.getVal(i - 2, j - 2) === player &&
            this.getVal(i - 3, j - 3) === player
          )
            return player;
        }
      }
      // Tie
      if (
        this.cells.reduce(
          (rowCount, row) =>
            row.reduce(
              (cellCount, cell) => (cell.taken ? cellCount + 1 : cellCount),
              0
            ) === X_CELLS
              ? rowCount + 1
              : rowCount,
          0
        ) === Y_CELLS
      ) {
        return TIE_PLAYER;
      }
      return NO_PLAYER;
    }

    get gameOver() {
      return this.winner === PLAYER_1 || this.winner === PLAYER_2;
    }
  };
}

export default Board;
