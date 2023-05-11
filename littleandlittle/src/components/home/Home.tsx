import React from "react";
import { Header } from "../header/Header";
import Kids from "../../assets/kids.svg"
import "./Home.css"
import DamSenLogo from "../../assets/dam-sen-logo.svg"
import HomeBackground from "../../assets/home_background.png"
import PinkHair from "../../assets/pink_hair_girl.png"
import NewsBoard from "../../assets/news-board.png"


const Home = () => {
  return (
    <div>
      <h1 id="tittle">ĐẦM SEN PARK</h1>
      <img src={DamSenLogo} alt="background" id="damsenlogo" />
      <img src={HomeBackground} alt="home_background" id="home_background" />
      <img src={NewsBoard} alt="news_board" id="news_board" />
      <img src={PinkHair} alt="home_background" id="pink_hair" />

      <Header />
    </div>
  );
};

export default Home;
