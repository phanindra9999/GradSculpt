import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>gradsculpt@gmail.com</span>
        <div className="f-icons">
         <a href="https://www.instagram.com/gradsculpt/" target="_blank"><Insta color="white" size={"3rem"} /></a>
         <a href="https://youtube.com/@GradSculpt?si=8nDgWzxZb4M8v-sB" target="_blank"><Youtube color="white" size={"3rem"}/></a>
         <a href="https://www.linkedin.com/company/gradsculpt/" target="_blank"><LinkedIn color="white" size={"3rem"}/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
