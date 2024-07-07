import React from "react";
import crypto_1 from "../assets/cryptocard_1.png";
import coin from "../assets/coin.svg";
import CryptoCardHidden from "./helpers/CryptoCardHidden";
import IntractCertified from "./IntractCertified";

const CryptoCard = ({ leftToRight }) => {
  return (
    <div
      className={
        leftToRight
          ? `flex items-center justify-center lg:justify-evenly space-x-10 -my-32 -mt-52 lg:-mt-24`
          : `flex items-center justify-center lg:justify-evenly flex-row-reverse space-x-10 lg:mt-52`
      }
    >
      <div className="text-white border rounded-3xl border-gray-700 mx-2 w-[90%] lg:w-[50%]">
        <div className="flex flex-col items-center space-y-4 sm:flex-row justify-center sm:justify-evenly bg-gray-900 bg-opacity-50 py-8 sm:pl-6 rounded-t-3xl">
          <div className="w-32 h-28 sm:h-44 sm:w-40 p-2 bg-gray-800 bg-opacity-50 rounded-xl">
            <img
              className="cursor-pointer h-24 sm:h-40 object-cover rounded-xl"
              src={crypto_1}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center sm:items-start justify-center sm:ml-8 max-w-[60%] space-y-4">
            <div className="flex flex-col items-start justify-center space-y-3">
              <h2 className="text-xl sm:text-md">Basics of Crypto</h2>
              <p className="hidden sm:flex mr-2">
                The safest and easiest place to start your crypto journey!
              </p>
            </div>
            <hr className="border hidden sm:flex border-dotted dotted w-[90%] opacity-50"></hr>
            <div className="relative flex items-center justify-center rounded-full pl-8 pr-4 py-1 bg-slate-600 bg-opacity-50">
              <img className="w-4 absolute top-2.5 left-3" src={coin} alt="" />
              <p>1490 XPs</p>
            </div>
          </div>
        </div>
        {/* hidden part */}
        <div className="h-[60vh] bg-gray-700 bg-opacity-50 overflow-y-scroll rounded-b-3xl">
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <CryptoCardHidden key={index} />
          ))}
        </div>
      </div>
      <div className="hidden lg:flex">
        <IntractCertified />
      </div>
    </div>
  );
};

export default CryptoCard;
