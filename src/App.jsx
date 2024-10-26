import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvailablePlayers from "./components/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers";
import Footer from "./components/Footer";

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

    const playerList = JSON.parse(localStorage.getItem("playerList"));
    playerList && setSelectedPlayers(playerList);
    if (playerList.length > 0) {
      const balance = parseInt(localStorage.getItem("coin"));
      balance && setCoin(balance);
    }
  }, []);

  // Choose Player
  const choosePlayer = (player) => {
    // finding exist player
    const exist = selectedPlayers.find(
      (singlePlayer) => singlePlayer.id === player.id,
    );

    if (selectedPlayers.length === 6) {
      toast.error("Maximum players selected!", {
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
          toast.error(
            "Not enough money to buy this player. Claim some Credit.",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            },
          );
        } else {
          // Balance deducted
          const updateBalance = coin - player.hiring_price;
          setCoin(updateBalance);

          // Success alert
          toast.success(`Congrates!! ${player.name} is now in your Squad.`, {
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

          // Local storage
          const updatedPlayersString = JSON.stringify(updatedPlayers);
          localStorage.setItem("playerList", updatedPlayersString);

          // Local storage balance
          localStorage.setItem("coin", updateBalance);
        }
      } else {
        toast.error("Player already selected", {
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

  // Remove Player
  const removePlayer = (player) => {
    // Filter player after player removed
    const updatePlayers = selectedPlayers.filter(
      (singlePlayer) => singlePlayer.id !== player.id,
    );
    setSelectedPlayers(updatePlayers);
    // Local storage
    const updatedPlayersString = JSON.stringify(updatePlayers);
    localStorage.setItem("playerList", updatedPlayersString);
    const updateBalance = coin + player.hiring_price;
    setCoin(updateBalance);
    // Local storage balance
    localStorage.setItem("coin", updateBalance);
    toast.warn("Player removed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar coin={coin} />
      {/* Banner */}
      <Banner claimCoin={claimCoin} />

      {/* Button */}
      <div className="wrapper mt-20 flex items-center justify-between">
        <div>
          {isActive ? (
            <h1 className="section-title">Available Players</h1>
          ) : (
            <h1 className="section-title">
              Selected Players ({selectedPlayers.length}/6)
            </h1>
          )}
        </div>

        <div className="flex flex-col gap-4 sm:gap-0 md:flex-row">
          <button
            onClick={() => setActivity(true)}
            className={`${isActive ? "btn-selected" : "btn-not-selected"} sm:rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setActivity(false)}
            className={`${!isActive ? "btn-selected" : "btn-not-selected"} sm:rounded-l-none`}
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
          removePlayer={removePlayer}
        />
      )}

      <Footer />

      {/* React Toastify Container */}
      <ToastContainer />
    </>
  );
}

export default App;
