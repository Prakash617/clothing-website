import React from 'react'
import TopProductsCard from '../../reusable/ProductCard/TopProductsCard'

type Props = {}

const RecentReviewedProducts = (props: Props) => {
  return (
    <div className="p-5">
      <div className="text-2xl capitalize font-semibold text-slate-800">
        Recent Reviewed
      </div>
      <div className="space-y-3">
        {/* <TopProductsCard />
        <TopProductsCard />
        <TopProductsCard /> */}
      </div>
    </div>
  );
}

export default RecentReviewedProducts