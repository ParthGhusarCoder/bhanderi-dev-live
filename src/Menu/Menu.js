import React from "react";
import menuArrow from "../imges/menuArrow.png";
import closeIcon from "../imges/close.png";
import { useNavigate } from "react-router-dom";
import "./Menu.scss";
import { aboutUrl, contactUrl, homeUrl, productUrl, revolutionaryUrl } from "../constants";

const Menus = [
  { title: "Home", link: homeUrl },
  { title: "About us", link: aboutUrl },
  { title: "Product ", link: productUrl },
  { title: "Revolutionary ", link: revolutionaryUrl },
  // { title: "Blog & News", link: "/blog-news" },
  // { title: "Blog", link: "/blog" },
  { title: "Contact us", link: contactUrl },
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
