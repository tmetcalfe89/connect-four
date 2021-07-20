import Board from "../components/ConnectFour/Board";
import SeeMe from "../components/SeeMe";

export default function ConnectFour({ location }) {
  return (
    <>
      <SeeMe location={location} />
      <Board />
    </>
  );
}
