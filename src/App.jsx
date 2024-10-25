import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvailablePlayers from "./components/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers";

function App() {
  const [coin, setCoin] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [playersList, setPlayersList] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

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

  // JSON data Fetch
  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayersList(data));
  }, []);

  // Choose Player
  const choosePlayer = (player) => {
    // finding exist player
    const exist = selectedPlayers.find(
      (singlePlayer) => singlePlayer.id === player.id,
    );

    if (selectedPlayers.length === 6) {
      toast.error("Can't Select more than 6 players", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (!exist) {
        if (player.hiring_price > coin) {
          toast.error("No Balance", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          // Balance deducted
          setCoin(coin - player.hiring_price);
          // Success alert
          toast.success(`${player.name} has been selected`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          // Selected Player updated
          const updatedPlayers = [...selectedPlayers, player];
          setSelectedPlayers(updatedPlayers);
        }
      } else {
        toast.error("Player has already been selected", {
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
    }
  };

  return (
    <div className="wrapper">
      {/* Navbar */}
      <Navbar coin={coin} />
      {/* Banner */}
      <Banner claimCoin={claimCoin} />

      {/* Button */}
      <div className="mt-20 flex items-center justify-between">
        <div>
          {isActive ? (
            <h1 className="section-title">Available Players</h1>
          ) : (
            <h1 className="section-title">Selected Players</h1>
          )}
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
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {/* Players Container */}
      {isActive ? (
        <AvailablePlayers
          playersList={playersList}
          choosePlayer={choosePlayer}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setActivity={setActivity}
        />
      )}

      {/* React Toastify Container */}
      <ToastContainer />
    </div>
  );
}

export default App;
