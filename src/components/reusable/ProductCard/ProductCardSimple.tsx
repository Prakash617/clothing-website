import Link from 'next/link';
import React, { useState } from 'react'
import ProductCardIcons from "./ProductCardIcons";
type IProductCardSimpleProps = {
  firstImg?: string;
  secondImg?: string;
  title: string;
  price: any;
  imageUrl: any;
  setExpandProduct?: any;
  handleClickProduct?: any;
};

const ProductCardSimple = (props: IProductCardSimpleProps) => {
  const {
    firstImg,
    secondImg,
    title,
    price,
    setExpandProduct,
    imageUrl,
    handleClickProduct,
  } = props;

  const [viewIcon, setViewIcon] = useState(false);
  const [imageFlip, setImageFlip] = useState(true);

  const handleMouseOver = () => {
    setViewIcon(true);
    setImageFlip(false);
  };

  const handleMouseOut = () => {
    setViewIcon(false);
    setImageFlip(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="relative">
        <Link href={"/shop"} passHref>
          {imageFlip ? (
            <img
              src={
                imageUrl?.length === 0 ? "/notfound.webp" : imageUrl?.[0].media
              }
              // src={'/notfound.webp"'}
              height={500}
              width={500}
              alt={"**"}
              style={{ height: "300px", objectFit: "contain" }}
              className={"cursor-pointer object-cover"}
              onMouseOver={() => handleMouseOver()}
              onMouseOut={() => handleMouseOut()}
            />
          ) : (
            <img
              src={
                imageUrl?.length > 1 && imageUrl?.[1].media
                  ? imageUrl[1]?.media
                  : "./one.png"
              }
              // src={'/notfound.webp"'}
              height={400}
              width={400}
              alt={"**"}
              style={{ height: "300px", objectFit: "contain" }}
              className={"cursor-pointer"}
              onMouseOver={() => handleMouseOver()}
              onMouseOut={() => handleMouseOut()}
            />
          )}
        </Link>
        {viewIcon ? (
          <ProductCardIcons
            handleMouseOut={handleMouseOut}
            handleMouseOver={handleMouseOver}
            setExpandProduct={setExpandProduct}
          />
        ) : null}
      </div>
      <div className="p-5 text-center text-slate-800">
        <p>{title}</p>
        <p className="font-medium">$&nbsp;{price}</p>
        <Link href={`/productDetail/${2}`} passHref>
          <button className="capitalize p-1 rounded-lg text-xs bg-primary text-black hover:text-white">
            wholesale price
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCardSimple