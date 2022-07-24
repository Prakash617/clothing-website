import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import SearchComponent from "../../components/Search";
import { SEARCH_PRODUCTS } from "../../graphql/query";

type Props = {
  data?: any;
};

const Search: NextPage = (props: Props) => {
  const router = useRouter();
  const queryData = Object.keys(router.query);
  const [keyword] = queryData;

  const { data: searchProductList } = useQuery(SEARCH_PRODUCTS, {
    variables: {
      search: keyword,
    },
  });

  return <SearchComponent data={searchProductList} keyword={keyword} />;
};

export default Search;
