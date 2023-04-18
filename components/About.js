import Image from "next/image";
import React from "react";
import Platform from "../src/img/platform.png"
import Finance from "../src/img/money.png"

function About() {
  return (
    <div className="blog__conatainer">
      <div className="about__container">
        <h2>About Us</h2>
        <p className="about__platform">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ea!
          Dignissimos sed impedit ducimus nobis architecto a.
        </p>
        <div className="about__platform-info">
          <div className="about__platform-paltform">
            <Image src={Platform} alt="Image Platform" className="image__about" />
            <div>Platform</div>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              Dignissimos sed impedit ducimus nobis architecto a.
            </p>
          </div>
          <div className="about__platform-finance">
            <Image src={Finance} alt="Image Platform" className="image__about" />
            <div>Platform</div>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              Dignissimos sed impedit ducimus nobis architecto a.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
