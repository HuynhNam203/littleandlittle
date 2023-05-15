import React from "react";
import { Header } from "../header/Header";
import RB1 from "../../assets/ruy-bang-1.png";
import RB2 from "../../assets/ruy-bang-2.png";
import HG2 from "../../assets/hoa-giay2.png";
import Khung from "../../assets/khung-eventdetail.png";
import "./EventDetail.css";
import PG3 from "../../assets/khu-vui-choi3.png";
import PG1 from "../../assets/khu-vui-choi1.png";
import Calendar from "../../assets/calendarIcon.svg";

const EventDetail = () => {
  return (
    <div>
      <Header />
      <h3 id="head-title">Sự kiện 1</h3>
      <img src={RB1} alt="rb" id="rb1" />
      <img src={RB2} alt="rb" id="rb2" />
      <img src={HG2} alt="hg" id="hg" />
      <img src={Khung} alt="khung" id="khung" />
      <div id="news-detail">
        <img src={PG3} id="ev-de-img3" />
        <span id="ev-de-date">
          <img src={Calendar} />
          <a>30/05/2021 - 01/06/2021</a>
        </span>
        <p id="ev-de-name">Đầm sen Park</p>
        <h1 id="ev-de-price">25.000 VNĐ</h1>
        <p id="column-1">
          <a id="first-letter">Lorem Ipsum</a> is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic sdsd typesetting,
          remaining cssa essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          of Lorem Ipsum.
        </p>
        <p id="column-2">
          <img src={PG1} id="ev-de-img1" />
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical Latin literature from 45 BC, making it over 2000 years old.
          words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature,
        </p>
        <p id='column-3'>
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical Latin literature from 45 BC, making it over 2000 years old.
          words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature,
          <img src={PG1} id="ev-de-img1" />
        </p>
      </div>
    </div>
  );
};

export default EventDetail;
