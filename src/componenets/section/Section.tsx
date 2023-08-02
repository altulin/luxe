import React, { FC } from "react";
import style from "./Section.module.scss";

interface ISection {
  name: string;
  reverse?: boolean;
  children: React.ReactNode | React.ReactNode[];
  border?: boolean;
}

const Section: FC<ISection> = ({ name, reverse, children, border }) => {
  return (
    <section
      className={
        !reverse
          ? [style[`${name}`], style["section-grid"]].join(" ")
          : [
              style[`.${name}`],
              style["section-grid"],
              style["section-grid--reverse"],
            ].join(" ")
      }
    >
      {children}
    </section>
  );
};

export default Section;
