import FooterMenuLink from "./Footerlist";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-100 flex justify-between mt-5">
        <div className="pl-[200px]">
          <p className=" flex gap-2">
            @2024 Suresh Lama | 
            <span className="flex items-center gap-2">
              All Right Reversed <FaRegCopyright></FaRegCopyright>
            </span>
          </p>
        </div>
        <div className="space-x-6 pr-20">
          <FooterMenuLink></FooterMenuLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
