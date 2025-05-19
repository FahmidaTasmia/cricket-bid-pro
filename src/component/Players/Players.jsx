import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = () => {
  const [players, setPlayers]=useState([]);

  useEffect(()=>{
    fetch('data.json')
          .then(res=>res.json())
          .then(data=>setPlayers(data))
  },[])
  return (
    <div>
      {/* available section */}
      <div className="flex justify-between items-center my-8 ">
          <h2 className="text-lg font-bold">Available Players</h2>
          <div className="flex text-sm font-semibold  overflow-hidden w-fit ">
          <button className="bg-[#e7fe29] text-black px-4 py-1 rounded-l-lg">
            Available
          </button>
          <button className="bg-white  px-4 py-1  rounded-r-lg border border-gray-200">
            Selected <span>(0)</span>
          </button>
        </div>
       </div>
       {/* playersCard */}

       <div className='grid grid-cols-3 gap-4'>
        {
        players.map(player=> <Player 
        key={player.playerId}
        player={player}
        
        >

        </Player>)

       }
       </div>
    </div>
  );
};

export default Players;