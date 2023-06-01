import React from "react";
import menuArrow from "../imges/menuArrow.png";
import closeIcon from "../imges/close.png";
import { useNavigate } from "react-router-dom";
import "./Menu.scss";

const Menus = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/about" },
  { title: "Product ", link: "/product" },
  { title: "Revolutionary ", link: "/revolutionary" },
  { title: "Blog & News", link: "/blog-news" },
  // { title: "Blog", link: "/blog" },
  { title: "Contact us", link: "/contact" },
];
const Menu = ({ setOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="menu-wrapper">
      <div className="close-icon-wrapper" onClick={() => setOpen(false)}>
        <img src={closeIcon} alt="close" />
      </div>
      {Menus.map((data) => (
        <div
          className="menu-container"
          onClick={() => {
            setOpen(false);
            navigate(data.link);
          }}
        >
          <div className="menu-item">
            <div>{data.title}</div>
          </div>
          <div className="menu-icon">
            <img src={menuArrow} alt="menu" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
