import type { NextPage } from "next";
import Image from "next/image";
import { HomeContent } from "../contents/Anasayfa";

const Home: NextPage = () => {
  return (
    <div className="home-container">
      <br></br>
      <div className="home-title">
        <h1 className="title">Cansu Yırtar</h1>
      </div>
      <div className="home-inner-container">
        <div className="home-img__container profile-img__container">
          <Image
            src={"/profil.png"}
            width={500}
            height={500}
            alt="Cansu Yırtar profile"
            className="profile-img"
          />
        </div>
        <div className="home-description-container">
          <p className="home-description">{HomeContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
