import React, { FC } from "react";

interface IImgRetina {
  width: number;
  height: number;
  src: string;
  srcSet?: string;
  srcWebp?: string;
}

const ImgRetina: FC<IImgRetina> = ({ width, height, src, srcSet, srcWebp }) => {
  return <img srcSet={srcSet} src={src} alt="" width={width} height={height} />;
};

export default ImgRetina;
