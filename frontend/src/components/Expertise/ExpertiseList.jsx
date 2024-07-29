import HireButton from "../Buttons/HireMeButton";
import bannerBackground from "../../assets/banner_wallpaper.svg";
import Expertise from "./Expertise";
const ExpertiseList = () => {
  return (
    <>
      <div className="main container max-w-full mt-4">
        <h1 className="text-center text-3xl font-bold underline mt-[-20px] py-10">
          My Expertise
        </h1>
        <div
          className="flex justify-center items-center"
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
        >
          <div className="w-full flex justify-center items-center text-white py-5">
            <div className="w-2/3 space-y-3 mt-3 text-center">
              <h1 className="text-2xl font-semibold">
                I love these Technology
              </h1>
              <p>
                I love working with a variety of technologies that enhance my
                development skills and broaden my expertise. From Python and
                Django to modern frontend tools like React.js and Tailwind CSS,
                each technology plays a crucial role in crafting high-quality
                applications. Embracing tools such as Docker for
                containerization and GitHub for version control ensures
                streamlined workflows and efficient collaboration. Exploring
                areas like REST APIs, Django Channels, and Celery further fuels
                my passion for building robust and scalable solutions.
              </p>
              <HireButton></HireButton>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Expertise></Expertise>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertiseList;
