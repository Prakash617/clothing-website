import type { NextPage } from 'next'
import React, { useEffect, useState } from "react";
import HomeComponent from "../../components/Home";
import {
  QUERY_NEWS_LETTER_SUSCRIBER,
  MUTATION_TAIOLRING_FORM,
} from "../../graphql/mutation";
import {
  QUERY_TOP_SELLING_PRODUCT,
  QUERY_PRODUCT_CATEGORY,
  QUERY_GET_CATEGORY_BY_ID,
  QUERY_FEATURE_PRODUCT,
  QUERY_NEW_PRODUCT,
  QUERY_FEATURE_PRODUCT_CATEGORY,
  QUERY_CAROUSEL,
  SEARCH_PRODUCTS,
} from "../../graphql/query";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { backendErrorDisplay } from "../../utils/ErrorDisplay";
const Home: NextPage = (props: any) => {
  const { expandProduct, setExpandProduct } = props;
  const [newsletter] = useMutation(QUERY_NEWS_LETTER_SUSCRIBER);
  const [tailoringForm] = useMutation(MUTATION_TAIOLRING_FORM);
  const [categoryList, setCategoryList] = useState();
  const [featureList, setFeatureList] = useState();
  const [newPoductList, setNewProductList] = useState();
  const [searchProduct, setSearchProduct] = useState("");
  const [topSellingProductList, setTopSellingProductList] = useState();

  const { data, loading: topSellingLoading } = useQuery(
    QUERY_TOP_SELLING_PRODUCT,
    {
      variables: {
        productID: topSellingProductList ? [topSellingProductList] : [],
      },
    }
  );

  //Search products by keywords

  const { data: featureProducts } = useQuery(QUERY_FEATURE_PRODUCT_CATEGORY, {
    variables: {
      slug: featureList ?? "feature-product-category",
    },
  });

  const { data: newProducts, loading: newProductLoading } = useQuery(
    QUERY_NEW_PRODUCT,
    {
      variables: {
        newProductID: newPoductList ? [newPoductList] : [],
      },
    }
  );

  const { data: carouselsData } = useQuery(QUERY_CAROUSEL);

  const handleSubmit = async (enteredEmail: String) => {
    const response = await newsletter({
      variables: {
        email: enteredEmail,
      },
    });
    if (response?.data?.createNewsletterSubscriber?.success === false) {
      toast.error(
        `${response?.data?.createNewsletterSubscriber?.errors?.email[0]?.message}`
      );
    } else {
      toast.success("Thanks for your subscription!");
    }
  };
  const handleTailoringForm = async (data: any) => {
    const response = await tailoringForm({
      variables: {
        form: "2",
        data: data,
      },
    });
    if (response?.data?.createFormData?.success === false) {
      const errors = response?.data?.createFormData?.errors;
      backendErrorDisplay(errors);
    } else {
      toast.success("Thanks for ordering tailor!");
    }
  };
  return (
    <div>
      <HomeComponent
        setExpandProduct={setExpandProduct}
        data={handleSubmit}
        topSellingProducts={data}
        topSellingLoading={topSellingLoading}
        setTopSellingProductList={setTopSellingProductList}
        category={[]}
        categoryByProduct={[]}
        setCategoryList={setCategoryList}
        featureProducts={featureProducts}
        // featureProductLoading={featureProductLoading}
        setFeatureList={setFeatureList}
        newProducts={newProducts}
        newProductLoading={newProductLoading}
        setNewProductList={setNewProductList}
        handleTailoringForm={handleTailoringForm}
        carouselsData={carouselsData}
      />
    </div>
  );
};

export default Home
