import React from "react";
import { Header } from "../header/Header";
import Khung from "../../assets/khung-eventdetail.png";
import Green_Check from "../../assets/green-check.png";
import QR_Code from "../../assets/qr-code.png";
import Pre_Button from "../../assets/previos-button.svg";
import Next_Button from "../../assets/next-button.svg";
import "./PaySuc.css";

const PaySuc = () => {
  return (
    <div>
      <Header />
      <img src={Khung} alt="khung" id="khung-paysuc" />
      <button>
        <img src={Pre_Button} alt="button" id="pre-button-paysuc" />
      </button>
      <button>
        <img src={Next_Button} alt="button" id="ne-button-paysuc" />
      </button>
      <div className="banner-paysuc">
          <div id="ticket-info-box">
          <img src={QR_Code} alt="qr-code" id="qr-code" />
          <p id="ticket-id">ALT20210501</p>
          <p id="ticket-name">VÉ CỔNG</p>
          <p id="ticket-dash-line">---</p>
          <p id="ticket-available-time">Ngày sử dụng: 31/05/2021</p>
          <img src={Green_Check} alt="check" id="green-check" />
          </div>
        </div>
    </div>
  );
};

export default PaySuc;
