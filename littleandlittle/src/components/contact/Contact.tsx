import React from "react";
import { Header } from "../header/Header";
import Khung from "../../assets/khung-eventdetail.png";
import Khung2 from "../../assets/khung-contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <img src={Khung} alt="khung" id="khung1" />
      <img src={Khung2} alt="khung" id="khung2" />
      <img src={Khung2} alt="khung" id="khung3" />
      <img src={Khung2} alt="khung" id="khung4" />
      <div id="contact-form">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere
          ex facilisis.
        </p>
      </div>
    </div>
  );
};

export default Contact;
