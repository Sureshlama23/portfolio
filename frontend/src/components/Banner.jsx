import bannerImage from "../assets/file.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Icons from "./icons";
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
              And i am a Backend Developer
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quae quam minus commodi perspiciatis dolor, nam eveniet excepturi,
              tempore officia obcaecati, doloremque quibusdam unde nihil
              exercitationem iste expedita ratione consequuntur.
            </p>
            <Icons></Icons>
            <br />
            <button
              className={`mt-8 bg-orange-500 text-white rounded-full px-3 py-2 hover:scale-110 transform transition-transform duration-100 ease-in-out text-1xl shadow-lg`}
            >
              <a href="/download-cv">Download CV</a>
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
