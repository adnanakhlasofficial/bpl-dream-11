import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvailablePlayers from "./components/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers";

function App() {
  const [coin, setCoin] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // Claim Coin Function & Alert
  const claimCoin = () => {
    setCoin(coin + 6000000);
    toast.success("Credit Added to your Account", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Conditional Rendering button & Players Section
  const setActivity = (activity) => {
    setIsActive(activity);
  };

  return (
    <div className="wrapper">
      {/* Navbar */}
      <Navbar coin={coin} />
      {/* Banner */}
      <Banner claimCoin={claimCoin} />

      {/* Button */}
      <div className="mt-20 flex justify-between items-center">
        <div>
          {isActive ? <h1 className="section-title">Available Players</h1> : <h1 className="section-title">Selected Players</h1>}
        </div>

        <div>
          <button
            onClick={() => setActivity(true)}
            className={`${isActive ? "btn-selected" : "btn-not-selected"} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setActivity(false)}
            className={`${!isActive ? "btn-selected" : "btn-not-selected"} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>

      {/* Players Container */}
      {isActive ? <AvailablePlayers /> : <SelectedPlayers />}

      {/* React Toastify Container */}
      <ToastContainer />
    </div>
  );
}

export default App;
