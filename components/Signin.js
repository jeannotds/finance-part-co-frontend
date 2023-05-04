import React, { useState } from "react";
import Image from "next/image";
import auth from "../src/img/auth.jpeg";
import { useRouter } from "next/router";
import { FaGofore } from "react-icons/fa";
import axios from "axios";

function Signin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [empty, setEmpty] = useState("");

  const router = useRouter();

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!email) {
      setEmpty("Veuillez renseigner votre email");
    } else if (!password) {
      setEmpty("Veuillez renseigner votre mot de password");
    } else {
      const user = await axios({
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        url: "http://localhost:3001/auth/login",
        data: {
          email,
          password,
        },
      });

      try {
        if (user) {
          window.localStorage.setItem("data", JSON.stringify(user.data));
          // router.push("./");
          console.log("user:", user);
        }
      } catch (err) {
        throw err;
      }
    }
  };

  return (
    <>
      <div className="sigin__container">
        <div className="blog__container">
          <div className="img__signin">
            <h2>Form Sign In</h2>
            <Image src={auth} alt="signup" className="auth__signin" />
            <p className="message__signin">
              Connectes-toi pour avoir acces aux données.
            </p>
          </div>
          <form className="form__form">
            <div className="form__email">
              <div>
                <label for="email" className="col-form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="form__password">
              <div>
                <label for="password" className="col-form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  required
                />
              </div>
            </div>
            <div className="message__error">{empty}</div>
            <button
              type="submit"
              class="btn btn-primary form__button"
              onClick={handleSignin}
            >
              Sign In
            </button>
            <div className="from__google">
              <a href="#" className="google">
                <FaGofore className="icon__google" />
                Sign in with Google
              </a>
            </div>
            <div className="link__signin">
              <p className="msg__account">
                Do yo have account ? <a href="signup">sign Up.</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
