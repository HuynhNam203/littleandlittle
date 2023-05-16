import React from "react";
import { Header } from "../header/Header";
import Khung from "../../assets/khung-eventdetail.png";
import Khung2 from "../../assets/khung-contact.png";
import RedHair from "../../assets/redhair-incontact.png";
import Mail from "../../assets/mail.svg";
import Phone2 from "../../assets/phone2.svg";
import Location from "../../assets/location.svg";

import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <h3 id="contact-head-title">Liên hệ</h3>
      <img src={Khung} alt="khung" id="khung1" />
      <img src={Khung2} alt="khung" id="khung2" />
      <img src={Khung2} alt="khung" id="khung3" />
      <img src={Khung2} alt="khung" id="khung4" />
      <img src={RedHair} alt="nvat" id="redhair" />
      <div id="contact-form">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere
          ex facilisis.
        </p>
        <input id="name" name="name" type="text" required placeholder="Tên" />
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email"
        />
        <input
          id="phonenum"
          name="phonenum"
          type="number"
          required
          placeholder="Số điện thoại"
        />
        <input
          id="address"
          name="address"
          type="text"
          required
          placeholder="Địa chỉ"
        />

        <textarea
          id="feedback"
          name="feedback"
          placeholder="Lời nhắn"
        ></textarea>
        <div id="submit-feedback">
          <button className="submit-btn">Gửi liên hệ</button>
        </div>
      </div>

      <div id="contact-location">
        <img src={Location} alt="location-icon" id="location-icon" />
        <div id="contact-context">
          <span id="location-box-content">
            <a id="location-title">Địa chỉ:</a>
            <br />
            86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
          </span>
        </div>
      </div>
      <div id="contact-email">
        <img src={Mail} alt="email-icon" id="email-icon" />
        <div id="contact-context">
          <span id="location-box-content">
            <a id="location-title">Email:</a>
            <br />
            investigate@your-site.com
          </span>
        </div>
      </div>
      <div id="contact-phone">
        <img src={Phone2} alt="phone-icon" id="phoneC-icon" />
        <div id="contact-context">
          <span id="location-box-content">
            <a id="location-title">Điện thoại:</a>
            <br />
            +84 145 689 798
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
