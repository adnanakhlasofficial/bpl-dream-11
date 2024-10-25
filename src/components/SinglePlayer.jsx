import user from "../img/user.svg";
import flag from "../img/flag.svg";
import PropTypes from "prop-types";

const SinglePlayer = ({ player, choosePlayer, isExist }) => {

  const {name, image, hiring_price, country, rating, batting_hand, bowling_style, category} = player;
  return (
    <div className="card">
      {/* Player Image */}
      <div className="mb-6">
        <img
          className="card-img"
          src={image}
          alt=""
        />
      </div>
      {/* Player Info */}
      <div className="space-y-4 border-b-2 pb-4">
        <h2 className="card-name-title">
          <img src={user} alt="User" /> {name}
        </h2>
        <div className="flex items-center justify-between">
          <p className="card-flag">
            <img src={flag} alt="flag" /> {country}
          </p>
          <p className="card-category">{category}</p>
        </div>
      </div>
      {/* Player Style */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="card-sub-desc">Rating</h3>
          <p className="card-sub-title">{rating}</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="card-sub-desc">{batting_hand}</h3>
          <p className="card-sub-title">{bowling_style === "N/A" ? "Unknown" : bowling_style}</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="card-sub-desc">Price </h3>
          <p className="card-sub-title">&#2547;{hiring_price}</p>
        </div>
        <button onClick={()=>{choosePlayer(player); isExist(player)}} className="card-btn">Choose Player</button>
      </div>
    </div>
  );
};

SinglePlayer.propTypes = {
    player: PropTypes.object.isRequired,
    choosePlayer: PropTypes.func,
    isExist: PropTypes.func

}

export default SinglePlayer;
