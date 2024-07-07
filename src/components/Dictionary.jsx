import React from "react";
import Headline from "./helpers/Headline";
import image_1 from "../assets/dictionary_1.svg";
import { BiBookOpen } from "react-icons/bi";

const Dictionary = () => {
  return (
    <div className="flex flex-col items-center">
      <Headline />
      <div className="relative mx-4">
        <img className="rounded-2xl" src={image_1} alt="" />
        <div className="absolute left-6 bottom-3 text-white">
          <h3 className="text-sm sm:text-xl opacity-70 font-semibold">
            Web3 + Degen Glossary
          </h3>
          <p className="text-sm sm:text-base opacity-50">
            Your own crypto dictionary
          </p>
        </div>
        <div className="cursor-pointer absolute border rounded-full p-3 sm:p-4 md:p-5 lg:p-6 right-6 bottom-3 bg-gray-900 bg-opacity-40 opacity-80 bg-transparent">
          <BiBookOpen className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
