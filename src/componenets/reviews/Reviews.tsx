import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Reviews.module.scss";
import Button from "../button/Button";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import img from "../../images/google.svg";

const Slide: FC = () => {
  return (
    <div className={style.slide}>
      <a className={style.slide__logo} href="https://www.google.ru/?hl=ru">
        <img
          className={style["slide__logo-img"]}
          src={img}
          alt="logo"
          width={77}
          height={28}
        />
      </a>
      <span className={style.slide__head}>service</span>
      <h2 className={[style.slide__title, "title"].join(" ")}>
        Our Clients say
      </h2>
      <p className={style.slide__text}>
        “Ordered flowers online and they were the best bouquet! Impressed
        everyone around. Highly recommend this flower shop!”
      </p>
      <span className={style.slide__autor}>– Ronald Richards</span>
    </div>
  );
};

const Reviews: FC = () => {
  return (
    <section className={[style.reviews, "p80"].join(" ")}>
      <div className={style.reviews__inner}>
        <Swiper modules={[Navigation, Pagination]} navigation pagination>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <SwiperSlide key={i}>
                <Slide />
              </SwiperSlide>
            ))}
        </Swiper>

        <Button label="Subscribe Now" />
      </div>
    </section>
  );
};

export default Reviews;
