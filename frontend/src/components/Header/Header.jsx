import { useState } from "react";
import MenuLink from "./HeaderMenu";
import HireButton from "../Buttons/HireMeButton";
const Header = () => {
  const [brandName, setBrandName] = useState("Suresh Lama");

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <MenuLink></MenuLink>
        <HireButton></HireButton>
      </div>
    </>
  );
};

export default Header;
