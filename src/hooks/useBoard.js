import { useCallback, useState } from "react";

function generateBlankBoard(width, height, emptyValue) {
  const blankBoard = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    blankBoard.push(row);
    for (let x = 0; x < width; x++) {
      const cell = emptyValue;
      row.push(cell);
    }
  }
  return blankBoard;
}

export default function useBoard(width, height, emptyValue = -1) {
  const [board, setBoard] = useState(
    generateBlankBoard(width, height, emptyValue)
  );

  const getCell = useCallback(
    (x, y) => {
      if (x === undefined || y === undefined) {
        return false;
      }
      return board[y][x];
    },
    [board]
  );

  const changeCell = useCallback((x, y, value) => {
    setBoard((oldBoard) => {
      const clonedBoard = JSON.parse(JSON.stringify(oldBoard));
      clonedBoard[y][x] = value;
      return clonedBoard;
    });
  }, []);

  const isFull = useCallback(() => {
    return !board
      .flatMap((row) => row.map((e) => JSON.stringify(e)))
      .some((e) => e === JSON.stringify(emptyValue));
  }, [board, emptyValue]);

  const isColumnFull = useCallback(
    (x) => {
      if (x === undefined) {
        return false;
      }
      return !board
        .map((row) => JSON.stringify(row[x]))
        .some((e) => e === JSON.stringify(emptyValue));
    },
    [board, emptyValue]
  );

  const isRowFull = useCallback(
    (y) => {
      if (y === undefined) {
        return false;
      }
      return !board[y].some(
        (e) => JSON.stringify(e) === JSON.stringify(emptyValue)
      );
    },
    [board, emptyValue]
  );

  const getNextEmptyCellInColumn = useCallback(
    (x) => {
      if (x === undefined) {
        return false;
      }
      return board
        .map((row) => JSON.stringify(row[x]))
        .findLastIndex((e) => e === JSON.stringify(emptyValue));
    },
    [board, emptyValue]
  );

  const getNextEmptyCellInRow = useCallback(
    (y) => {
      if (y === undefined) {
        return false;
      }
      return board[y].findLastIndex(
        (e) => JSON.stringify(e) === JSON.stringify(emptyValue)
      );
    },
    [board, emptyValue]
  );

  const reset = useCallback(() => {
    setBoard(generateBlankBoard(width, height, emptyValue));
  }, [emptyValue, height, width]);

  return [
    board,
    changeCell,
    {
      reset,
      isFull,
      isColumnFull,
      isRowFull,
      getCell,
      getNextEmptyCellInColumn,
      getNextEmptyCellInRow,
    },
  ];
}
