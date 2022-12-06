import { useCallback, useMemo, useState } from "react";
import useBoard from "./useBoard";

export const players = {
  one: 0,
  two: 1,
  empty: -1,
  tie: 2,
};

export const playerNames = {
  0: "Red",
  1: "Green",
}

export default function useGame(width, height) {
  const [
    board,
    changeCell,
    { getNextEmptyCellInColumn, getCell, isFull, reset },
  ] = useBoard(width, height, players.empty);
  const [currentPlayer, setCurrentPlayer] = useState(players.one);

  const winner = useMemo(() => {
    for (let j = 0; j < height - 3; j++) {
      for (let i = 0; i < width; i++) {
        let player = getCell(i, j);
        if (
          player !== players.empty &&
          getCell(i, j + 1) === player &&
          getCell(i, j + 2) === player &&
          getCell(i, j + 3) === player
        ) {
          return player;
        }
      }
    }
    // verticalCheck
    for (let i = 0; i < width - 3; i++) {
      for (let j = 0; j < height; j++) {
        let player = getCell(i, j);
        if (
          player !== players.empty &&
          getCell(i + 1, j) === player &&
          getCell(i + 2, j) === player &&
          getCell(i + 3, j) === player
        ) {
          return player;
        }
      }
    }
    // ascendingDiagonalCheck
    for (let i = 3; i < width; i++) {
      for (let j = 0; j < height - 3; j++) {
        let player = getCell(i, j);
        if (
          player !== players.empty &&
          getCell(i - 1, j + 1) === player &&
          getCell(i - 2, j + 2) === player &&
          getCell(i - 3, j + 3) === player
        )
          return player;
      }
    }
    // descendingDiagonalCheck
    for (let i = 3; i < width; i++) {
      for (let j = 3; j < height; j++) {
        let player = getCell(i, j);
        if (
          player !== players.empty &&
          getCell(i - 1, j - 1) === player &&
          getCell(i - 2, j - 2) === player &&
          getCell(i - 3, j - 3) === player
        )
          return player;
      }
    }
    // Tie
    if (isFull()) {
      return players.tie;
    }
    return players.empty;
  }, [getCell, height, width, isFull]);

  const switchPlayer = useCallback(() => {
    setCurrentPlayer((oldPlayer) => 1 - oldPlayer);
  }, []);

  const takeTurn = useCallback(
    (x) => {
      if (winner !== players.empty) {
        return;
      }

      const y = getNextEmptyCellInColumn(x);
      console.log(x, y, currentPlayer)
      changeCell(x, y, currentPlayer);

      switchPlayer();
    },
    [changeCell, currentPlayer, getNextEmptyCellInColumn, switchPlayer, winner]
  );

  return {
    board,
    takeTurn,
    winner,
    reset,
  };
}
