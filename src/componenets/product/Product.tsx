import React, { FC, useState, useRef } from "react";
import Section from "../section/Section";
import style from "./Product.module.scss";
import ImgRetina from "../imgRetina/ImgRetina";
import main from "../../images/left colum.jpg";
import main2 from "../../images/left colum@2x.jpg";
import { useParams, Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { clsx } from "clsx";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LInkInner } from "../button/Button";

const Slide: FC = () => {
  return (
    <div className={style.slide}>
      <figure className={style.slide__img}></figure>
      <span className={style.slide__title}>Glass Vase</span>
      <span className={style.slide__price}>$15</span>
    </div>
  );
};

const Quantity: FC = () => {
  const [value, setValue] = useState(1);

  const inputRef = useRef(null);
  return (
    <div className={clsx(style.add__quantity, style.quantity)}>
      <p className={style.quantity__title}>Quantity</p>
      <div className={style.quantity__control}>
        <button
          className={clsx(style.quantity__btn, style["quantity__btn--minus"])}
          onClick={() => {
            setValue((prevState) => {
              return prevState === 1 ? 1 : prevState - 1;
            });
          }}
        >
          <svg
            width="20"
            height="2"
            viewBox="0 0 20 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.5 1.5H0.5V0.5H19.5V1.5Z" fill="#121212" />
          </svg>
        </button>
        <label className={style.quantity__label} htmlFor="quantity-input">
          <input
            ref={inputRef}
            id="quantity-input"
            className={style.quantity__input}
            type="text"
            name="quantity"
            form="product"
            value={value}
            readOnly
            size={1}
          />
        </label>
        <button
          className={clsx(style.quantity__btn, style["quantity__btn--plus"])}
          onClick={() => {
            setValue((prevState) => {
              return prevState + 1;
            });
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.5 10.5H0.5V9.5H19.5V10.5Z" fill="#121212" />
            <path d="M10.5 0.5V19.5H9.5V0.5H10.5Z" fill="#121212" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Product: FC = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const { data } = useAppSelector((state) => state.app);
  const { product, category } = useParams();
  let currentCategory: string;
  let currentProduct: string;

  if (category) {
    currentCategory = category
      .split("_")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");
  }

  if (product) {
    currentProduct = product
      .split("_")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");
  }

  const itemCategory = data.filter(
    (item) => item.category === currentCategory
  )[0];
  const itemProduct = itemCategory.items.filter(
    (item) => item.title === currentProduct
  )[0];

  return (
    <Section name="product">
      <div className={style.product__left}>
        <figure className={style["product__img-wrap"]}>
          <ImgRetina
            width={720}
            height={753}
            src={main}
            srcSet={[main, main2].join(", ")}
          />
        </figure>
      </div>
      <div className={[style.product__right, style.add].join(" ")}>
        <ul className={[style.add__bread, style.bread].join(" ")}>
          <li className={style.bread__item}>
            {category && (
              <Link className={style.bread__link} to={`/${category}`}>
                {itemCategory.category} /{" "}
              </Link>
            )}
          </li>
          <li className={style.bread__item}>
            {product && (
              <span className={style.bread__current}>
                {" "}
                {`${itemProduct.title}`}
              </span>
            )}
          </li>
        </ul>
        <h1 className={style.add__title}>
          {itemProduct.title} - $
          <span className={style.add__price}>{itemProduct.price}</span>
        </h1>

        <p className={style.add__description}>
          Large exceptional bouquet composed of a selection of David Austin
          roses, known for their beauty and subtle fragrance. The bouquet is
          accompanied by seasonal foliage which will enhance these sublime
          flowers even
        </p>

        <Quantity />

        <div className={clsx(style.add__excellent, style.excellent)}>
          <span className={style.excellent__title}>
            Excellent Combination with:
          </span>
          <span className={style.excellent__value}>Vase Not Included</span>
        </div>

        <div className={style["add__swiper-wrap"]}>
          <Swiper
            className={style.add__swiper}
            modules={[Navigation]}
            slidesPerView={5}
            loop
            navigation={{
              nextEl: navigationNextRef.current,
              prevEl: navigationPrevRef.current,
            }}
            onBeforeInit={(swiper) => {
              (swiper.navigation as any).prevEl = navigationPrevRef.current;
              (swiper.navigation as any).nextEl = navigationNextRef.current;
            }}
          >
            {Array(10)
              .fill("")
              .map((_, i) => (
                <SwiperSlide key={i}>
                  <Slide />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className={clsx(style.add__navigation, style.navigation)}>
            <button
              ref={navigationPrevRef}
              className={clsx(
                style.navigation__btn,
                style["navigation__btn--prev"]
              )}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4312 3.86614L22.6646 15.0661C22.7979 15.1995 22.8921 15.3439 22.9473 15.4995C23.0033 15.655 23.0312 15.8217 23.0312 15.9995C23.0312 16.1773 23.0033 16.3439 22.9473 16.4995C22.8921 16.655 22.7979 16.7995 22.6646 16.9328L11.4312 28.1661C11.1201 28.4773 10.7312 28.6328 10.2646 28.6328C9.79792 28.6328 9.39792 28.4661 9.06458 28.1328C8.73125 27.7995 8.56458 27.4106 8.56458 26.9661C8.56458 26.5217 8.73125 26.1328 9.06458 25.7995L18.8646 15.9995L9.06458 6.19948C8.75347 5.88837 8.59792 5.50526 8.59792 5.05014C8.59792 4.59414 8.76458 4.19948 9.09792 3.86614C9.43125 3.53281 9.82014 3.36614 10.2646 3.36614C10.709 3.36614 11.0979 3.53281 11.4312 3.86614Z"
                  fill="#121212"
                />
              </svg>
            </button>
            <button
              className={clsx(
                style.navigation__btn,
                style["navigation__btn--next"]
              )}
              ref={navigationNextRef}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4312 3.86614L22.6646 15.0661C22.7979 15.1995 22.8921 15.3439 22.9473 15.4995C23.0033 15.655 23.0312 15.8217 23.0312 15.9995C23.0312 16.1773 23.0033 16.3439 22.9473 16.4995C22.8921 16.655 22.7979 16.7995 22.6646 16.9328L11.4312 28.1661C11.1201 28.4773 10.7312 28.6328 10.2646 28.6328C9.79792 28.6328 9.39792 28.4661 9.06458 28.1328C8.73125 27.7995 8.56458 27.4106 8.56458 26.9661C8.56458 26.5217 8.73125 26.1328 9.06458 25.7995L18.8646 15.9995L9.06458 6.19948C8.75347 5.88837 8.59792 5.50526 8.59792 5.05014C8.59792 4.59414 8.76458 4.19948 9.09792 3.86614C9.43125 3.53281 9.82014 3.36614 10.2646 3.36614C10.709 3.36614 11.0979 3.53281 11.4312 3.86614Z"
                  fill="#121212"
                />
              </svg>
            </button>
          </div>
        </div>

        <form id="product" className={clsx(style.add__options, style.options)}>
          <span className={style.options__title}>Price options</span>

          <label className={style.options__label}>
            <input
              className={style.options__input}
              type="radio"
              checked
              name="options"
              readOnly
            />
            <span className={style.options__radio}></span>
            <span className={style.options__text}>
              One time purchase. Price $100
            </span>
          </label>

          <label className={style.options__label}>
            <input
              className={style.options__input}
              type="radio"
              name="options"
              readOnly
            />
            <span className={style.options__radio}></span>
            <span className={style.options__text}>
              Subscribe now, and save 25% on this order.
            </span>
          </label>
        </form>

        <button
          type="submit"
          className={clsx(style.add__submit, "btn", "btn--dark")}
        >
          <LInkInner label="Add to basket" />
        </button>
      </div>
    </Section>
  );
};

export default Product;
