import React from "react";
import logo from "../assets/intract_logo.svg";
import {
  RiDiscordFill,
  RiSpotifyFill,
  RiTelegramFill,
  RiTwitterFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-col text-white mx-1 mr-12 space-y-16 pt-8 pb-12">
      {/* Intract logo */}
      <div className="flex flex-wrap items-start justify-between space-x-4 space-y-3">
        <div className="w-40 p-4 space-y-4">
          <img className="cursor-pointer" src={logo} alt="" />
          <p className="opacity-55">
            We are your personal guide for exploring web3 projects & earning
            100x rewards
          </p>
        </div>
        <div>
          <ul className="space-y-2">
            <li className="text-lg">INTRACT</li>
            <li className="cursor-pointer opacity-55">Explore Quests</li>
            <li className="cursor-pointer opacity-55">Comunities</li>
            <li className="cursor-pointer opacity-55">Alpha Hub</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li className="text-lg">EARN</li>
            <li className="cursor-pointer opacity-55">Refer & Earn</li>
            <li className="cursor-pointer opacity-55">Leaderboard</li>
            <li className="cursor-pointer opacity-55">Achievements</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li className="text-lg">ABOUT</li>
            <li className="cursor-pointer opacity-55">Product Roadmap</li>
            <li className="cursor-pointer opacity-55">Affiliate Program</li>
            <li className="cursor-pointer opacity-55">Sign up Program</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li className="text-lg">SUPPORT</li>
            <li className="cursor-pointer opacity-55">Help Center</li>
            <li className="cursor-pointer opacity-55">Terms of Service</li>
            <li className="cursor-pointer opacity-55">Privacy Policy</li>
          </ul>
        </div>
      </div>
      {/* Disclaimer */}
      <div>
        <p className="mx-4">
          <span className="text-white">Disclaimer: </span>
          <span className="opacity-55">
            Crypto Products, Virtual Digital Assets, and NFTs are unregulated
            and can be highly risky. There may be no regulatory recourse for any
            loss from such transactions. We advise the viewer to proceed with
            caution. Nothing in this website or any communication published by
            us amounts to, is intended to be, or should be construed as
            investment or purchase advice of any kind or financial advice or
            promotion under any applicable laws. Any decision made based on the
            content provided on this website or any communication published by
            us shall not be attributable to us.
          </span>
        </p>
      </div>
      {/* Socials */}
      <div className="flex justify-between mx-4 space-x-4">
        <h3>CREATED BY INTRACT</h3>
        <div className="flex space-x-3 text-2xl">
          <RiTwitterFill className="text-blue-500" />
          <RiDiscordFill className="text-blue-300" />
          <RiTelegramFill className="text-blue-600" />
          <RiSpotifyFill className="text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
