import React from "react";
import Image from "next/image";
import auth from "../src/img/auth.jpeg";

function Signup() {
  return (
    <>
      <div className="signup__container">
        <div className="blog__signup-container">
          <div className="img__signup">
            <h2>Form Sign In</h2>
            <Image src={auth} alt="signup" className="auth__signup" />
            <p className="message__signin">
              Connectes-toi pour avoir acces aux données.
            </p>
          </div>
          <form className="form__form-signup">
            <div className="form__name">
              <div>
                <label for="form__name" className="col-form-label">
                  Email
                </label>
                <input type="text" className="form-control" id="form__name" />
              </div>
            </div>
            <div className="form__firstname">
              <div>
                <label for="form__firstname" className="col-form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="form__firstname"
                />
              </div>
            </div>
            <div className="form__email">
              <div>
                <label for="form__email" className="col-form-label">
                  Email
                </label>
                <input type="text" className="form-control" id="form__email" />
              </div>
            </div>
            <div className="form__phone">
              <div>
                <label for="form__phone" className="col-form-label">
                  Phone Number
                </label>
                <input type="phone" className="form-control" id="form__phone" />
              </div>
            </div>
            <div className="form__password">
              <div>
                <label for="form__password" className="col-form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="form__password"
                />
              </div>
            </div>
            <div className="form__cpassword">
              <div>
                <label for="form__cpassword" className="col-form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="form__cpassword"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary form__button">
              Submit
            </button>
            <div className="msg__account">
              Do yo have account ? <a href="signin">Sign in.</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
