import Link from "next/link";
import React from "react";

function NavItem({ href, text, active }) {
  return (
    <a href={href} className={`nav__link${active ? "active" : ""}`}>
      {text}
    </a>
  );
}

export default NavItem;
