import React from "react";
import BreadCrumbs from "../reusable/BreadCrumbs";
import Loader from "../reusable/Loader/Loader";
import MiniGallery from "../reusable/MiniGallery";
import OtherInfo from "../reusable/OtherInfo";
import ProductCardSimple from "../reusable/ProductCard/ProductCardSimple";

type Props = {
  data: any;
  keyword: any;
};
const SearchComponent = (props: Props) => {
  const { data, keyword } = props;
  return (
    <div className="sm:px-10">
      <BreadCrumbs />
      <br />
      <br />
      <div className="p-5">
        <div className="text-2xl text-center capitalize font-semibold text-slate-800">
          Search Results on <span className="text-primary">{keyword}</span>
        </div>
        {data?.websiteProducts?.edges.length === 0 ? (
          <div className="text-2xl text-center p-10 capitalize font-semibold text-slate-800">
            <h1 className="text-primary"> Woops! No product found ?</h1>
          </div>
        ) : (
          <Loader /> && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-red">
              {data?.websiteProducts?.edges.map((product: any, i: any) => (
                <ProductCardSimple
                  key={i}
                  title={product.node.title}
                  price={product.node.price}
                  imageUrl={product.node.media}
                  handleClickProduct={null}
                />
              ))}
            </div>
          )
        )}
      </div>
      <br />
      <br />
      <br />
      <MiniGallery />
      <br />
      <br />
      <OtherInfo />
      <br />
      <br />
    </div>
  );
};

export default SearchComponent;
