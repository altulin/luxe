import React, { FC, useRef } from "react";
import Section from "../section/Section";
import style from "./Promo.module.scss";
import ImgRetina from "../imgRetina/ImgRetina";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { clsx } from "clsx";

import hero from "../../images/webp/hero.webp";
import hero2 from "../../images/webp/hero@2x.webp";

interface IFlower {
  img: string;
  imgBig: string;
  title: string;
  reverse?: boolean;
  id: string;
}

const Flower: FC<IFlower> = ({ img, imgBig, title, reverse, id }) => {
  const flowerRef = useRef<HTMLDivElement>(null);

  const handleEnter = (e: any) => {
    if (flowerRef) {
      (flowerRef.current as HTMLDivElement).classList.add(style["js-hover"]);
    }
  };

  const handleLeave = (e: any) => {
    if (flowerRef) {
      (flowerRef.current as HTMLDivElement).classList.remove(style["js-hover"]);
    }
  };

  return (
    <div
      ref={flowerRef}
      className={clsx(style.flower, reverse && style["flower--reverse"])}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className={clsx(
          style.flower__left,
          reverse && style["flower__left--reverse"]
        )}
      >
        <h3 className={style.flower__title}>{title}</h3>

        <Link
          className={style.flower__link}
          to={title.toLowerCase().split(" ").join("_")}
        >
          <span className={style.flower__label}>Shop now</span>
          <svg
            className={style.flower__icon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
      <Link
        to={title.toLowerCase().split(" ").join("_")}
        className={clsx(
          style.flower__right,
          reverse && style["flower__right--reverse"]
        )}
      >
        <figure className={style["flower__img-wrap"]}>
          <ImgRetina
            width={360}
            height={360}
            src={img}
            srcSet={[img, imgBig].join(", ")}
          />
        </figure>
      </Link>
    </div>
  );
};

const PromoLeft: FC = () => {
  return (
    <div className={style.info}>
      <div className={[style.head].join(" ")}>
        <h1 className={style.head__title}>
          Kyiv
          <br /> LuxeBouquets
          <sup>®</sup>
        </h1>
        <p className={style.head__text}>
          Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
          Joy with Our Online Flower Delivery Service
        </p>
      </div>
      <div className={style.down}>
        <div className={style.down__left}>
          <figure className={style["down__img-wrap"]}>
            <ImgRetina
              width={256}
              height={256}
              src={hero}
              srcSet={[hero, hero2].join(", ")}
            />
          </figure>
        </div>

        <div className={style.down__right}>
          <p className={style.down__text}>
            Experience the joy of giving with our modern floral studio. Order
            online and send fresh flowers, plants and gifts today.
          </p>
        </div>
      </div>
    </div>
  );
};

interface IPromoRight {}

const PromoRight: FC<IPromoRight> = () => {
  const { data } = useAppSelector((state) => state.app);

  return (
    <div className={style.promo__right}>
      {data.map((item, i) => (
        <Flower
          key={i}
          id={item.id}
          img={item.img}
          imgBig={item.imgBig}
          title={item.category}
          reverse={i % 2 !== 0}
        />
      ))}
    </div>
  );
};

const Promo = () => {
  return (
    <Section name="promo">
      <PromoLeft />
      <PromoRight />
    </Section>
  );
};

export default Promo;
