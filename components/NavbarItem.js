import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Profile from "../src/img/profile.png";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { FaAngleRight } from "react-icons/fa";

function NavbarItem() {
  const [userData, setUserData] = React.useState();
  const [signup, setSignup] = React.useState(false);
  const router = useRouter();

  const datauser = useSelector((state) => state.user);

  console.log("users : ", datauser);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const user = JSON.parse(localStorage.getItem("data"));
      setUserData(user?.user);
    }
  }, [datauser]);

  console.log("userData : ", userData);

  const HandleSignup = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("data");
    router.push("/");
    router.reload(window.location.pathname);
  };

  return (
    <div className="container__menu" >
      <Link href="/" className="menu__link">
        Home
      </Link>
      <Link href="/about" className="menu__link">
        About Us
      </Link>
      <Link href="project" className="menu__link">
        Project
      </Link>

      <div className="action__signup" onClick={(e) => setSignup(!signup)} >
        {userData ? (
          <Link href="/" className="connection">
            <Image src={Profile} className="user__profile" alt="user urofile" />
            {userData.firstname} {userData.name}
            <FaAngleRight className="signup__icon" onClick={(e) => setSignup(signup)} />
            {
              !signup ? <div className="blog__signup" onClick={HandleSignup}>Sign out</div> : ""
            }
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
