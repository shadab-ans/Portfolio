import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import Fade from "react-reveal/Fade";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "I was impressed by his incredible efforts, creativity, and professionalism at every stage of the process.",
  },
  {
    avatar: AVTR2,
    name: "David Wale",
    review: "The vision and the creatives he came up with were insanely good.",
  },
  {
    avatar: AVTR3,
    name: "Shane Despite",
    review:
      "He was aligned with our vision every step of the way and pleasant to work with.",
  },
  {
    avatar: AVTR4,
    name: "Lux Marry",
    review:
      "He was able to work on multiple projects with different tones and styles and make each one feel unique.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Fade bottom>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
      </Fade>

      <Fade bottom>
        <Swiper
          className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <Fade bottom>
                  <div className="client__avatar">
                    <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
                </Fade>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Fade>
    </section>
  );
};

export default Testimonials;
