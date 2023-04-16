
import React from "react";
import Image from "next/image";
import auth from "../src/img/auth.jpeg";
import { useRouter } from 'next/router'

function Signin() {

  const router = useRouter()

  const handleClick = (e) => {
      e.preventDefault();
      router.push('/signin')
  }

  return (
    <>
      <div className="containers">
        <div className="img-signup">
          <h2>Form Sign In</h2>
          <Image src={auth} alt="signin" className="auth" />
        </div>
        <form className="form">
          <div className="">
              <label for="email" className="col-form-label">
                Email
              </label>
              <input type="text" className="form-control" id="email" />
          </div>
          <div className="">
              <label for="password" className="col-form-label">
                Password
              </label>
              <input type="text" className="form-control" id="password" />
            </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <p>Do you not have account ? <a href="signup">sign Up.</a></p>
        </form>
      </div>
    </>
  );
}

export default Signin;
