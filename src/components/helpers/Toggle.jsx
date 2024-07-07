// import React, { useState } from "react";

// const Toggle = () => {
//   const [toggle, setToggle] = useState("false");

//   const handleClick = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <div className="flex flex-col items-center sticky bottom-10 mt-16 mb-12">
//       <div className="text-white text-sm sm:text-base flex rounded-full border w-65 max-h-10 h-10 items-center justify-center">
//         <p onClick={handleClick} className="border py-2 px-8 rounded-full">
//           Essentials
//         </p>
//         <p onClick={handleClick} className="border py-2 px-8 max-h-10 rounded-full">
//           AlphaHub
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Toggle;

import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center sticky bottom-10 mt-16 mb-12">
      <div className="text-white text-sm sm:text-base flex rounded-full border bg-gray-900 border-gray-400 bg-opacity-75 w-65 max-h-10 h-10 items-center justify-center">
        <p
          onClick={handleClick}
          className="cursor-pointer border border-gray-700 py-2 px-8 rounded-l-full"
        >
          Essentials
        </p>
        <p
          onClick={handleClick}
          className="cursor-pointer border border-gray-700 py-2 px-8 rounded-r-full"
        >
          AlphaHub
        </p>
      </div>
    </div>
  );
};

export default Toggle;
