import React from "react";
import { Header } from "../header/Header";
import PaymentBackground from "../../assets/paymentBoard.png";
import "./Payment.css";
import { NavLink } from "react-router-dom";
import YellowHair from "../../assets/yellow-hair-girl.png";
import { useSelector } from "react-redux";
import { store } from "../../app/store";
import dayjs, { Dayjs } from "dayjs";

const Payment = () => {


  interface Reservation {
    ticket_cost: string;
    amount_ticket: string;
    ticket_used_date: Dayjs;
    customer_info: string;
    phone_number: string;
    customer_email: string;
  }

  const reservations = useSelector((state: { reservations: Reservation }) =>  store.getState().reservations);
  const ticketUsedDate = reservations.ticket_used_date;
  const dateString = ticketUsedDate.format('DD-MM-YYYY');
  return (
    <div>
      <Header />
      <img src={YellowHair} alt="payment_background" id="yellow-hair" />
      <img
        src={PaymentBackground}
        alt="payment_background"
        id="payment_background"
      />
      <div id="registered-ticket">
        <div id="cost">
          <label>Số tiền thanh toán</label>
          <input
            id="ticket-cost"
            name="ticket-cost"
            type="text"
            value={reservations.ticket_type}
            disabled
          />
        </div>
        <div id="amount-of-ticket">
          <label>Số lượng vé</label>
          <span id="input-amount-ticket-width">
          <input
            id="numb-ticket"
            name="ticket-cost"
            type="text"
            value={reservations.amount_ticket}
            disabled
          />
          <a id="detail-ticket-numb">vé</a>
          </span>
        </div>
        <div id="ticket-date-used">
          <label>Ngày sử dụng</label>
          <input
            id="ticket-date-valid"
            name="ticket-cost"
            type="text"
            value={dateString}
            disabled
          />
        </div>
        <div id="contact-info">
          <label>Thông tin liên hệ</label>
          <input
            id="contact-info-box"
            name="ticket-cost"
            type="text"
            value={reservations.customer_info}
            disabled
          />
        </div>
        <div id="phone-number">
          <label>Điện thoại</label>
          <input
            id="phone-number-box"
            name="ticket-cost"
            type="text"
            value={reservations.phone_number}
            disabled
          />
        </div>
        <div id="ticket-email">
          <label>Email</label>
          <input
            id="ticket-email-box"
            name="ticket-cost"
            type="text"
            value={reservations.customer_email}
            disabled
          />
        </div>
      </div>
      <div id="payment-template">
        <label>Số thẻ</label>
        <input
          id="card-numb"
          name="card-numb"
          type="text"
          placeholder="Nhập số thẻ"
        />
        <label>Họ tên chủ thẻ</label>
        <input
          id="card-owner-name"
          name="card-owner-name"
          type="text"
          required
          placeholder="Nhập họ tên chủ thẻ"
        />
        <div id="box-thanh-toan">
          <label>Ngày hết hạn</label>
          <input
            id="card-date"
            name="card-date"
            type="text"
            required
            placeholder="Nhập ngày hết hạn"
          />
        </div>
        <label>CVV/CVC</label>
        <input
          id="cvv-cvc"
          name="cvv-cvc"
          type="text"
          required
          placeholder="Nhập cvv/cvs"
        />
        <div id="link-to-payment">
          <NavLink to="/PaySuc">
            <button id="dat-ve">Thanh toán</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Payment;
