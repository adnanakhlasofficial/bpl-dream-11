import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [coin, setCoin] = useState(0);

  const claimCoin = () => {
    setCoin(coin + 6000000);
    toast.success('Credit Added to your Account', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className="wrapper">
      {/* Navbar */}
      <Navbar coin={coin} />
      {/* Banner */}
      <Banner claimCoin={claimCoin}/>

      {/* React Toastify Container */}
      <ToastContainer />
    </div>
  );
}

export default App;
