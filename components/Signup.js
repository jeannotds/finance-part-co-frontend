
import React from "react";
import Image from "next/image";
import auth from "../src/img/auth.jpeg";


function Signup() {
  return (
    <>
      <div className="containers">
        <div className="img-signup">
          <h2>Form Sign Up</h2>
          <Image src={auth} alt="signup" className="auth" />
          <p className="message-signup">
          Creer un compte pour avoir acces aux informations
          </p>
        </div>
        <form className="form">
          <div className="fullname">
            <div>
              <label for="firstname" className="col-form-label">
                {" "}
                Firstname{" "}
              </label>
              <input type="text" className="form-control form-firstname" id="firstname" />
            </div>
            <div>
              <label for="name" className="col-form-label">
                {" "}
                Name
              </label>
              <input type="text" className="form-control form-name" id="name" />
            </div>
          </div>
          <div className="email">
            <div>
              <label for="email" className="col-form-label">
                Email
              </label>
              <input type="text" className="form-control" id="email" />
            </div>
          </div>
          <div className="phone">
            <div>
              <label for="phone" className="col-form-label">
                Phone Number
              </label>
              <input type="phone" className="form-control" id="phone" />
            </div>
          </div>
          <div className="password">
            <div>
              <label for="password" className="col-form-label">
                Password
              </label>
              <input type="text" className="form-control" id="password" />
            </div>
          </div>
          <div className="password">
            <div>
              <label for="cpassword" className="col-form-label">
                Confirm Password
              </label>
              <input type="text" className="form-control" id="cpassword" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary button">Submit</button>
          <p>Do yo have account ? <a href="signin">sign in.</a></p>
        </form>
      </div>
    </>
  );
}

export default Signup;
