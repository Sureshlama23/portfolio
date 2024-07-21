import { useState } from "react";
import MenuLink from "./HeaderMenu";
const Header = () => {
  const [brandName, setBrandName] = useState("Suresh Lama");

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <MenuLink></MenuLink>
        <div className="bg-orange-500 text-white rounded-full px-4 py-2 hover:scale-110 transform transition-transform duration-100 ease-in-out text-1xl">
          <button>Hire Me</button>
        </div>
      </div>
    </>
  );
};

export default Header;
