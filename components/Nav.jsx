import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

function Nav() {

    const [navActive, setNavActive] = useState(false);
    const [activeIdx, SetActiveIdx] = useState(0);


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
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header>
      <nav className="nav">
        <Link href={"/"}>
          <h1 className="logo">Fin.P</h1>
        </Link>

        <div onClick={() => setNavActive(!a)} className="nav__menu-bar">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="nav__menu-list">
          {NAV_LIST.map((menu, index) => {
            return (
              <div key={menu.index}>
                <NavItem {...menu} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
