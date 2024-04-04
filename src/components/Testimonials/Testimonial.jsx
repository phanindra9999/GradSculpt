import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/jaswanth.jpeg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/gopal.jpeg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "My name is Jaswanth N, student of NRI college of engineering, CSE. As a normal student, I let the time to pass for 2 years and finally my career got into my mind, I was a little worried about my professional career and i found “GRADSCULPT” in social media, It changed my thinking and helped me to road map my remaining 2 years to reach my professional goal. Now I am confident enough to achieve my goal. Thank you Gradsculpt.",
    },
    {
      img: profilePic2,
      review:
        "This is sahithya, student of Manipal institute of technology, specilization of ECE. Currently in my 2nd year I'm passionate about VLSI . I have no proper plan to reach it. I thought it would be better if someone is there to guide me and i found GRADSCULPT they explained me each and everything about VLSI and they prepared a proper roadmap by offering the courses. Now I'm confident enough to reach my goal .Thank you Gradsculpt.",
    },
    {
      img: profilePic3,
      review:
        "Myself Gopal Krishna, I am a student from NIT Sikkim, currently in my 1 st year of EEE but my aim is to be a software engineer. I got confused about how to manage. Then i found GRADSCULPT they helped me to plan my 4 years of my study with proper road map and By their courses they helped me to find my suitable career path. Thank you Gradsculpt.",
    },
    {
      img: profilePic4,
      review:
        "This is Dyushanth. I am a CSE final year student and I don't know what career opportunities I do have, until i met GradSculpt. Their career guidance team helped me in exploring different career paths by equipping me with required skill set and by their valuable support.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Students always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
