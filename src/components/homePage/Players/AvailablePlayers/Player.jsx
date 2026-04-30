import { Flag, User } from "lucide-react";


const Player = ({ player }) => {
  console.log(player);
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={player.playerImg}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><User></User>{player.playerName}</h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2" >
            <span><Flag></Flag></span>
            <p>{player.playerCountry}</p>
          </div>
          <a className="btn ">{player.playerType}</a>
        </div>
        <p>Rating ({player.rating})</p>
        <div className="flex justify-between items-center">
            <p className="mr-35">{player.battingStyle}</p>
            <p>{player.bowlingStyle}</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="font-semibold">Price :{player.price}</p>
          <button className="btn">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
