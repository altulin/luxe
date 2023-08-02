import React, { FC } from "react";
import styles from "./BlackBtn.module.scss";

interface IBlackBtn {
  type: "link" | "submit";
  label: string;
  style?: "default";
}

interface IComponent {
  label: string;
  style?: string;
}

const CompLink: FC<IComponent> = ({ label, style }) => {
  return (
    <a
      className={[
        styles.btn,
        styles[`btn--${style}`],
        styles["btn--link"],
      ].join(" ")}
      href="/"
    >
      {label}
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
      {label}
    </button>
  );
};

const BlackBtn: FC<IBlackBtn> = ({ type, label, style }) => {
  return (
    <>
      {type === "link" && <CompLink label={label} style={style} />}
      {type === "submit" && <CompButton label={label} style={style} />}
    </>
  );
};

export default BlackBtn;
