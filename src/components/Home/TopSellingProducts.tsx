import React, { useState } from "react";
import Loader from "../reusable/Loader/Loader";
import ProductCardSimple from "../reusable/ProductCard/ProductCardSimple";
import TitleComponent from "../reusable/TitleComponent";

type Props = {
  setExpandProduct: any;
  topSellingProducts?: any;
  category?: any;
  categoryByProduct?: any;
  setCategoryList?: any;
  topSellingLoading?: any;
  setTopSellingProductList?: any;
};

const TopSellingProducts = (props: Props) => {
  const {
    setExpandProduct,
    category,
    topSellingProducts,
    categoryByProduct,
    setCategoryList,
  } = props;

  const handleClick = (id: any) => {
    props.setTopSellingProductList(id);
  };
  return (
    <div>
      <TitleComponent center={true} title="top selling products" />
      {/* Seprate Filter Component */}
      <div className="text-sm flex  uppercase font-semibold">
        {category?.websiteCategory?.edges.map((item: any, i: any) => (
          <p
            className="hover:text-primary cursor-pointer flex"
            key={i}
            onClick={() => handleClick(item.node.id)}
          >
            {" "}
            {item.node.name}
          </p>
        ))}
      </div>
      <br />
      <div className="flex justify-center align-center">
        {props.topSellingLoading && <Loader />}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {topSellingProducts?.topSellingProducts.edges.length === 0 ? (
          <p className="text-center">Nothing to show</p>
        ) : (
          categoryByProduct?.topSellingProducts?.edges.map(
            (product: any, i: any) => (
              <ProductCardSimple
                key={i}
                title={product.node.title}
                price={product.node.price}
                imageUrl={product.node.media}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default TopSellingProducts;
