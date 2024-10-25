import PropTypes from "prop-types";
import SinglePlayer from "./SinglePlayer";

const AvailablePlayers = ({playersList}) => {

  return (
    <div className="my-12 grid grid-cols-3 gap-6">
      {/* <SinglePlayer players={players}/> */}

      {
        playersList.map((player) => <SinglePlayer key={player.id} player={player}/>)
      }
    </div>
  );
};

AvailablePlayers.propTypes = {
    playersList: PropTypes.array.isRequired
}

export default AvailablePlayers;
