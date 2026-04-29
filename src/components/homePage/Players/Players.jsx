import { use } from "react";


const Players = ({playerPromise}) => {
    const players = use(playerPromise);
    console.log(players);
    return (
        <div>
            
        </div>
    );
};

export default Players;