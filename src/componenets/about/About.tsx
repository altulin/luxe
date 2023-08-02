import React, { FC } from "react";
import Section from "../section/Section";
import style from "./About.module.scss";
import Button from "../button/Button";

const About: FC = () => {
  return (
    <Section name="about">
      <div className={style.about__left}>
        <h2 className={[style.about__title, "title"].join(" ")}>About us</h2>
      </div>
      <div className={style.about__right}>
        <div className={style.about__block}>
          <p className={style.about__head}>our story</p>
          <div className={style.about__inner}>
            <h3 className={style.about__subtitle}>Kyiv LuxeBouquets</h3>
            <p className={style.text}>
              We are a modern local floral studio, which specializes in the
              design and delivery of unique bouquets. We have the best florists
              who carefully select each look, our studio cooperates directly
              with farms for growing different flowers, so we always have fresh
              flowers, which are collected by our florists in exquisite
              bouquets. We have a collection of fresh bouquets, collections of
              dried bouquets, house plants, as well as fragrant candles from
              luxury brands to create the perfect atmosphere. Make someone's day
              amazing by sending flowers, plants and gifts the same or next day.
              Ordering flowers online has never been easier.
            </p>
          </div>

          <Button label="Learn more" type="secondary" />
        </div>
      </div>
    </Section>
  );
};

export default About;
