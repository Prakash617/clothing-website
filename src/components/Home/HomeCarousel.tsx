import Link from 'next/link'
import React, { useEffect, useState } from "react";
import Button1 from "../reusable/Buttons/Button1";
import Carousel from "./Carousel";

type Props = {
  carouselsData: any;
};
const HomeCarousel = (props: Props) => {
  const { carouselsData } = props;
  return (
    <>
      <Carousel carouselsData={carouselsData} />
    </>
  );
};

export default HomeCarousel;

