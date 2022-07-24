import React from 'react'
import Loader from "../reusable/Loader/Loader";
import ProductCardSimple from '../reusable/ProductCard/ProductCardSimple'
import TitleComponent from '../reusable/TitleComponent'

type Props = {
  setExpandProduct: any;
  newProducts: any;
  category: any;
  setNewProductList: any;
  newProductLoading: any;
};

const NewProducts = (props: Props) => {
  const { setExpandProduct, newProducts, category, setNewProductList } = props;
  const handleClick = (id: any) => {
    setNewProductList(id);
  };
  const handleClickProduct = (id: any) => {
    console.log("product ,id: ", id);
  };
  return (
    <div>
      <TitleComponent center={true} title="New products" />

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
        {props.newProductLoading && <Loader />}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {newProducts?.websiteProducts?.edges.length === 0 ? (
          <p className="text-center">Nothing to show</p>
        ) : (
          newProducts?.websiteProducts?.edges.map((product: any, i: any) => (
            <ProductCardSimple
              key={i}
              title={product.node.title}
              price={product.node.price}
              imageUrl={product.node.media}
              handleClickProduct={() => handleClickProduct(product.node.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewProducts