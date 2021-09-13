import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useConnectFourGame from "../../hooks/useConnectFourGame";
import Cell from "./Cell";

import "./Board.css";

export default function Board() {
  const { PLAYER_1, PLAYER_2, NO_PLAYER, board, takeTurn, resetGameState } = useConnectFourGame({
    notify: toast,
  });

  return (
    <>
      <div className="board">
        {board.cells.map((row, rowI) => (
          <div className="row" key={`row-${rowI}`}>
            {row.map((cell, cellI) => (
              <Cell
                cell={cell}
                key={`cell-${rowI}-${cellI}`}
                onClick={() => takeTurn(cellI, rowI)}
                players={{ PLAYER_1, PLAYER_2, NO_PLAYER }}
              />
            ))}
          </div>
        ))}
      </div>
      {board.gameOver && (
        <button className="reset" onClick={resetGameState}>
          Reset
        </button>
      )}
      <ToastContainer position="bottom-center" />
    </>
  );
}
