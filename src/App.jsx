
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Newsletter from './component/Newsletter/Newsletter'
import Players from './component/Players/Players'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {

const[coins, setCoins] = useState(0);
const handleCoins = () =>{
  setCoins(coins+65000);
  toast.success("you claim 12000 coins")
}
  return (
    <>
    <Navbar coins={coins}></Navbar>
    <Banner handleCoins={handleCoins}></Banner>
    <Players></Players>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </>
  )
}

export default App
