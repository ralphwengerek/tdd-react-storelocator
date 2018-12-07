import React from "react";
import "./Header.scss";

const logo = "/images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
