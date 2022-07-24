import React from "react";
import CustomerFeedback from "../Home/CustomerFeedback";
import CustomTailoring from "../Home/CustomTailoring";
import FeaturedProducts from "../Home/FeaturedProducts";
import HomeCarousel from "../Home/HomeCarousel";
import Intro from "../Home/Intro";
import NewProducts from "../Home/NewProducts";
import NewsLetter from "../Home/NewsLetter";
import TopSellingProducts from "../Home/TopSellingProducts";
import MiniGallery from "../reusable/MiniGallery";
import OtherInfo from "../reusable/OtherInfo";

type IDasboardComponentProps = {
  setExpandProduct?: any;
  data?: any;
  topSellingProducts?: any;
  category?: any;
  categoryByProduct?: any;
  setCategoryList?: any;
  featureProducts?: any;
  setFeatureList?: any;
  newProducts?: any;
  setNewProductList?: any;
  featureProductLoading?: any;
  newProductLoading?: any;
  topSellingLoading?: any;
  setTopSellingProductList: any;
  handleTailoringForm: any;
};

const DashboardComponent = (props: IDasboardComponentProps) => {
  const { setExpandProduct } = props;
  return (
    <div className=" sm:px-10">
      <HomeCarousel />
      <br />
      <br />
      <br />
      <Intro />
      <br />
      <br />
      <FeaturedProducts
        setExpandProduct={setExpandProduct}
        featureProducts={props.featureProducts}
        category={props.category}
        setFeatureList={props.setFeatureList}
        featureProductLoading={props.featureProductLoading}
      />
      <br />
      <br />
      <CustomTailoring handleTailoringForm={props.handleTailoringForm} />
      <br />
      <br />
      <NewProducts
        setExpandProduct={setExpandProduct}
        newProducts={props.newProducts}
        category={props.category}
        setNewProductList={props.setNewProductList}
        newProductLoading={props.newProductLoading}
      />
      <br />
      <br />
      <CustomerFeedback />
      <br />
      <br />
      <br />
      <br />
      {/* <NewsEvents />
      <br /><br /> */}
      <TopSellingProducts
        setExpandProduct={setExpandProduct}
        topSellingProducts={props.topSellingProducts}
        category={props.category}
        categoryByProduct={props.categoryByProduct}
        setCategoryList={props.setCategoryList}
        setTopSellingProductList={props.setTopSellingProductList}
        topSellingLoading={props.topSellingLoading}
      />
      <br />
      <br />
      <NewsLetter data={props.data} />
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

export default DashboardComponent;
