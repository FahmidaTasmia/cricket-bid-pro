import React, { useState } from 'react';
import './App.css';
import Banner from './component/Banner/Banner';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Newsletter from './component/Newsletter/Newsletter';
import Players from './component/Players/Players';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleCoins = () => {
    setCoins(coins + 65000);
    toast.success("You claimed 65,000 coins!");
  };

  const handleSelectPlayer = (player) => {
  const alreadySelected = selectedPlayers.find(p => p.playerId === player.playerId);

  if (alreadySelected) {
    toast.warning("This player is already selected!");
    return;
  }

  if (coins < player.biddingPrice) {
    toast.error(`Not enough coins! You need ${player.biddingPrice} coins.`);
    return;
  }

  setSelectedPlayers([...selectedPlayers, player]);
  setCoins(coins - player.biddingPrice);
  toast.success(`${player.name} selected! -${player.biddingPrice} coins`);
};

  return (
    <>
      <Navbar coins={coins} />
      <Banner handleCoins={handleCoins} />
      <Players
        onSelect={handleSelectPlayer}
        selectedCount={selectedPlayers.length}
      />
      <Newsletter />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
