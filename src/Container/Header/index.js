import React from "react";
import Logo from "../../imges/logo.png";
import Menu from "../../imges/Frame.png";
import "./index.scss";

const Header = ({ open, setOpen }) => {
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="main-header">
      <div className="header-sec">
        <div className="container-fluid header-color">
          <div className="container-wrapper d-flex justify-content-between">
            <div>
              <img src={Logo} alt="Logo" className="header-img" />
            </div>
            <div onClick={handleOpen} style={{ cursor: "pointer" }}>
              <img src={Menu} alt="Menu" className="menu-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
