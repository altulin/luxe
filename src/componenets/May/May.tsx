import React, { FC } from "react";
import clsx from "clsx";
import style from "./May.module.scss";

const May: FC = () => {
  const mayList = [
    { title: "Rattan Grapefruit", price: "48" },
    { title: "Lime & Matcha", price: "46" },
    { title: "Cedar & Lavender ", price: "64" },
    { title: "Ocean Mist", price: "58" },
  ];
  return (
    <div className={clsx(style.may)}>
      <div className={clsx(style.may__head, "p80")}>
        <h2 className={clsx("subtitle", style.may__title)}>
          You may also like…
        </h2>
      </div>
      <ul className={style.may__list}>
        {mayList.map((item: { title: string; price: string }, i) => {
          return (
            <li key={i} className={style.may__item}>
              <figure className={style.may__img}></figure>
              <h3 className={style.may__subtitle}>{item.title}</h3>
              <span className={style.may__price}>
                <span className={style.may__text}>price </span>
                <span className={style.may__text}>{item.price}</span>$
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default May;
