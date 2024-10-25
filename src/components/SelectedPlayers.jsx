import PropTypes from "prop-types";
import PlayerSelected from "./PlayerSelected";

const SelectedPlayers = ({ selectedPlayers, setActivity, removePlayer }) => {
  return (
    <div className="my-12 space-y-6">
      {
        selectedPlayers.map(player => <PlayerSelected key={player.id} removePlayer={removePlayer} player={player}/>)
      }

      <button onClick={()=> setActivity(true)} className="btn">Add More Player</button>
    </div>
  );
};

SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    setActivity: PropTypes.func,
    removePlayer: PropTypes.func
}

export default SelectedPlayers;
