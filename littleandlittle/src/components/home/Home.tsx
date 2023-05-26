import React, { useEffect, useState } from "react";
import { Header } from "../header/Header";
import "./Home.css";
import DamSenLogo from "../../assets/dam-sen-logo.svg";
import HomeBackground from "../../assets/home_background.png";
import PinkHair from "../../assets/pink_hair_girl.png";
import NewsBoard from "../../assets/news-board.png";
import Star from "../../assets/star.png";
import Dropdown_btn from "../../assets/dropdown-button.png";
import Calendar_btn from "../../assets/button-calendar.png";
import { NavLink } from "react-router-dom";
import { Button, DatePicker, RefSelectProps, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import dayjs, { Dayjs } from "dayjs";

import {
  updateTicketType,
  updateAmountTicket,
  updateTicketUsedDate,
  updateCustomerInfo,
  updatePhoneNumber,
  updateCustomerEmail,
} from "../../features/reservationSlice";

const { Option } = Select;

const Home = () => {
  const [selectValue, setSelectValue] = useState("");
  const [openDD, setOpenDD] = useState(false);
  const [openSche, setOpenSche] = useState(false);
  const [ticketUsedDate, setTicketUsedDate] = useState(
    dayjs("24/05/2023", "DD/MM/YYYY")
  );
  const [ticketType, setTicketType] = useState("");
  const selectRef = React.useRef<RefSelectProps>(null);

  const handleDD = (selectValue: any) => {
    setSelectValue(selectValue);
    setOpenDD(false);
    dispatch(updateTicketType(selectValue));
  };

  const handleSche = (selectValue: any) => {
    setSelectValue(selectValue);
    setTicketUsedDate(selectValue);
    setOpenSche(false);
  };

  const DropdownBtn = () => {
    setOpenDD((prevOpen) => !prevOpen);
  };

  const ScheduleBtn = () => {
    setOpenSche((prevOpen) => !prevOpen);
    dispatch(updateTicketUsedDate(ticketUsedDate));
  };

  const dispatch = useDispatch();

  const handleAmountTicket = (event: { target: { value: string } }) => {
    dispatch(updateAmountTicket(parseInt(event.target.value)));
  };

  const handleCustomerInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCustomerInfo(event.target.value));
  };

  const handlePhoneNumber = (event: { target: { value: string } }) => {
    dispatch(updatePhoneNumber(parseInt(event.target.value)));
  };

  const handleCustomerEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCustomerEmail(event.target.value));
  };

  return (
    <div>
      <Header />
      <h1 id="tittle">ĐẦM SEN PARK</h1>
      <img src={DamSenLogo} alt="background" id="damsenlogo" />
      <img src={HomeBackground} alt="home_background" id="home_background" />
      <img src={NewsBoard} alt="news_board" id="news_board" />
      <img src={PinkHair} alt="home_background" id="pink_hair" />
      <p id="event_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
        mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex
        facilisis.
        <br />
        Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor
        iaculis risus, lobortis molestie lectus consequat a.
      </p>
      <ul id="event-mark">
        <li id="event-line">
          <img src={Star} alt="line-mark" id="line-mark" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li id="event-line">
          <img src={Star} alt="line-mark" id="line-mark" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li id="event-line">
          <img src={Star} alt="line-mark" id="line-mark" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li id="event-line">
          <img src={Star} alt="line-mark" id="line-mark" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
      </ul>
      <div id="reservation-template">
        <div id="box-ticket">
          <Select
            open={openDD}
            ref={selectRef}
            onChange={handleDD}
            placeholder="Các loại vé"
            suffixIcon={<></>}
          >
            <Option value="Vé trọn gói">Vé trọn gói</Option>
            <Option value="Vé vào cổng">Vé vào cổng</Option>
          </Select>

          <Button type="link" onClick={DropdownBtn}>
            <img
              className="ticket-dropdown-btn"
              src={Dropdown_btn}
              style={{ maxWidth: 45, maxHeight: 45 }}
            />
          </Button>
        </div>
        <div id="box-dich-vu">
          <input
            id="amount-ticket"
            name="amount-ticket"
            type="number"
            required
            placeholder="Số lượng vé"
            onChange={handleAmountTicket}
          />
          <DatePicker
            open={openSche}
            onChange={handleSche}
            suffixIcon={<></>}
            placeholder="Ngày sử dụng"
            format="DD/MM/YYYY"
          />
          <Button type="link" onClick={ScheduleBtn}>
            <img
              className="calendar-btn"
              src={Calendar_btn}
              style={{ maxWidth: 45, maxHeight: 45, paddingTop: 7 }}
            />
          </Button>
        </div>
        <input
          id="cus-name"
          name="cus-name"
          type="text"
          required
          placeholder="Họ và tên"
          onChange={handleCustomerInfo}
        />
        <input
          id="cus-phone"
          name="cus-phone"
          type="text"
          required
          placeholder="Số điện thoại"
          onChange={handlePhoneNumber}
        />
        <input
          id="cus-email"
          name="cus-email"
          type="email"
          required
          placeholder="Địa chỉ email"
          onChange={handleCustomerEmail}
        />
        <div id="link-to-payment">
          <NavLink to="/Payment">
            <button id="dat-ve">Đặt vé</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
