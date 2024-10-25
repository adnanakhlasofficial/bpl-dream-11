const Newsletter = () => {
  return (
    <div className="wrapper bg-newsletter bg-white rounded-3xl border-2 bg-cover bg-center py-20 text-center space-y-6 absolute -top-[100%]">
      <div className="space-y-4">
        <h2 className="text-deep-black text-[2rem] font-bold">Subscribe to our Newsletter</h2>
        <p className="text-xl font-medium text-dark-gray">Get the latest updates and news right in your inbox!</p>
      </div>

      <div className="flex justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-xl border-2 border-light-gray px-7 py-3 w-1/3"
        />
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
