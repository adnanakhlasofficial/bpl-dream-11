import PropTypes from "prop-types";
import trash from '../img/trash.svg';

const PlayerSelected = ({ player }) => {
  return (
    <div className="rounded-2xl border-2 p-6 flex items-center justify-between">
      <div className="flex gap-6 ">
        <div>
          <img className="h-20 w-20 rounded-2xl" src={player.image} alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-deep-black">
            {player.name}
          </h2>
          <p className="text-dark-gray">{player.category}</p>
        </div>
      </div>
      <div>
        <button><img src={trash} alt="" /></button>
      </div>
    </div>
  );
};

PlayerSelected.propTypes = {
  player: PropTypes.object.isRequired,
};

export default PlayerSelected;
