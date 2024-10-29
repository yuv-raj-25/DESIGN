import React, { useState , useEffect  } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  

  return (
    <div className=" sticky top-0 z-50 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Finance
      </h1>

      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4">HOME</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] p-5">
          Finance
        </h1>
        <ul className="p-5 uppercase">
          <li className="p-4 border-b border-gray-500">HOME</li>
          <li className="p-4 border-b border-gray-500">Company</li>
          <li className="p-4 border-b border-gray-500">Resources</li>
          <li className="p-4 border-b border-gray-500">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

