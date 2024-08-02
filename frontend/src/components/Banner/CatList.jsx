import { useEffect, useRef } from "react";
import Typed from "typed.js";
const List = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Backend Developer", "Devops Engineer", "Frontend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 20,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return <span ref={el} className="font-bold text-1xl"></span>;
};

export default List;
