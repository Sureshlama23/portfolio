import React, { useState } from "react";

const Expertise = () => {
  const [expertiseName, setExpertiseName] = useState([
    "Core Python",
    "Django",
    "RestFramework",
    "Django Channels",
    "Celery",
    "Tailwind CSS",
    "React JS",
    "GitHub",
    "HTML",
    "JavaScript",
    "Docker",
    "GitHub Actions",
    "Digital Ocean",
    "Testing",
    "SQL & ORM",
    "Security Practices",
    "Performance Optimization",
  ]);

  return (
    <div className="w-3/4 flex justify-center space-x-3 flex-wrap">
      {expertiseName.map((name, index) => (
        <p
          key={index} // Use the index as the key
          className="w-fit mt-3 px-3 py-2 bg-gray-300 hover:scale-110 hover:bg-orange-500 rounded-full cursor-pointer shadow-md"
        >
          {name}
        </p>
      ))}
    </div>
  );
};

export default Expertise;
