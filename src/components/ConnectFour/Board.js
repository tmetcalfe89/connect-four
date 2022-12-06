import {useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import useGame, {players, playerNames} from "../../hooks/useGame";
import Cell from "./Cell";

import "react-toastify/dist/ReactToastify.css";
import "./Board.css";

export default function Board() {
  const { board, takeTurn, winner, reset } = useGame(7, 6);

  useEffect(() => {
    if (winner === players.empty) return;
    toast(`${playerNames[winner]} has won!`);
  }, [winner]);

  function resetGame() {
    reset();
    toast("Game reset")
  }

  return (
    <>
      <div className="board">
        {board.map((row, rowI) => (
          <div className="row" key={`row-${rowI}`}>
            {row.map((cell, cellI) => (
              <Cell
                cell={cell}
                key={`cell-${rowI}-${cellI}`}
                onClick={() => takeTurn(cellI)}
                players={{ PLAYER_1: players.one, PLAYER_2: players.two, NO_PLAYER: players.empty }}
              />
            ))}
          </div>
        ))}
      </div>
      {winner !== players.empty && (
        <button className="reset" onClick={resetGame}>
          New Game
        </button>
      )}
      <ToastContainer position="bottom-center" />
    </>
  );
}
