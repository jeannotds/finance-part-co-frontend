import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Profile from "../src/img/profile.png";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function NavbarItem() {
  const [userData, setUserData] = React.useState();
  const router = useRouter();

  const datauser = useSelector((state) => state.user);

  console.log("users : ", users);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const user = JSON.parse(localStorage.getItem("data"));
      setUserData(user?.user);
    }
  }, [datauser]);

  console.log("userData : ", userData);

  const HandleSignup = () => {
    window.localStorage.removeItem("data");
    router.push("/");
    // router.reload();
    router.reload(window.location.pathname);
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
