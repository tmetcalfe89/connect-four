import player1_tile from "../../assets/tiles/player1.svg"
import player2_tile from "../../assets/tiles/player2.svg"
import noplayer_tile from "../../assets/tiles/noplayer.svg"

export default function Cell({ cell, onClick, players }) {
  let tile;
  switch (cell.value) {
    case players.PLAYER_1:
      tile = player1_tile;
      break;
    case players.PLAYER_2:
      tile = player2_tile;
      break;
    default:
      tile = noplayer_tile;
  }

  return (
    <span
      className={`cell ${!cell.taken && "hidden"}`}
      onClick={onClick}
      x={cell.x}
      y={cell.y}
    >
      <img src={tile} alt={cell.value} />
    </span>
  );
}
