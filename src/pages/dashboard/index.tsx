import React, { useState } from "react";
import { NextPage } from "next";
import DashboardComponent from "../../components/Dashboard";
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
} from "../../graphql/query";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { backendErrorDisplay } from "../../utils/ErrorDisplay";
type Props = {};

const Dashboard: NextPage = (props: Props) => {
  const [newsletter] = useMutation(QUERY_NEWS_LETTER_SUSCRIBER);
  const [tailoringForm] = useMutation(MUTATION_TAIOLRING_FORM);
  const [categoryList, setCategoryList] = useState();
  const [featureList, setFeatureList] = useState();
  const [newPoductList, setNewProductList] = useState();
  const [topSellingProductList, setTopSellingProductList] = useState();

  const { data, loading: topSellingLoading } = useQuery(
    QUERY_TOP_SELLING_PRODUCT,
    {
      variables: {
        productID: topSellingProductList ? [topSellingProductList] : [],
      },
    }
  );
  const { data: categoryProduct } = useQuery(QUERY_PRODUCT_CATEGORY);
  const { data: categoryByProduct } = useQuery(QUERY_GET_CATEGORY_BY_ID, {
    variables: {
      categoryID: categoryList ? [categoryList] : [],
    },
  });

  const { data: featureProducts, loading: featureProductLoading } = useQuery(
    QUERY_FEATURE_PRODUCT,
    {
      variables: {
        featureID: featureList ? [featureList] : [],
      },
    }
  );

  const { data: newProducts, loading: newProductLoading } = useQuery(
    QUERY_NEW_PRODUCT,
    {
      variables: {
        newProductID: newPoductList ? [newPoductList] : [],
      },
    }
  );

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
      <DashboardComponent
        data={handleSubmit}
        topSellingProducts={data}
        topSellingLoading={topSellingLoading}
        setTopSellingProductList={setTopSellingProductList}
        category={categoryProduct}
        categoryByProduct={categoryByProduct}
        setCategoryList={setCategoryList}
        featureProducts={featureProducts}
        featureProductLoading={featureProductLoading}
        setFeatureList={setFeatureList}
        newProducts={newProducts}
        newProductLoading={newProductLoading}
        setNewProductList={setNewProductList}
        handleTailoringForm={handleTailoringForm}
      />
    </div>
  );
};

export default Dashboard;
