import PropTypes from "prop-types";

const Newsletter = ({getMessage, storeMessage, message}) => {
  return (
    <div className="wrapper absolute -top-[70%] left-1/2 !w-11/12 -translate-x-1/2 space-y-6 rounded-3xl border-2 bg-white bg-newsletter bg-cover bg-center px-2 py-16 text-center lg:-top-[100%] lg:px-4 lg:py-20">
      <div className="space-y-4">
        <h2 className="text-[2rem] font-bold text-deep-black">
          Subscribe to our Newsletter
        </h2>
        <p className="text-xl font-medium text-dark-gray">
          Get the latest updates and news right in your inbox!
        </p>
      </div>

      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-xl border-2 border-light-gray px-7 py-3 text-deep-black md:w-1/3"
          onChange={getMessage}
          value={message}
          // onKeyUp={()=> console.log(message)}
        />
        <button onClick={storeMessage} className="btn">
          Subscribe
        </button>
      </div>

    </div>
  );
};

Newsletter.propTypes = {
  getMessage: PropTypes.func.isRequired,
  storeMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
}

export default Newsletter;
