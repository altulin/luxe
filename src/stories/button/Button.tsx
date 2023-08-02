import React, { FC } from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

interface IButton {
  type: "link" | "submit";
  label: string;
  styleBtn?: "default" | "secondary" | "dark";
  href: string;
}

interface IComponent {
  label: string;
  style?: string;
  href?: string;
}

interface ILinkInner {
  label: string;
}

const LInkInner: FC<ILinkInner> = ({ label }) => {
  return (
    <div className={styles.btn__inner}>
      <div className={styles["btn__wrap-text"]}>
        <div className={styles["btn__text"]}>{label}</div>
        <div
          className={[styles["btn__text"], styles["btn__text--hide"]].join(" ")}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

const CompLink: FC<IComponent> = ({ label, style, href }) => {
  return (
    <a
      className={[
        styles.btn,
        styles[`btn--${style}`],
        styles["btn--link"],
        "link",
      ].join(" ")}
      href={href || "/"}
    >
      <LInkInner label={label} />
    </a>
  );
};

const CompButton: FC<IComponent> = ({ label, style }) => {
  return (
    <button
      className={[
        styles.btn,
        styles[`btn--${style}`],
        styles["btn--submit"],
      ].join(" ")}
      type="submit"
    >
      <LInkInner label={label} />
    </button>
  );
};

export const Button: FC<IButton> = ({ type, label, styleBtn, href }) => {
  return (
    <>
      {/* {type === "link" && <CompLink label={label} style={styleBtn} />} */}
      {/* {type === "submit" && <CompButton label={label} style={styleBtn} />} */}
      <Link to="/">{/* <LInkInner label={label} /> */}</Link>
      <h1>frrrrr</h1>
    </>
  );
};
