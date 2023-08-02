/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from "react";
import Section from "../section/Section";
import style from "./Category.module.scss";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import ImgRetina from "../imgRetina/ImgRetina";
import main from "../../images/main.jpg";
import main2 from "../../images/main@2x.jpg";

const Category: FC = () => {
  const { data } = useAppSelector((state) => state.app);

  const { category } = useParams();
  let currentTitle: string;

  if (category) {
    currentTitle = category
      .split("_")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");
  }

  const current = data.filter((item) => item.category === currentTitle)[0];

  return (
    <Section name="category">
      <div className={style.category__left}>
        <div className={[style["category__title-wrap"], "p80"].join(" ")}>
          <h1 className={style.category__title}>{current.category}</h1>
        </div>

        <figure className={style["category__img-wrap"]}>
          <ImgRetina
            width={720}
            height={720}
            src={main}
            srcSet={[main, main2].join(", ")}
          />
        </figure>
      </div>
      <div className={[style.category__right, style.column].join(" ")}>
        {current.items.map((item, i) => (
          <Link
            className={style.column__link}
            key={i}
            to={item.title.toLowerCase().split(" ").join("_")}
          >
            <div className={style.column__block}>
              <h2 className={style.column__title}>{item.title}</h2>
              <span className={style.column__price}>
                price
                <span className={style.column__val}>{` ${item.price} `}</span>$
              </span>
            </div>
            <figure className={style["column__img-wrap"]}>
              <ImgRetina
                width={360}
                height={360}
                src={item.img}
                srcSet={[item.img, item.imgBig].join(", ")}
              />
            </figure>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Category;
