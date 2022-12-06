import player1_tile from "../../assets/tiles/player1.svg"
import player2_tile from "../../assets/tiles/player2.svg"
import noplayer_tile from "../../assets/tiles/noplayer.svg"
import { useMemo } from "react";

export default function Cell({ cell, onClick, players }) {
  const tile = useMemo(() => {
    switch (cell) {
      case players.PLAYER_1:
        return player1_tile;
      case players.PLAYER_2:
        return player2_tile;
      default:
        return noplayer_tile;
    }
  }, [cell, players]);

  return (
    <span
      className={`cell ${cell === players.NO_PLAYER ? "hidden" : ""}`}
      onClick={onClick}
      x={cell.x}
      y={cell.y}
    >
      <img src={tile} alt={cell} />
    </span>
  );
}
