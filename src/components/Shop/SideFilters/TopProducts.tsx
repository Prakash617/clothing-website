import React from 'react'
import TopProductsCard from '../../reusable/ProductCard/TopProductsCard'

type Props = {
  topThreeProducts?: any;
};

const TopProducts = (props: Props) => {
  return (
    <div className="p-5">
      <div className="text-2xl capitalize font-semibold text-slate-800">
        TopProducts
      </div>
      <div className="space-y-3">
        {props.topThreeProducts?.websiteProducts?.edges.map(
          (item: any, i: any) => {
            {console.log(item)}
            return(
              <TopProductsCard
              key={i}
              id = {item.node.id}
              imageUrl={item.node.media}
              title={item.node.title}
              price={item.node.price}

              />
              )
          }
        )}
      </div>
    </div>
  );
};

export default TopProducts