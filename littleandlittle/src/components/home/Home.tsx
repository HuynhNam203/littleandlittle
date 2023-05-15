import React from "react";
import { Header } from "../header/Header";
import Kids from "../../assets/kids.svg"
import "./Home.css"
import DamSenLogo from "../../assets/dam-sen-logo.svg"
import HomeBackground from "../../assets/home_background.png"
import PinkHair from "../../assets/pink_hair_girl.png"
import NewsBoard from "../../assets/news-board.png"
import Star from "../../assets/star.png"


const Home = () => {
  return (
    <div>
      <Header />
      <h1 id="tittle">ĐẦM SEN PARK</h1>
      <img src={DamSenLogo} alt="background" id="damsenlogo" />
      <img src={HomeBackground} alt="home_background" id="home_background" />
      <img src={NewsBoard} alt="news_board" id="news_board" />
      <img src={PinkHair} alt="home_background" id="pink_hair" />
      <p id="event_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.<br/>
      Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>
      <ul id="event-mark" >
        <li id="event-line"><img src={Star} alt="line-mark" id="line-mark"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li id="event-line"><img src={Star} alt="line-mark" id="line-mark"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li id="event-line"><img src={Star} alt="line-mark" id="line-mark"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li id="event-line"><img src={Star} alt="line-mark" id="line-mark"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    </div>
  );
};

export default Home;
