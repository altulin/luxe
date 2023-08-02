import React, { FC } from "react";
import Section from "../section/Section";
import style from "./Service.module.scss";
import Button from "../button/Button";
import ImgRetina from "../imgRetina/ImgRetina";
import img from "../../images/image.jpg";
import img2x from "../../images/image@2x.jpg";

const Service: FC = () => {
  return (
    <div className={style.service}>
      <div className={[style.service__head, "p80"].join(" ")}>
        <h2 className={[style.service__title, "title"].join(" ")}>
          Our Service
        </h2>
      </div>
      <Section name="service">
        <figure className={style["service__img-wrap"]}>
          <ImgRetina
            width={720}
            height={642}
            src={img}
            srcSet={[img, img2x].join(", ")}
          />
        </figure>
        <div className={[style.service__info, "p80"].join(" ")}>
          <span className={style.info__head}>service</span>
          <h3 className={[style.info__title, "title"].join(" ")}>
            Flower Subcriptions
          </h3>
          <p className={style.info__text}>
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
          <Button label="Subscribe Now" />
        </div>
      </Section>
    </div>
  );
};

export default Service;
