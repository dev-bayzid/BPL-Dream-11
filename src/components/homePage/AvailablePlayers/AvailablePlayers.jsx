import Player from "./Player";

const AvailablePlayers = ({ players }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-10">
      {players.map((player, index) => (
        <Player key={index} player={player}></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
