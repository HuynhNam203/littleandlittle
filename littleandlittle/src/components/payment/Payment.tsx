import React, { useState } from "react";
import { Header } from "../header/Header";
import PaymentBackground from "../../assets/paymentBoard.png";
import "./Payment.css";
import { NavLink } from "react-router-dom";
import YellowHair from "../../assets/yellow-hair-girl.png";
import { useSelector } from "react-redux";
import { store } from "../../app/store";
import dayjs, { Dayjs } from "dayjs";
import Calendar_btn from "../../assets/button-calendar.png";
import { db } from "../../config/fbconfig";
import { Button, DatePicker } from "antd";
import { Timestamp } from "firebase/firestore";
import moment from 'moment';

const Payment = () => {
  interface Reservation {
    ticket_type: number;
    amount_ticket: number;
    ticket_used_date: Dayjs;
    customer_info: string;
    phone_number: number;
    customer_email: string;
  }
  const [selectValue, setSelectValue] = useState("");
  const [openSche, setOpenSche] = useState(false);

  const handleSche = (selectValue: any) => {
    setSelectValue(selectValue);
    setOpenSche(false);
    setCardDate(selectValue);
  };

  const ScheduleBtn = () => {
    setOpenSche((prevOpen) => !prevOpen);
  };

  const removeAccents = (str: string): string => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const uppercasedValue = value.toUpperCase();
    const processedValue = removeAccents(uppercasedValue);
    setCardOwnerName(processedValue);
  };

  const handlePayment = () => {
    const ticketUsedDate = Timestamp.fromDate(reservations.ticket_used_date.toDate());
    const expirationDate = moment(cardDate, 'MM/YYYY').toDate();
    const expirationTimestamp = Timestamp.fromDate(expirationDate);


    db.collection("littleandlittle").add({
      total_money: reservations.ticket_type,
      amount_ticket: reservations.amount_ticket,
      ticket_used_date: ticketUsedDate,
      customer_info: reservations.customer_info,
      phone_number: reservations.phone_number,
      customer_email: reservations.customer_email,
      card_number: cardNumber,
      card_owner_name: cardOwnerName,
      expiration_date: expirationTimestamp,
      cvv_cvc: cvvCvc,
    });
  };

  const [cardNumber, setCardNumber] = useState(Number);
  const [cardOwnerName, setCardOwnerName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cvvCvc, setCvvCvc] = useState(Number);

  const reservations = useSelector(
    (state: { reservations: Reservation }) => store.getState().reservations
  );
  const ticketUsedDate = reservations.ticket_used_date;
  const dateString = ticketUsedDate.format("DD-MM-YYYY");
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
            value={reservations.ticket_type * reservations.amount_ticket}
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
          value={cardNumber}
          onChange={(e) => setCardNumber(Number(e.target.value))}
          minLength={6}
          maxLength={14}
        />
        <label>Họ tên chủ thẻ</label>
        <input
          id="card-owner-name"
          name="card-owner-name"
          type="text"
          required
          placeholder="Nhập họ tên chủ thẻ"
          value={cardOwnerName}
          onChange={handleInputChange}
        />
        <div id="box-thanh-toan">
          <label>Ngày hết hạn</label>
          <span id="payment-date">
            <div id="payment-date-picker">
              <DatePicker
                open={openSche}
                onChange={handleSche}
                suffixIcon={<></>}
                placeholder="Nhập ngày hết hạn"
                format="MM/YYYY"
              />
            </div>
            <div id="payment-date-button">
              <Button type="link" onClick={ScheduleBtn}>
                <img
                  className="calendar-btn"
                  src={Calendar_btn}
                  style={{ maxWidth: 45, maxHeight: 45, paddingTop: 7 }}
                />
              </Button>
            </div>
          </span>
        </div>
        <label>CVV/CVC</label>
        <input
          id="cvv-cvc"
          name="cvv-cvc"
          type="text"
          required
          placeholder="Nhập cvv/cvs"
          value={cvvCvc}
          onChange={(e) => setCvvCvc(Number(e.target.value))}
          maxLength={4}
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
