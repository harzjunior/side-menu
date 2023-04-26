import React, { useState } from "react";

const Navbar = () => {
  const [ifSidebar, setIfSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setIfSidebar(!ifSidebar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">H.B</div>
      <div className="navbar-toggle" onClick={handleToggleSidebar}>
        <div className="navbar-toggle-line"></div>
        <div className="navbar-toggle-line"></div>
        <div className="navbar-toggle-line"></div>
      </div>
      <div className={`navbar-menu ${ifSidebar ? "navbar-menu-open" : ""}`}>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-list-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-list-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
