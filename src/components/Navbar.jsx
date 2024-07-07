// import React from "react";
// import logo from "../assets/intract_logo.svg";
// import { BiSearch } from "react-icons/bi";
// import { TbBrandFeedly } from "react-icons/tb";

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 backdrop-blur-sm bg-transparent border-b border-gray-800 z-10">
//       <div className="text-white h-[3rem] md:h-[4rem] flex items-center justify-between mx-[1rem]">
//         <div>
//           <img className="w-[80%]" src={logo} alt="logo" />
//         </div>
//         <div className="xl:flex hidden items-center justify-evenly space-x-8">
//           <p>Compass</p>
//           <p>Explore</p>
//           <p>Academy</p>
//           <p>NFTs</p>
//           <p>For Projects</p>
//         </div>
//         <div className="relative sm:flex hidden items-center justify-start bg-slate-900 opacity-70 border-black border-opacity-50 rounded-full px-2 py-1 md:px-4 md:py-2 w-[35%]">
//           <BiSearch className="absolute left-3 top-2.5 text-xl" />
//           <input
//             className="ml-6 text-black bg-transparent opacity-100 w-[95%]"
//             type="Search"
//             placeholder="Search for ecosystems, trending "
//           />
//         </div>
//         <div className="flex items-center justify-start space-x-2">
//           <div className="border rounded-full border-orange-400 p-2 md:p-3">
//             <TbBrandFeedly className="text-orange-400" />
//           </div>
//           <button className="bg-white text-black font-semibold text-sm px-5 py-1 md:px-7 md:py-1.5 rounded-md">
//             SignIn
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import logo from "../assets/intract_logo.svg";
import { BiSearch } from "react-icons/bi";
import { TbBrandFeedly } from "react-icons/tb";
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  const refreshAndScrollTop = () => {
    // Reload the page
    window.location.reload();

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div className="sticky top-0 backdrop-blur-sm bg-transparent border-b border-gray-800 z-10">
      <div className="text-white h-[3rem] md:h-[4rem] flex items-center justify-between mx-[1rem]">
        <div>
          <img
            className="w-[80%] cursor-pointer"
            onClick={refreshAndScrollTop}
            src={logo}
            alt="logo"
          />
        </div>
        <div className="xl:flex hidden items-center justify-evenly space-x-8">
          <p className="cursor-pointer">Compass</p>
          <p className="cursor-pointer">Explore</p>
          <p className="cursor-pointer">Academy</p>
          <p className="cursor-pointer">NFTs</p>
          <p className="cursor-pointer">For Projects</p>
        </div>
        <div className="relative sm:flex hidden items-center justify-start bg-slate-900 opacity-70 border-black border-opacity-50 rounded-full px-2 py-1 md:px-4 md:py-2 w-[35%]">
          <BiSearch className="absolute left-3 top-2.5 text-xl" />
          <input
            className="ml-6 text-black bg-transparent opacity-100 w-[95%] focus:outline-none no-border"
            type="Search"
            placeholder="Search for ecosystems, trending"
          />
        </div>
        <div className="flex items-center justify-start space-x-2">
          <div className="border rounded-full border-orange-400 p-2 md:p-3">
            <TbBrandFeedly className="text-orange-400" />
          </div>
          <button className="bg-white text-black font-semibold text-sm px-5 py-1 md:px-7 md:py-1.5 rounded-md">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
