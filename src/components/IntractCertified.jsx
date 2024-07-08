import React from "react";
import { BiCheck, BiCheckCircle, BiLock } from "react-icons/bi";

const IntractCertified = ({img}) => {
  return (
    <div className="text-white flex items-start justify-center flex-col">
      <div className="cursor-pointer hover:scale-110 ease-in-out transform transition duration-200 relative w-32 lg:w-44 p-1.5 border border-opacity-10 rounded-3xl">
        <img
          className="rounded-2xl w-full object-cover"
          src={img}
          alt=""
        />
        <div className="absolute -right-3 -bottom-3 border rounded-full p-3 bg-gray-900 opacity-90">
          <BiLock />
        </div>
        <div className="absolute -top-14 left-16 border p-3 rounded-full bg-gray-900 opacity-90">
          <BiCheck />
        </div>
      </div>
      <div className="flex flex-col items-start space-y-2 mt-3">
        <h1 className="text-xl">Intract Certified: Learner NFT</h1>
        <p className="text-gray-500 max-w-40">
          Your crypto black-belt certificate
        </p>
        <div className="cursor-pointer hover:scale-110 ease-in-out transform transition duration-200 bg-gray-800 px-14 py-2 rounded-lg opacity-70">
          Claim
        </div>
      </div>
    </div>
  );
};

export default IntractCertified;
