import React from "react";
import bg_image from "../assets/intract-academy-background.png";
import gif from "../assets/hero_gif.gif";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mb-4">
      <img
        className="absolute top-0 left-0 w-full object-contain"
        src={bg_image}
        alt="Background"
      />
      <div className="absolute inset-0 -top-20 flex flex-col items-center justify-center sm:-mt-12 lg:mt-0">
        <img
          className="bg-transparent w-32 -mt-20 sm:-mt-16 sm:w-44 lg:w-60 object-cover"
          src={gif}
          alt=""
        />
        <p className="text-white text-md md:text-xl max-w-[47%] text-center pt-6 opacity-80 font-semibold">
          Intract users{" "}
          <span className="text-gray-400">have together made more than</span>{" "}
          $100 million{" "}
          <span className="text-gray-300">in web3. Join them and</span> learn
          how to earn crypto!
        </p>
        <div className="text-white bg-[#6435e9] text-sm flex items-center justify-center hover:scale-110 ease-in-out transform transition duration-200 space-x-2 mt-10 py-2 px-12 rounded-md cursor-pointer">
          <button className="">Get Started</button>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
