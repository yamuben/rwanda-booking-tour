import React from "react";
import "./header.css";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header-container">  
      <img src={logo}  width="15%"/>  

      <div className="navbar">
          <div className="navbar-fix">
          <a href="/aboutus"> About Us</a>
          <a href="/tours"> Tours</a>
          <a href="#"> Garelly</a>
          <a href="#"> Signin</a>
          <a href="/"> Home</a>

          </div>
      </div>
    </div>
  );
};

export default Header;
