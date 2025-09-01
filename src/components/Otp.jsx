import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function Otp() {
  const [otp, setOtp] = useState("");
  const otpRef = useRef(null);

  // OTP Generator
  const genOtp = (size) => {
    let otp = "";
    for (let i = 0; i < size; i++) {
      let gen = Math.floor(Math.random() * 10); // random digit 0–9
      otp += gen;
    }
    setOtp(otp);
    toast.success("OTP Generated Successfully");
  };

  // Copy Handler
  const HandleCopy = () => {
    if (otp) {
      navigator.clipboard.writeText(otp);
      toast.success("Copied");
    } else {
      toast.error("Please Generate OTP");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-500 to-gray-800 flex justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md border-2 border-purple-400 shadow-lg shadow-purple-700 rounded-2xl p-6 bg-white flex flex-col gap-6"
      >
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-purple-700">
          OTP GENERATOR
        </h1>

        {/* Input + Copy Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            readOnly
            value={otp}
            ref={otpRef}
            className="outline-none border-2 h-12 w-full sm:w-48 rounded-md px-3 text-black border-gray-400 text-lg text-center"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={HandleCopy}
            className="h-12 w-full sm:w-28 bg-purple-500 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition-colors"
          >
            Copy
          </motion.button>
        </div>

        {/* Generate Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => genOtp(6)}
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-purple-800 transition-colors"
        >
          Generate OTP
        </motion.button>
      </motion.div>
    </div>
  );
}
export default Otp;
