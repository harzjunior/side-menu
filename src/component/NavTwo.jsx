import React, { useState } from "react";
import "./styles.css";

function NavTwo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(true);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">H.B</div>
      <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
      {isMenuActive ? (
        <div className="navbar-hamburger" onClick={handleMenuClick}></div>
      ) : (
        <div
          className={`navbar-hamburger ${isMenuActive ? "" : "toggle"}`}
          onClick={handleMenuClick}
        ></div>
      )}
    </nav>
  );
}

export default NavTwo;
