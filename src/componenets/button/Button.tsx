import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

interface IButton {
  to?: string;
  label: string;
  type?: "secondary" | "dark";
}

interface ILinkInner {
  label: string;
}

export const LInkInner: FC<ILinkInner> = ({ label }) => {
  return (
    <div className={"btn__inner"}>
      <div className={"btn__wrap-text"}>
        <div className={"btn__text"}>{label}</div>
        <div className={["btn__text", "btn__text--hide"].join(" ")}>
          {label}
        </div>
      </div>
    </div>
  );
};

const Button: FC<IButton> = ({ to, label, type }) => {
  return (
    <Link className={["btn", `btn--${type}`].join(" ")} to={to || "/"}>
      <LInkInner label={label} />
    </Link>
  );
};

export default Button;
