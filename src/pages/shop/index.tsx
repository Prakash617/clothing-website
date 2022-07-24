import { NextPage } from 'next'
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import ShopComponent from "../../components/Shop";
import {
  QUERY_WEBSITE_PRODUCT,
  QUERY_PRODUCT_CATEGORY,
  QUERY_TOP_10_PRODUCT,
  QUERY_TOP_PRODUCT,
} from "../../graphql/query";
const Shop: NextPage = () => {
  const [topProductsList, setTopProductsList] = useState();
  const [searchProductList, setSearchProductList] = useState();
  const { data } = useQuery(QUERY_WEBSITE_PRODUCT, {
    variables: {
      first: 10,
    },
  });

  const { data: topProducts, loading: topProductLoading } = useQuery(
    QUERY_TOP_10_PRODUCT,
    {
      variables: {
        topProductID: topProductsList ? [topProductsList] : [],
        searchTitle: searchProductList ? searchProductList : "",
      },
    }
  );

  const { data: categoryData } = useQuery(QUERY_PRODUCT_CATEGORY);
  const { data: topThreeProducts } = useQuery(QUERY_TOP_PRODUCT);

  console.log(topThreeProducts,"id")
  return (
    <div>
      <ShopComponent
        data={data}
        categoryData={categoryData}
        topProducts={topProducts}
        topProductLoading={topProductLoading}
        setTopProductsList={setTopProductsList}
        setSearchProductList={setSearchProductList}
        topThreeProducts={topThreeProducts}
      />
    </div>
  );
};

export default Shop