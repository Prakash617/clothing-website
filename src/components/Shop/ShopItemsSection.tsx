import React from 'react'
import Loader from "../reusable/Loader/Loader";
import ProductCardSimple from "../reusable/ProductCard/ProductCardSimple";

type Props = {
  topProducts: any;
  topProductLoading: any;
};

const ShopItemsSection = (props: Props) => {
  return (
    <>
      <p className="text-xl font-light text-slate-700">Showing 10 items</p>
      <br />
      <div className="flex justify-center align-center">
        {props.topProductLoading && <Loader />}
      </div>

      {props.topProducts?.websiteProducts?.edges.length === 0 ? (
        <p>Nothing to show</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {props.topProducts?.websiteProducts?.edges.map(
            (product: any, i: any) => (
              <ProductCardSimple
                key={i}
                title={product.node.title}
                price={product.node.price}
                imageUrl={product.node.media}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default ShopItemsSection