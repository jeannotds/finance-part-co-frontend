
import React from "react";
import Image from "next/image";
import auth from "../src/img/auth.jpeg";
import { useRouter } from 'next/router'
// import { FaGofore } from "react-icons/tb";
import { FaGofore } from "react-icons/fa";

function Signin() {

  const router = useRouter()

  const handleClick = (e) => {
      e.preventDefault();
      router.push('/signin')
  }

  return (
    <>
      <div className="sigin__container">
        <div className="img-signup">
          <h2>Form Sign In</h2>
          <Image src={auth} alt="signup" className="auth__signin" />
          <p className="message-signin">Connectes-toi pour avoir acces aux données.</p>
        </div>
        <form className="form__form">
          
          <div className="form__email">
            <div>
              <label for="email" className="col-form-label">
                Email
              </label>
              <input type="text" className="form-control" id="email" />
            </div>
          </div>
          <div className="form__password">
            <div>
              <label for="password" className="col-form-label">
                Password
              </label>
              <input type="text" className="form-control" id="password" />
            </div>
          </div>
          
          <button type="submit" class="btn btn-primary form__button">Sign In</button>
          <div className="from__google">
              <a href="#" className="google"><FaGofore className="icon__google" />Sign in with Google</a>
          </div>
          <p className="msg__account">Do yo have account ? <a href="signup">sign in.</a></p>
        </form>
      </div>
    </>
  );
}

export default Signin;
