import React from 'react'
import Loader from "../reusable/Loader/Loader";
import ProductCardSimple from "../reusable/ProductCard/ProductCardSimple";
import TitleComponent from "../reusable/TitleComponent";

type IFeaturedProductsProps = {
  setExpandProduct: any;
  category: any;
  setFeatureList: any;
  featureProducts: any;
  featureProductLoading: any;
};

const FeaturedProducts = (props: IFeaturedProductsProps) => {
  const { setExpandProduct, featureProducts, setFeatureList, category } = props;
  const handleClick = (slug: any) => {
    console.log("id", slug);
    setFeatureList(slug);

  console.log(featureProducts,"feature")
  };
  return (
    <div>
      <TitleComponent center={true} title="Featured products" />

      {/* Seprate Filter Component */}

      <div className="text-sm text-center space-x-5 tracking-[0.5rem] uppercase font-semibold text-slate-800 flex justify-center">
        {featureProducts?.navigationMenuBySlug?.children.map(
          (item: any, i: any) => (
            <p
              className="hover:text-primary cursor-pointer flex"
              key={i}
              onClick={() => handleClick(item.slug)}
            >
              {" "}
              {item.name}
            </p>
          )
        )}
      </div>
      <br />

      <div className="flex justify-center align-center">
        {props.featureProductLoading && <Loader />}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {featureProducts?.navigationMenuBySlug === null ? (
          <h3 className="text-center">Woops! Nothing to show!</h3>
        ) : (
          featureProducts?.navigationMenuBySlug?.items?.edges.map(
            (product: any, i: any) => (
              <ProductCardSimple
                key={i}
                title={product.node.tfeatureProductsitle}
                price={"452"}
                imageUrl={product.node.media}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts