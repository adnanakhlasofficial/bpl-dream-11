import PropTypes from "prop-types";

const Navbar = ({coin}) => {
    return (
        <div className='wrapper flex flex-col md:flex-row justify-between items-center pt-8 gap-6'>
            <div>
                <img src="./images/logo.webp" alt="logo" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <ul className="flex gap-4">
                    <li><a className="nav-links" href="#">Home</a></li>
                    <li><a className="nav-links" href="#">Fixture</a></li>
                    <li><a className="nav-links" href="#">Teams</a></li>
                    <li><a className="nav-links" href="#">Schedules</a></li>
                </ul>
                <div>
                    <span className="balance">{coin} Coin <img className="w-6" src="/images/coin.webp" alt="Dollar" /></span>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    coin: PropTypes.number.isRequired
}

export default Navbar;