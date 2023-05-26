import React, { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import NavbarItem from "./NavbarItem";
import { useRouter } from "next/router";

const NAV_LIST = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Project",
    href: "/project",
  },
  {
    text: "Sign In",
    href: "/signin",
  },
];

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  

  return (
    <header className="header">
      <h2 className="logo">FinP</h2>
      <nav className={`${!navActive ? "actived" : "navbar"}`}>
        <NavbarItem />
      </nav>
      <FaAlignJustify
        className="icons"
        onClick={() => {
          setNavActive(!navActive);
          console.log(navActive);
        }}
      />
    </header>
  );
}

export default Navbar;

{
  /* {
          NAV_LIST.map((nav, index) => {
            return (
                  <a className="menu__link" key={index} href={nav.href}>{nav.text}</a>
            )
          })
  } */
}
