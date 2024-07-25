import { useState } from "react";
import { FaServer, FaDigitalOcean } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Service = () => {
  const [serviceList, setServiceList] = useState([
    {
      id: 1,
      icon: FaServer,
      title: "Backend Developer",
      desc: " Expertise in building and maintaining server-side logic, managing database interactions, ensuring security and performance, and integrating with frontend technologies to deliver robust web applications.",
      link: "/backend",
    },
    {
      id: 2,
      icon: IoIosSettings,
      title: "Devops Engineer",
      desc: "Specializing in automating and streamlining the deployment process using GitHub Actions, enhancing continuous integration and delivery, managing infrastructure, and ensuring system reliability and scalability for seamless operations.",
      link: "/devops",
    },
    {
      id: 3,
      icon: FaDigitalOcean,
      title: "Digital Ocean Deployment",
      desc: "Proficient in deploying scalable applications on DigitalOcean, configuring droplets, optimizing performance, managing backups, and ensuring a secure, high-availability environment for your web services.",
      link: "/digital-ocean",
    },
  ]);

  return (
    <div className="service-container text-center flex mt-3 space-x-5 px-10">
      {serviceList.map((service) => {
        const IconComponent = service.icon;
        return (
          <div
            key={service.id}
            className="rounded-xl shadow-lg space-y-3 bg-slate-200 border py-3 px-5 flex flex-col items-center hover:bg-gray-100 cursor-pointer hover:scale-105 cu"
          >
            <IconComponent size={30} className="animate-bounce" />
            <h1 className="text-2xl font-semibold">{service.title}</h1>
            <p>{service.desc}</p>
            <button className="mt-8 bg-orange-500 text-white rounded-full px-2 py-1 hover:scale-110 transform transition-transform duration-100 ease-in-out text-1xl shadow-lg">
              <a href={service.link} className="text-black">
                Click Here
              </a>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
