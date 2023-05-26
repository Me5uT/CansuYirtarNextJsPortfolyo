import React from "react";
import { AboutMe } from "../contents/AboutMe";
import Image from "next/image";
import { imageLoader } from "../components/ImageLoader";

interface IAboutProps {}

const About: React.FC<IAboutProps> = () => {
  return (
    <div className="about-container">
      <br></br>
      <h1 className="title">Hakkımda</h1>
      <div className="row">
        <div className="col">
          <div className="profile-img__container">
            <Image
              className="profile-img"
              src={"/profil.png"}
              loader={imageLoader}
              width={500}
              height={500}
              alt="Cansu Yırtar profile"
            />
          </div>
        </div>
        <div className="col first-section">
          <p>{AboutMe}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
