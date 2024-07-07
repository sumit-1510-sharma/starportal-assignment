import React from "react";
import Headline from "./helpers/Headline";
import image_1 from "../assets/creators_1.jpg";
import image_2 from "../assets/creators_2.jpg";
import image_3 from "../assets/creators_3.jpg";
import image_4 from "../assets/creators_4.jpg";
import { BsInstagram } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { RiInstagramFill } from "react-icons/ri";

const TopCreators = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Headline />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-12 gap-y-8 sm:gap-y-4">
        <div className="cursor-pointer hover:scale-105 ease-in-out transform transition duration-200 mx-2 relative h-[65vh]">
          <img
            className="rounded-xl h-full object-cover"
            src={image_1}
            alt=""
          />
          <div className="absolute rounded-xl bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-400/90 to-transparent"></div>
          <div className="absolute top-3 right-3 border border-black rounded-full p-2 bg-gray-800 opacity-70">
            <RiInstagramFill className="text-white" />
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 ease-in-out transform transition duration-200 mx-2 relative h-[65vh]">
          <img
            className="rounded-xl h-full object-cover"
            src={image_2}
            alt=""
          />
          <div className="absolute rounded-xl bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-400/90 to-transparent"></div>
          <div className="absolute top-3 right-3 border border-black rounded-full p-2 bg-gray-800 opacity-70">
            <RiInstagramFill className="text-white" />
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 ease-in-out transform transition duration-200 mx-2 relative h-[65vh]">
          <img
            className="rounded-xl h-full object-cover"
            src={image_3}
            alt=""
          />
          <div className="absolute rounded-xl bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-400/90 to-transparent"></div>
          <div className="absolute top-3 right-3 border border-black rounded-full p-2 bg-gray-800 opacity-70">
            <RiInstagramFill className="text-white" />
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 ease-in-out transform transition duration-200 mx-2 relative h-[65vh]">
          <img
            className="rounded-xl h-full object-cover"
            src={image_4}
            alt=""
          />
          <div className="absolute rounded-xl bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-400/90 to-transparent"></div>
          <div className="absolute top-3 right-3 border border-black rounded-full p-2 bg-gray-800 opacity-70">
            <RiInstagramFill className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
