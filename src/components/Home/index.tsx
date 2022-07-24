import React from 'react'
import MiniGallery from '../reusable/MiniGallery'
import OtherInfo from '../reusable/OtherInfo'
import CustomerFeedback from './CustomerFeedback'
import CustomTailoring from './CustomTailoring'
import FeaturedProducts from './FeaturedProducts'
import HomeCarousel from './HomeCarousel'
import Intro from './Intro'
import NewProducts from './NewProducts'
import NewsEvents from './NewsEvents'
import NewsLetter from './NewsLetter'
import TopSellingProducts from './TopSellingProducts'



type IHomeComponentProps = {
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
  carouselsData: any;
};

const HomeComponent = (props: IHomeComponentProps) => {
  const { setExpandProduct, featureProducts, setFeatureList, carouselsData } =
    props;
  return (
    <div className=" sm:px-10">
      <HomeCarousel carouselsData={carouselsData} />
      <br />
      <br />
      <br />
      <Intro />
      <br />
      <br />
      <FeaturedProducts
        setExpandProduct={setExpandProduct}
        featureProducts={featureProducts}
        category={props.category}
        setFeatureList={setFeatureList}
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

export default HomeComponent