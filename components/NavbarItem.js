import Link from 'next/link'
import React from 'react'

function NavbarItem() {
  return (
    <>
        <Link href="/" className="menu__link">Home</Link>
        <Link href="/about" className="menu__link">About Us</Link>
        <Link href="project" className="menu__link">Project</Link>
        <Link href="signup" className="active" >Sign Up</Link>
        {/* <Link href="signin" className="active" >Sign In</Link> */}
    </>
  )
}

export default NavbarItem