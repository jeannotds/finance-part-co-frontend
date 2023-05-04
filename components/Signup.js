import React, { useState } from "react";
import Image from "next/image";
import auth from "../src/img/auth.jpeg";
import axios from "axios";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();

  const [firstname, setFirstame] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [alert, setAlert] = useState(false);

  const [empty, setEmpty] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!firstname) {
      setEmpty("Veuillez renseigner votre prénom");
    } else if (!name) {
      setEmpty("Veuillez renseigner votre nom");
    } else if (!email) {
      setEmpty("Veuillez renseigner votre email");
    } else if (!password) {
      setEmpty("Veuillez renseigner votre mot de passe");
    } else {
      const user = await axios({
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        url: "http://localhost:3001/user",
        data: {
          firstname,
          name,
          email,
          password,
        },
      });

      try {
        if (user) {
          console.log("user : ", user);
          router.push("/signin");
          console.log("users : ", user);
        } else {
          console.log("User not found");
        }
      } catch (err) {
        throw err;
      }
    }
  }

  return (
    <>
      <div className="signup__container">
        <div className="blog__signup-container">
          <div className="img__signup">
            <h2>Form Sign Up</h2>
            <Image src={auth} alt="signup" className="auth__signup" />
            <p className="message__signin">
              Connectez-vous pour avoir acces aux données.
            </p>
          </div>
          <form className="form__form-signup">
            <div className="form__firstname">
              <div>
                <label for="form__firstname" className="col-form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="form__firstname"
                  onChange={(e) => setFirstame(e.target.value)}
                />
              </div>
            </div>
            <div className="form__name">
              <div>
                <label for="form__name" className="col-form-label">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="form__name"
                />
              </div>
            </div>
            <div className="form__password">
              <div>
                <label for="form__password" className="col-form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="form__password"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form__cpassword">
              <div>
                <label for="form__cpassword" className="col-form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="form__cpassword"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="message__error">{empty}</div>
            <button
              type="submit"
              class="btn btn-primary submit form__button"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <div className="msg__account">
              Do yo have account ? <a href="signin">Sign in.</a>
            </div>
          </form>
        </div>
        {/* {alert && <div className="alert">AMEKEKEJEHEHEHE</div>} */}
      </div>
    </>
  );
}

export default Signup;
