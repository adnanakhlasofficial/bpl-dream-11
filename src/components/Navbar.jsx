import dollar from "../img/coin.svg"

const Navbar = () => {
    return (
        <div className='wrapper flex justify-between items-center pt-8'>
            <div>
                <img src="./images/logo.webp" alt="logo" />
            </div>
            <div className="flex items-center gap-12">
                <ul className="flex gap-4">
                    <li><a className="nav-links" href="#">Home</a></li>
                    <li><a className="nav-links" href="#">Fixture</a></li>
                    <li><a className="nav-links" href="#">Teams</a></li>
                    <li><a className="nav-links" href="#">Schedules</a></li>
                </ul>
                <div>
                    <span className="balance">0 Coin <img src={dollar} alt="Dollar" /></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;