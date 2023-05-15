import React from "react";
import { Header } from "../header/Header";
import RB1 from "../../assets/ruy-bang-1.png";
import RB2 from "../../assets/ruy-bang-2.png";
import HG from "../../assets/hoa-giay.png";
import PG1 from "../../assets/khu-vui-choi1.png";
import PG2 from "../../assets/khu-vui-choi2.png";
import PG3 from "../../assets/khu-vui-choi3.png";
import Calendar from "../../assets/calendarIcon.svg";
import "./Event.css";
import { NavLink } from "react-router-dom";
import EventDetail from "./EventDetail";

const Event = () => {
  return (
    <div>
      <Header />
      <h3 id="heading-title">Sự kiện nổi bật</h3>
      <img src={RB1} alt="rb" id="rb1" />
      <img src={RB2} alt="rb" id="rb2" />
      <img src={HG} alt="rb" id="hg" />
      <div className="event-banner">
        <div className="banner">
          <div className="playground1">
            <img src={PG1} id="pgimg" />
          </div>
          <div className="pgDescription">
            <h2 id="event-title">Sự kiện 1</h2>
            <p id="event-name">Đầm sen Park</p>
            <span id="event-date">
              <img src={Calendar} />
              <a>30/05/2021 - 01/06/2021</a>
            </span>
            <h1 id="event-price">25.000 VNĐ</h1>
            <div className="link-to-ed">
              <NavLink to="/Event/Detail" className="link-ed">
                Xem chi tiết
              </NavLink>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="playground1">
            <img src={PG1} id="pgimg" />
          </div>
          <div className="pgDescription">
            <h2 id="event-title">Sự kiện 1</h2>
            <p id="event-name">Đầm sen Park</p>
            <span id="event-date">
              <img src={Calendar} />
              <a>30/05/2021 - 01/06/2021</a>
            </span>
            <h1 id="event-price">25.000 VNĐ</h1>
            <div className="link-to-ed">
              <NavLink to="/Event/Detail" className="link-ed">
                Xem chi tiết
              </NavLink>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="playground2">
            <img src={PG2} id="pgimg" />
          </div>
          <div className="pgDescription">
            <h2 id="event-title">Sự kiện 1</h2>
            <p id="event-name">Đầm sen Park</p>
            <span id="event-date">
              <img src={Calendar} />
              <a>30/05/2021 - 01/06/2021</a>
            </span>
            <h1 id="event-price">25.000 VNĐ</h1>
            <div className="link-to-ed">
              <NavLink to="/Event/Detail" className="link-ed">
                Xem chi tiết
              </NavLink>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="playground3">
            <img src={PG3} id="pgimg" />
          </div>
          <div className="pgDescription">
            <h2 id="event-title">Sự kiện 1</h2>
            <p id="event-name">Đầm sen Park</p>
            <span id="event-date">
              <img src={Calendar} />
              <a>30/05/2021 - 01/06/2021</a>
            </span>
            <h1 id="event-price">25.000 VNĐ</h1>
            <div className="link-to-ed">
              <NavLink to="/Event/Detail" className="link-ed">
                Xem chi tiết
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
