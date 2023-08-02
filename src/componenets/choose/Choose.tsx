import React, { FC } from "react";
import Section from "../section/Section";
import style from "../about/About.module.scss";

const Choose: FC = () => {
  return (
    <Section name="choose">
      <div className={style.about__left}>
        <h2 className={[style.about__title, "title"].join(" ")}>
          Why choose us ?
        </h2>
      </div>
      <div className={style.about__right}>
        <div className={style.about__block}>
          <h3 className={style.about__subtitle}>
            Stylish bouquets by florists
          </h3>
          <p className={style.text}>
            At our floral studio, our professional florists craft the most
            elegant and stylish bouquets using only the freshest and highest
            quality materials available. We stay up-to-date with the latest
            floral design trends and offer unique arrangements that are sure to
            impress. Let us brighten up your day with our stunning bouquets and
            same-day delivery service.
          </p>
        </div>
        <div className={style.about__block}>
          <h3 className={style.about__subtitle}>On-time delivery</h3>
          <p className={style.text}>
            Never miss a moment with our on-time flower delivery service. Our
            couriers will deliver your bouquet personally, without boxes, to
            ensure it arrives in perfect condition. Trust us to deliver your
            thoughtful gift reliably.
          </p>
        </div>
        <div className={style.about__block}>
          <h3 className={style.about__subtitle}>Safe payment</h3>
          <p className={style.text}>
            You can feel secure when placing an order with us, as we use
            industry-standard security measures to protect your payment
            information. Your transaction will be safe and hassle-free, so you
            can shop with confidence.
          </p>
        </div>
        <div className={style.about__block}>
          <h3 className={style.about__subtitle}>Subscription by your needs</h3>
          <p className={style.text}>
            With our subscription service tailored to your specific needs, you
            can enjoy the convenience of having beautiful bouquets delivered
            straight to your door at regular intervals. Our flexible service is
            perfect for busy individuals or those who want to ensure they always
            have fresh flowers on hand. You'll save time and money with this
            hassle-free solution to your floral needs.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Choose;
