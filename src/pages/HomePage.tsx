import React, { FC } from "react";

import Promo from "../componenets/promo/Promo";
import About from "../componenets/about/About";
import Choose from "../componenets/choose/Choose";
import Contact from "../componenets/contact/Contact";
import Service from "../componenets/service/Service";
import Wedding from "../componenets/wedding/Wedding";
import Reviews from "../componenets/reviews/Reviews";

const HomePage: FC = () => {
  return (
    <>
      <Promo />
      <About />
      <Choose />
      <Contact />
      <Service />
      <Wedding />
      <Reviews />
    </>
  );
};

export default HomePage;
