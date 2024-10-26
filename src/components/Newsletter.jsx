import { useEffect, useState } from "react";


const Newsletter = () => {
  const [message, setMessage] = useState('');

  const getMessage = (e) => {
      setMessage(e.target.value)
  }

  const storeMessage = () =>  {
    localStorage.setItem("message", message);
    alert("message stored")
  }

  useEffect(() => {
    const message = localStorage.getItem("message");
    setMessage(message);
  } ,[])

  return (
    <div className="wrapper px-2 lg:px-4 bg-newsletter bg-white rounded-3xl border-2 bg-cover bg-center py-16 lg:py-20 text-center space-y-6 absolute -top-[70%] lg:-top-[100%] !w-11/12 left-1/2 -translate-x-1/2">
      <div className="space-y-4">
        <h2 className="text-deep-black text-[2rem] font-bold">Subscribe to our Newsletter</h2>
        <p className="text-xl font-medium text-dark-gray">Get the latest updates and news right in your inbox!</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-xl border-2 border-light-gray px-7 py-3 w-full md:w-1/3 text-deep-black"
          onChange={getMessage}
          value={message}
          // onKeyUp={()=> console.log(message)}
        />
        <button onClick={storeMessage} className="btn">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
