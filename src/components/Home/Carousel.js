import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button1 from "../reusable/Buttons/Button1";

const Carousel = (props) => {
  const { carouselsData } = props;
  const images = carouselsData?.carousels?.edges.map((item) => {
    return item?.node?.media[0]?.media;
  });

  const [currentImage, setCurrentImage] = useState(0);

  const refs = images?.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = images?.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-1 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "‹" : "›"}
      </span>
    </button>
  );

  return (
    <div className="p-12 flex justify-center w-full items-center bg-green">
      <div className="relative w-full">
        <div
          className="inline-flex overflow-x-hidden"
          style={{
            overflow: "hidden",
            height: "850px",
          }}
        >
          {sliderControl(true)}
          <div className="flex flex-col pl-5 md:pl-12 h-full justify-center py-5 lg:absolute ">
            <div className="p-3 px-5 rounded-full w-fit text-sm md:text-lg uppercase bg-white text-slate-700 tracking-[.2rem]">
              Women's Collections
            </div>
            <div className="text-[6rem] md:text-[12rem] h-fit w-fit uppercase font-semibold text-black">
              2k<i className="text-primary">22</i>
            </div>
            <div className="tracking-[1rem] text-white h-fit uppercase">
              summer collection
            </div>
            <br />
            <div className="w-fit">
              <Button1 color={"text-white"} type="text" text={"Go To Shop"} />
            </div>
          </div>
          {carouselsData?.carousels?.edges.map((img, i) => (
            <div className="w-full flex-shrink-0" key={i} ref={refs[i]}>
              <img
                src={img?.node?.media[0]?.media}
                className="w-full object-cover"
                style={{
                  overflow: "hidden",
                  height: "850px",
                }}
              />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
