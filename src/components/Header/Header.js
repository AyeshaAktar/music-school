import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="banner">
        <div className="banner-bg text-white d-flex align-items-center justify-content-center">
          <div>
            <h1 className="school-name">MELODY</h1>
            <h2 className="school-name">Music School</h2>
          </div>
        </div>
      </div>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
