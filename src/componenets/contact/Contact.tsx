import React, { FC } from "react";
import Section from "../section/Section";
import style from "./Contact.module.scss";
import ImgRetina from "../imgRetina/ImgRetina";
import img from "../../images/colum.jpg";
import img2x from "../../images/colum@2x.jpg";
import Social from "../social/Social";
import { LInkInner } from "../button/Button";
import clsx from "clsx";

const Contact: FC = () => {
  return (
    <Section name="contact">
      <div className={[style.contact__left, style["contact--first"]].join(" ")}>
        <div className={[style.left__head, "p80"].join(" ")}>
          <h2 className={[style.contact__title, "title"].join(" ")}>
            To Contact Us
          </h2>
          <p className={style.left__text}>We will call you back</p>
          <form className={style.left__form} action="#" method="post">
            <div className={style.form__label}>
              <label className={style.form__label} htmlFor="">
                <input
                  className={style.form__input}
                  type="text"
                  placeholder="+380 XX XXX XX XX"
                  required
                />
              </label>
            </div>

            <button type="submit" className={["btn", "btn--dark"].join(" ")}>
              <LInkInner label="book a call" />
            </button>
          </form>
        </div>
        <div className={style.left__bottom}>
          <div className={style.bottom__block}>
            <h3 className={[style.bottom__title, "subtitle"].join(" ")}>
              Phone
            </h3>
            <div className={style.bottom__info}>
              <a className={style.link} href="tel:+380980099777">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.link__icon}
                >
                  <path
                    d="M19.95 21C17.8 21 15.7043 20.5207 13.663 19.562C11.621 18.604 9.81267 17.3373 8.238 15.762C6.66267 14.1873 5.396 12.379 4.438 10.337C3.47933 8.29567 3 6.2 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.075 8.725 3.225C8.90833 3.375 9.01667 3.56667 9.05 3.8L9.7 7.3C9.73333 7.53333 9.72933 7.74567 9.688 7.937C9.646 8.129 9.55 8.3 9.4 8.45L6.975 10.9C7.675 12.1 8.55433 13.225 9.613 14.275C10.671 15.325 11.8333 16.2333 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3873 16.038 14.312C16.2793 14.2373 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15 20.625 15.1123 20.775 15.287C20.925 15.4623 21 15.6667 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2877 18.4583 16.963 18.625C17.6377 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z"
                    fill="black"
                  />
                </svg>
                <span className={style.link__text}>+380980099777</span>
              </a>
              <a className={style.link} href="tel:+380980099777">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.link__icon}
                >
                  <path
                    d="M19.95 21C17.8 21 15.7043 20.5207 13.663 19.562C11.621 18.604 9.81267 17.3373 8.238 15.762C6.66267 14.1873 5.396 12.379 4.438 10.337C3.47933 8.29567 3 6.2 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.075 8.725 3.225C8.90833 3.375 9.01667 3.56667 9.05 3.8L9.7 7.3C9.73333 7.53333 9.72933 7.74567 9.688 7.937C9.646 8.129 9.55 8.3 9.4 8.45L6.975 10.9C7.675 12.1 8.55433 13.225 9.613 14.275C10.671 15.325 11.8333 16.2333 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3873 16.038 14.312C16.2793 14.2373 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15 20.625 15.1123 20.775 15.287C20.925 15.4623 21 15.6667 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2877 18.4583 16.963 18.625C17.6377 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z"
                    fill="black"
                  />
                </svg>
                <span className={style.link__text}>+380980099777</span>
              </a>
            </div>
          </div>

          <div
            className={clsx(style.bottom__block, style["bottom__block--right"])}
          >
            <h3 className={[style.bottom__title, "subtitle"].join(" ")}>
              Address
            </h3>
            <div className={style.bottom__info}>
              <p className={style.bottom__time}>opening hours: 8 to 11 p.m.</p>
              <a className={style.link} href="./">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.link__icon}
                >
                  <path
                    d="M12.5 16.975C14.15 15.6417 15.396 14.3583 16.238 13.125C17.0793 11.8917 17.5 10.7333 17.5 9.65C17.5 8.71667 17.3293 7.92067 16.988 7.262C16.646 6.604 16.225 6.07067 15.725 5.662C15.225 5.254 14.6833 4.95833 14.1 4.775C13.5167 4.59167 12.9833 4.5 12.5 4.5C12.0167 4.5 11.4833 4.59167 10.9 4.775C10.3167 4.95833 9.775 5.254 9.275 5.662C8.775 6.07067 8.35433 6.604 8.013 7.262C7.671 7.92067 7.5 8.71667 7.5 9.65C7.5 10.7333 7.92067 11.8917 8.762 13.125C9.604 14.3583 10.85 15.6417 12.5 16.975ZM12.5 19.5C10.15 17.7667 8.39567 16.0833 7.237 14.45C6.079 12.8167 5.5 11.2167 5.5 9.65C5.5 8.46667 5.71267 7.429 6.138 6.537C6.56267 5.64567 7.10833 4.9 7.775 4.3C8.44167 3.7 9.19167 3.25 10.025 2.95C10.8583 2.65 11.6833 2.5 12.5 2.5C13.3167 2.5 14.1417 2.65 14.975 2.95C15.8083 3.25 16.5583 3.7 17.225 4.3C17.8917 4.9 18.4377 5.64567 18.863 6.537C19.2877 7.429 19.5 8.46667 19.5 9.65C19.5 11.2167 18.9207 12.8167 17.762 14.45C16.604 16.0833 14.85 17.7667 12.5 19.5ZM12.5 11.5C13.05 11.5 13.521 11.304 13.913 10.912C14.3043 10.5207 14.5 10.05 14.5 9.5C14.5 8.95 14.3043 8.479 13.913 8.087C13.521 7.69567 13.05 7.5 12.5 7.5C11.95 7.5 11.4793 7.69567 11.088 8.087C10.696 8.479 10.5 8.95 10.5 9.5C10.5 10.05 10.696 10.5207 11.088 10.912C11.4793 11.304 11.95 11.5 12.5 11.5ZM5.5 22.5V20.5H19.5V22.5H5.5Z"
                    fill="black"
                  />
                </svg>
                <span className={style.addr__text}>
                  15/4 Khreshchatyk Street, Kyiv{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.contact__right}>
        <figure className={style["right__img-wrap"]}>
          <ImgRetina
            width={720}
            height={642}
            src={img}
            srcSet={[img, img2x].join(", ")}
          />
        </figure>
        <div className={style.right__bottom}>
          <h3 className={["subtitle", style.right__title].join(" ")}>
            Follow us
          </h3>

          <div className={style.right__social}>
            <Social />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
