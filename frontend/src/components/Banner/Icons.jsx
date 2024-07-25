import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Icons = () => {
  return (
    <>
      <div className="icons-container flex space-x-4 justify-start m-[10px]">
        <a className=" bg-gray-950 w-10 h-10 rounded-full items-center flex justify-center cursor-pointer hover:bg-orange-600 hover:scale-110">
          <FaFacebook className="text-2xl" />
        </a>
        <a className=" bg-gray-950 w-10 h-10 rounded-full items-center flex justify-center cursor-pointer hover:bg-orange-600 hover:scale-110">
          <FaGithub className="text-2xl" />
        </a>
        <a className=" bg-gray-950 w-10 h-10 rounded-full items-center flex justify-center cursor-pointer hover:bg-orange-600 hover:scale-110">
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </>
  );
};

export default Icons;
