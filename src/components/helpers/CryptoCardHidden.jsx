import React from "react";
import { BiCheck, BiCheckCircle } from "react-icons/bi";
import image_1 from "../../assets/cryptocardhidden_1.png";

const CryptoCardHidden = () => {
  return (
    <div className="cursor-pointer hover:scale-105 ease-in-out transform transition duration-200 flex items-center justify-start p-3 mx-6 my-2 rounded-2xl space-x-5 bg-white bg-opacity-10 bg-transparent">
      <div className="w-32 h-20">
        <img
          className="rounded-xl h-full object-cover opacity-75"
          src={image_1}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start justify-center space-y-2">
        <h2 className="text-sm sm:text-lg text-gray-200 opacity-75">
          #1: But what is crypto and web3?
        </h2>
        <hr className="w-full border border-dotted opacity-50"></hr>
        <div className="flex items-center justify-evenly space-x-6">
          <p className="text-sm sm:text-base text-gray-300 opacity-75">
            11 Tasks
          </p>
          <div className="hidden sm:flex text-gray-300 opacity-75">
            ssssssssssssssssssssssssssssss
          </div>
          <BiCheckCircle className="text-gray-200 text-xl opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default CryptoCardHidden;
