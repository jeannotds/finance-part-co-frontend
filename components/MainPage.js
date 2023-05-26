import Link from "next/link";
import React from "react";

function MainPage() {
  return (
    <main className="main">
      <div className="blog__main">
        <h2 data-aos="zoom-in-right" data-aos-duration="2000">Service financement participatif.</h2>
        <div data-aos="zoom-in-right" data-aos-duration="1500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem iste
          quisquam cum voluptates temporibus adipisci nisi asperiores nostrum
          quibusdam, maiores facere optio ea! Dignissimos sed impedit ducimus
          nobis architecto a.
        </div>
        <Link className="signup__main" href="/signup">Sign Up</Link>
      </div>
    </main>
  );
}

export default MainPage;
