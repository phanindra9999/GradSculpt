import React, { useContext } from "react";
import "./Contact.css";
//import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzFQUsqgAOxqgTmtBbmiPToPBkLOHGxakZfbwQcG3DdC8OzFz8GGyeGiLZTpAXkYoXYTA/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input type="text" name="Name" className="user"  placeholder="Name"/>
          <input type="email" name="Email" className="user" placeholder="Email"/>
          <input type="tel" name="Phone" className="user" placeholder="phoneNumber"/>
          <textarea name="Message" className="user" placeholder="Message"/>
          <input className="button" type="submit" value="Send" />
          {/*<span>{done && "Thanks for Contacting me"}</span> */}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
