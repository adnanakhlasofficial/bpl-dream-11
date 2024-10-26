import PropTypes from "prop-types";

const Banner = ({ claimCoin }) => {
  return (
    <div className="wrapper">
      <div className=" mt-6 flex min-h-[34rem] w-full flex-col items-center justify-center gap-6 rounded-3xl bg-banner bg-cover text-center text-white px-3 py-6">
        <img src="./images/banner-main.webp" alt="Cricket_Logo" />
        <div className="flex flex-col gap-4">
          <h1 className="banner-title">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="desc text-light-gray">
            Beyond Boundaries Beyond Limits
          </p>
        </div>
        <button
          onClick={claimCoin}
          className="btn ring-2 ring-primary ring-offset-8 ring-offset-deep-black"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  claimCoin: PropTypes.func.isRequired,
};

export default Banner;
