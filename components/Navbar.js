import React, { useState } from "react";

function Navbar() {
  return (
    <header className="header">
      <h2 className="logo">FinP</h2>
      <nav className="navbar">
        <a className="menu__link" href="#">Home</a>
        <a className="menu__link" href="#">About Us</a>
        <a className="menu__link" href="#">Project</a>
        <a className="active" href="#">Sign Up</a>
      </nav>
    </header>
  );
}

export default Navbar;
