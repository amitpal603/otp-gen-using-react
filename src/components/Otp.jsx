import React, { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";

function Otp() {
  const [otp, setOtp] = useState("");
  const otpRef = useRef(null)

  const genOtp = (size) => {
    let otp = "";
    let pass;
    for (let i = 1; i <= size; i++) {
      let gen = Math.floor(Math.random() * i +1);
      pass = otp += gen;
    }

    setOtp(pass);
    toast.success("OTP Generated Successfully");
  };

  const HandleCopy = () => {
   if(otp){
    window.navigator.clipboard?.readText(otp)
   otpRef.current?.select()
    toast.success('Copied')
   }
   else{
    toast.error('Please Generate OTP')
   }
  }
  return (
    <div className="h-screen bg-gray-500 flex justify-center items-center flex-col gap-20">
      <div className="h-40 w-150 border-2 shadow-lg shadow-purple-500 rounded-md flex justify-center gap-3 flex-col">
        <h1 className="text-center mb-7 text-2xl font-bold">OTP GENERATOR</h1>

        <div className="flex justify-center gap-7">
          <input
            type="text"
            readOnly={true}
            value={otp}
            ref={otpRef}
            className="outline-none border-2 h-10 w-40 rounded-md pl-3 text-white border-black"
          />
          <button
          onClick={HandleCopy}
          className=" hover:cursor-pointer h-10 w-30 bg-purple-400 shadow-lg shadow-purple-500 rounded-md hover:bg-purple-800">
            Copy
          </button>
        </div>
      </div>

      <button
        onClick={() => genOtp(6)}
        className=" transition-transform hover:scale-105 duration-300 hover:cursor-pointer bg-purple-400 px-9 py-3 rounded-md shadow-lg shadow-purple-500 hover:bg-purple-700"
      >
        OTP GEN
      </button>
    </div>
  );
}

export default Otp;
