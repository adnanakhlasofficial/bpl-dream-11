import PropTypes from "prop-types";
import SinglePlayer from "./SinglePlayer";

const AvailablePlayers = ({playersList, choosePlayer}) => {

  return (
    <div className="wrapper my-12 grid grid-cols-3 gap-6">
      {/* <SinglePlayer players={players}/> */}

      {
        playersList.map((player) => <SinglePlayer key={player.id} choosePlayer={choosePlayer} player={player}/>)
      }
    </div>
  );
};

AvailablePlayers.propTypes = {
    playersList: PropTypes.array.isRequired,
    choosePlayer: PropTypes.func
}

export default AvailablePlayers;
