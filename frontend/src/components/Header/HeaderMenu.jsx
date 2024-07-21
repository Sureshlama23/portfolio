import { useState } from "react";

const MenuLink = () => {
  const [menuLinkName, setMenuLinkName] = useState([
    {
      id: 1,
      link: "/home",
      title: "Home",
    },
    {
      id: 2,
      link: "/about",
      title: "About",
    },
    {
      id: 3,
      link: "/skills",
      title: "Skills",
    },
    {
      id: 4,
      link: "/portfolio",
      title: "Portfolio",
    },
    {
      id: 5,
      link: "/contact",
      title: "Contact",
    },
  ]);
  return (
    <>
      <div className="space-x-6">
        {menuLinkName.map((link) => (
          <a key={link.id} href={link.link} className="hover:text-orange-600">
            {link.title}
          </a>
        ))}
      </div>
    </>
  );
};

export default MenuLink;
