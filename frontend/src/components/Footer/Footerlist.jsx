import { useState } from "react";

const FooterMenuLink = () => {
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
      link: "/privacy-policy",
      title: "Provacy Policy",
    },
    {
      id: 4,
      link: "/licensing",
      title: "Licensing",
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

export default FooterMenuLink;
