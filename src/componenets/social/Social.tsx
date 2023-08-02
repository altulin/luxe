import React, { FC } from "react";
import style from "./Social.module.scss";
import InstagramIcon from "../../images/components/Instagram";
import FacebookIcon from "../../images/components/Facebook";
import PinterestIcon from "../../images/components/Pinterest";
import TelegramIcon from "../../images/components/Telegram";
import TwitterIcon from "../../images/components/Twitter";

const Social: FC = () => {
  return (
    <div className={style.social}>
      <a className={style.social__link} href="./" aria-label="instagram">
        <InstagramIcon />
      </a>
      <a className={style.social__link} href="./" aria-label="instagram">
        <PinterestIcon />
      </a>
      <a className={style.social__link} href="./" aria-label="instagram">
        <FacebookIcon />
      </a>
      <a className={style.social__link} href="./" aria-label="instagram">
        <TwitterIcon />
      </a>
      <a className={style.social__link} href="./" aria-label="instagram">
        <TelegramIcon />
      </a>
    </div>
  );
};

export default Social;
