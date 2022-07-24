import { ExternalLinkIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import React from 'react'

type IProductCardIconsProps = {
  handleMouseOut: any
  handleMouseOver: any
  setExpandProduct: any;
}

const ProductCardIcons = (props: IProductCardIconsProps) => {
  const { handleMouseOut, handleMouseOver, setExpandProduct } = props
const clickHandler = () => {
  console.log("clicked");
};
  return (
    <div
      className="absolute flex justify-center w-fit px-7 py-3
        space-x-4 rounded-full bg-white/80 z-10 left-[50%] transform -translate-x-1/2  bottom-3"
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOut()}
    >
      <ShoppingBagIcon
        className="h-5 w-5 mr-2 hover:text-primary cursor-pointer"
        onClick={clickHandler}
      />
      <ExternalLinkIcon
        className="h-5 w-5 mr-2 hover:text-primary cursor-pointer"
        onClick={() => setExpandProduct(true)}
      />
    </div>
  );
}

export default ProductCardIcons