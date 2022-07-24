import React from 'react'
import SearchField from '../../reusable/FormComponents/SearchField'

type Props = {
  products: any;
  setSearchProductList: any;
};

const SearchProducts = (props: Props) => {
  return (
    <div>
      <div className="p-3 text-2xl capitalize font-semibold text-slate-800">
        Search Products
      </div>
      <SearchField
        products={props.products}
        setSearchProductList={props.setSearchProductList}
      />
    </div>
  );
};

export default SearchProducts