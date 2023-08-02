import React, { FC } from "react";
import Header from "../componenets/header/Header";

import Footer from "../componenets/footer/Footer";

import { Outlet } from "react-router-dom";

const Template: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Template;
