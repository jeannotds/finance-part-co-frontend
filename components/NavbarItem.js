import React from 'react'

function NavbarItem() {
  return (
    <>
        <a className="menu__link" href="#">Home</a>
          <a className="menu__link" href="#">About Us</a>
          <a className="menu__link" href="#">Project</a>
        <a className="active" href="#">Sign Up</a>
    </>
  )
}

export default NavbarItem