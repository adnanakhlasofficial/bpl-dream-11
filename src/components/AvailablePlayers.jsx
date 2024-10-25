import PropTypes from "prop-types";
import SinglePlayer from "./SinglePlayer";

const AvailablePlayers = ({playersList, choosePlayer, isExist}) => {

  return (
    <div className="my-12 grid grid-cols-3 gap-6">
      {/* <SinglePlayer players={players}/> */}

      {
        playersList.map((player) => <SinglePlayer key={player.id} isExist={isExist} choosePlayer={choosePlayer} player={player}/>)
      }
    </div>
  );
};

AvailablePlayers.propTypes = {
    playersList: PropTypes.array.isRequired,
    choosePlayer: PropTypes.func,
    isExist: PropTypes.func
}

export default AvailablePlayers;
