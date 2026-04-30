import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise }) => {
  const players = use(playerPromise);
  // console.log(players);

  const [selectedType, setSelectedType] = useState("available");

  return (
    <div>
      <div className="flex justify-between items-center gap-5 container mx-auto my-[50px]">
        {selectedType === "available" ? (
          <h2 className="text-3xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-3xl font-bold">Selected Players (2/30)</h2>
        )}
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              setSelectedType("available");
            }}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setSelectedType("selected");
            }}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers players={players}></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
