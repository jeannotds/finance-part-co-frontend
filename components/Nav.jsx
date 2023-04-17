import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

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

function Nav() {


    const [navActive, setNavActive] = useState(false);
    const [activeIdx, SetActiveIdx] = useState(0);

  return (
    <header>
      <nav className="nav">
        <Link href={"/"}>
          <h1 className="logo">Fin.P</h1>
        </Link>

        <div>
        
        </div>
        <div className="">
          {NAV_LIST.map((menu, idx) => {
            return (
              <div key={menu.idx} >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
