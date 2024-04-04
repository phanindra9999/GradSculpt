import React, { useContext } from "react";
import "./Collaborations.css";
import { themeContext } from "../../Context";

import {Link} from 'react-scroll'
import { motion } from "framer-motion";
const Collaborations = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="collaborations" id="collaborations">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Students & EdTechs</span>
          <span>
            If you belive us, we will guide you in a right direction
            <br />
            Your future will decide on your goals
            <br />
            We make sure that we will be walking with you until
            <br />
            you reach your goals.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Meet Us</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
        {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
           {/* <img src={Upwork} alt="" /> */}
          </div>
          <div className="w-secCircle">
          {/* Insert the image here  */}
          </div>
          <div className="w-secCircle">
           {/* Insert the image here also*/}
          </div>
          <div className="w-secCircle">
           {/* Insert the image here also */}
          </div>
          <div className="w-secCircle">
           {/* insert the image here also */}
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
    
  );
};

export default Collaborations;
