import { useState } from "react";
import AboutImage from "../assets/image.jpg";
const About = () => {
  const [data, setData] = useState({
    image: AboutImage,
    title: " Django Developer & Devops Engineer ",
    desc1: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Adipisci perspiciatis nulla quae sint eum temporibus incidunt
          quaerat.`,
    desc2: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Maxime quos explicabo quaerat accusamus nulla pariatur dolores
          beatae debitis alias voluptatem veritatis, exercitationem
          quasi iste ad aspernatur.`,
    actionButton: {
      title: "Read More...",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main container h-[500px] bg-gray-100 max-w-fit">
        <h1 className="text-center text-3xl font-bold underline py-10">
          About Me
        </h1>
        <div className="flex justify-center items-center">
            <div className="w-full flex justify-center">
              <img
                src={data.image}
                alt="suresh lama"
                className="rounded-full size-80 shadow-lg"
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-2/3 space-y-5">
                <h1 className="text-3xl font-semi-bold">{data.title}</h1>
                <p>{data.desc1}</p>
                <p>{data.desc2}</p>
                <button className="mt-8 bg-orange-500 text-white rounded-full px-3 py-2 hover:scale-110 transform transition-transform duration-100 ease-in-out text-1xl shadow-lg">
                  <a href={data.actionButton.link}>{data.actionButton.title}</a>
                </button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
