import Newsletter from "./Newsletter";
import PropTypes from "prop-types";

const Footer = ({getMessage, storeMessage, message}) => {
  return (
    <div className="bg-navy-blue mt-72 pt-60">
      <div className="wrapper text-white relative">
        <Newsletter getMessage={getMessage} storeMessage={storeMessage} message={message}/>
        <div className="flex justify-center">
          <img src="/images/logo-footer.webp" alt="" />
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="max-w-72 space-y-4">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-desc">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-desc ml-12 list-disc space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="footer-title">Subscribe</h3>
              <p className="footer-desc">
                Subscribe to our newsletter for the latest updates.
              </p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl rounded-r-none border-none px-7 py-3 outline-none w-3/5"
              />
              <button className="btn rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 mt-20">
        <p className="footer-desc border-t-2 border-[#FFFFFF26] py-8 text-center">
          &copy;2024 BPL DREAM 11 All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  getMessage: PropTypes.func.isRequired,
  storeMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
}


export default Footer;
