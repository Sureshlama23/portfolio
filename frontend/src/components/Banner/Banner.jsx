import bannerImage from "../../assets/file.png";
import bannerBackground from "../../assets/banner_wallpaper.svg";
import Icons from "./Icons";
import { IoMdDownload } from "react-icons/io";
import List from "./CatList";
const Banner = () => {
  return (
    <>
      <div
        className="main-container flex items-center pb-6 h-[500px]"
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full flex justify-center text-white">
          <div className="w-2/3 space-y-1">
            <h3 className="text-2 font-semibold">Hi, I am</h3>
            <h1 className="text-4xl font-bold">Suresh Lama</h1>
            <h2 className=" text-1xl font-medium">
              And i am a <List></List>
            </h2>
            <p>
              {/* I specialize in building robust backend systems and dynamic
              frontend interfaces. With a strong background in Django and a
              knack for creating seamless user experiences, I bring both
              technical expertise and creative solutions to the table. */}
              I specialize in creating robust backend systems and engaging
              frontend interfaces. With a strong foundation in Django and a keen
              eye for seamless user experiences, I deliver technical expertise
              and innovative solutions. Let’s bring your vision to life!
            </p>
            <Icons></Icons>
            <br />
            <button
              className={`mt-8 bg-orange-500 text-white rounded-full px-3 py-2 hover:scale-110 transform transition-transform duration-100 ease-in-out text-1xl shadow-lg`}
            >
              <a href="/download-cv" className="flex items-center gap-2">
                Download CV <IoMdDownload />
              </a>
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            src={bannerImage}
            alt=""
            className="rounded-full size-80 shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
