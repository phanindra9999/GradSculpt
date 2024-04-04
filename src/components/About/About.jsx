import React, { useContext } from "react";
import "./About.css";
import "swiper/css";

import { themeContext } from "../../Context";
const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id="about">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>About</span>
      <span>GradSculpt</span>
      <div className="a-left">
        <h1>Welcome to GradSculpt, your compass in the journey of career exploration and development. At GradSculpt, we believe that each student possesses unique talents and passions, and our mission is to guide them towards discovering their ideal career path.Through our collaborative efforts with leading EdTech platforms, we offer comprehensive career guidance services designed to empower students to explore diverse fields and industries. Our tailored approach focuses on helping students identify their strengths, interests, and aspirations, paving the way for informed decision-making. At GradSculpt, we understand the importance of practical experience in shaping future careers. That's why we partner with top companies to provide internship programs that offer invaluable industrial exposure. These opportunities not only enhance students' skill sets but also allow them to gain firsthand knowledge of their desired fields. Whether you're a student navigating the maze of career choices or an educational institution seeking to empower your students with practical skills, GradSculpt is here to support you every step of the way. Join us in sculpting a brighter future, one career at a time.</h1>
      </div>
  <div className="a-right">
    
  </div>
    </div>
  );
};

export default About;
