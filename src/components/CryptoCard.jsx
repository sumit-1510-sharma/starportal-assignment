import React from "react";

import coin from "../assets/coin.svg";
import CryptoCardHidden from "./helpers/CryptoCardHidden";
import IntractCertified from "./IntractCertified";
import intract_1 from "../assets/intractcertified_1.png";
import intract_2 from "../assets/intractcertified_2.png";
import image_1 from "../assets/cryptocardhidden_1.jpg";
import image_2 from "../assets/cryptocardhidden_2.jpg";
import image_3 from "../assets/cryptocardhidden_3.jpg";
import image_4 from "../assets/cryptocardhidden_4.jpg";
import image_5 from "../assets/cryptocardhidden_5.jpg";
import image_6 from "../assets/cryptocardhidden_6.jpg";

const cardList = [
  {
    imageUrl: image_1,
    title: "#1: But what is crypto ?",
  },
  {
    imageUrl: image_2,
    title: "#2: What is Blockchain?",
  },
  {
    imageUrl: image_3,
    title: "#3: How to Buy Crypto",
  },
  {
    imageUrl: image_4,
    title: "#4: Crypto Wallets Explained",
  },
  {
    imageUrl: image_5,
    title: "#5: Crypto Mining 101",
  },
  {
    imageUrl: image_6,
    title: "#6: Future of Cryptocurrency",
  },
];

const CryptoCard = ({ leftToRight, img }) => {
  const chosenImage = leftToRight ? intract_1 : intract_2;
  console.log(cardList[0].title);
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
              src={img}
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
          {cardList.map((item, index) => (
            <CryptoCardHidden
              img={cardList[index].imageUrl}
              key={index}
              title={cardList[index].title}
            />
          ))}
        </div>
      </div>
      <div className="hidden lg:flex">
        <IntractCertified img={chosenImage} />
      </div>
    </div>
  );
};

export default CryptoCard;
