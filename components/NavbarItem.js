import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IconName } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import Profile from "../src/img/profile.png";

function NavbarItem() {
  const [userData, setUserData] = React.useState();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(window.localStorage.getItem("data"));
      setUserData(user?.user);
    }
  }, []);

  console.log("userData : ", userData);

  const HandleSignup = () => {
    window.localStorage.removeItem("data");
    router.push("/");
  };

  return (
    <div className="container__menu">
      <Link href="/" className="menu__link">
        Home
      </Link>
      <Link href="/about" className="menu__link">
        About Us
      </Link>
      <Link href="project" className="menu__link">
        Project
      </Link>

      <div>
        {userData ? (
          <Link href="/" className="connection" onClick={HandleSignup}>
            <Image src={Profile} className="user__profile" alt="user urofile" />
            {userData.firstname} {userData.name}
          </Link>
        ) : (
          <Link href="signin" className="active">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavbarItem;
