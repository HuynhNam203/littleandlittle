import React from "react";
import { Header } from "../header/Header";
import Background from "../../assets/back-ground.png";

const Home = () => {
  return (
    <div>
      <img src={Background} alt="background" id="background" />

      <Header />
    </div>
  );
};

export default Home;
