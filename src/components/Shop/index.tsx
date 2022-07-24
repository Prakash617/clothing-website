import React from 'react'
import BreadCrumbs from '../reusable/BreadCrumbs'
import MiniGallery from '../reusable/MiniGallery'
import OtherInfo from '../reusable/OtherInfo'
import ShopItemsSection from './ShopItemsSection'
import CategoriesFilter from './SideFilters/CategoriesFilter'
import PriceFilter from './SideFilters/PriceFilter'
import RecentReviewedProducts from './SideFilters/RecentReviewedProducts'
import SearchProducts from './SideFilters/SearchProducts'
import ShoppingCart from './SideFilters/ShoppingCart'
import TopProducts from './SideFilters/TopProducts'

type Props = {
  data: any;
  categoryData: any;
  setTopProductsList?: any;
  topProducts?: any;
  setSearchProductList?: any;
  topThreeProducts: any;
  topProductLoading?: any;
};

const ShopComponent = (props: Props) => {
  const { data, categoryData } = props;
  return (
    <div className="sm:px-10">
      <BreadCrumbs />
      <br />
      <br />
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-5">
        {/* Section for all filters like Categor, Price */}
        <div className="hidden lg:block">
          <SearchProducts
            products={data}
            setSearchProductList={props.setSearchProductList}
          />
          <br />
          <CategoriesFilter
            setTopProductsList={props.setTopProductsList}
            category={categoryData}
          />
          <br />
          <br />
          <ShoppingCart />
          <br />
          <br />
          <TopProducts topThreeProducts={props.topThreeProducts} />
          <br />
          <PriceFilter />
          <br />
          <br />
          <RecentReviewedProducts />
        </div>

        {/* Section for all the shop products */}
        <div className=" md:col-span-3 lg:col-span-2 xl:col-span-3">
          <ShopItemsSection
            topProducts={props.topProducts}
            topProductLoading={props.topProductLoading}
          />
        </div>
      </div>
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

export default ShopComponent