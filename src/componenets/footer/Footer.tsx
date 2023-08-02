import React, { FC } from "react";
import style from "./Footer.module.scss";
import Button from "../button/Button";
import form from "../contact/Contact.module.scss";
import Social from "../social/Social";
import { LInkInner } from "../button/Button";

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__column}>
        <p className={style.footer__text}>
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
          sharing your address
        </p>
        <form
          className={[form.left__form, style.form].join(" ")}
          action="#"
          method="post"
        >
          <div className={[form.form__block, style.form__block].join(" ")}>
            <label className={form.form__label} htmlFor="">
              <input
                className={form.form__input}
                type="text"
                placeholder="Your Email"
                required
              />
            </label>
          </div>

          <button type="submit" className={["btn", "btn--dark"].join(" ")}>
            <LInkInner label="book a call" />
          </button>
        </form>
      </div>
      <div className={style.footer__column}>
        <div className={style.footer__content}>
          <span className={style.footer__title}>Contact Us</span>
          <div className={style.footer__block}>
            <span className={style.footer__head}>Address</span>
            <Button label="15/4 Khreshchatyk Street, Kyiv" />
          </div>

          <div className={style.footer__block}>
            <span className={style.footer__head}>Phone</span>
            <Button label="+380980099777" />
          </div>

          <div className={style.footer__block}>
            <span className={style.footer__head}>General Enquiry:</span>
            <Button label="Kiev.Florist.Studio@gmail.com" />
          </div>
        </div>

        <div className={style.footer__content}>
          <span className={style.footer__title}>Follow Us</span>
          <Social />
        </div>
      </div>
      <div className={style.footer__column}>
        <div className={style.footer__content}>
          <span className={style.footer__title}>Shop</span>
          <div className={style.footer__block}>
            <Button label="All Products" />
            <Button label="Fresh Flowers" />
            <Button label="Dried Flowers" />
            <Button label="Live Plants" />
            <Button label="Designer Vases" />
            <Button label="Aroma Candles" />
            <Button label="Freshener Diffuser" />
          </div>
        </div>

        <div className={style.footer__content}>
          <span className={style.footer__title}>Service</span>
          <div className={style.footer__block}>
            <Button label="Flower Subcription" />
            <Button label="Wedding & Event Decor" />
          </div>
        </div>
      </div>
      <div className={style.footer__column}>
        <div className={style.footer__content}>
          <span className={style.footer__title}>About Us</span>
          <div className={style.footer__block}>
            <Button label="Our story" />
            <Button label="Blog" />
            <br />
            <Button label="Shipping & returns" />
            <Button label="Terms & conditions" />
            <Button label="Privacy policy" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
