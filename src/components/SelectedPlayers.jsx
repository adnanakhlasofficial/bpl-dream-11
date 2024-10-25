import PropTypes from "prop-types";
import PlayerSelected from "./PlayerSelected";

const SelectedPlayers = ({ selectedPlayers }) => {
  return (
    <div className="my-12 space-y-6">
      {
        selectedPlayers.map(player => <PlayerSelected key={player.id} player={player}/>)
      }
    </div>
  );
};

SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array.isRequired
}

export default SelectedPlayers;
