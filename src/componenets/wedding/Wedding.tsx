import React, { FC } from "react";
import style from "./Wedding.module.scss";
import Button from "../button/Button";

const Wedding: FC = () => {
  return (
    <section className={[style.wedding].join(" ")}>
      <div className={[style.wedding__inner, "p80"].join(" ")}>
        <div className={style.wedding__info}>
          <span className={style.wedding__head}>service</span>
          <h2 className={[style.wedding__title, "title"].join(" ")}>
            Wedding & Event Decor
          </h2>
          <p className={style.wedding__text}>
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
          <Button label="Subscribe Now" />
        </div>
      </div>
    </section>
  );
};

export default Wedding;
