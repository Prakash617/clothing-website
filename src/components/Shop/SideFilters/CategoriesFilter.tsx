import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {
  category: any;
  setTopProductsList?: any;
};

const CategoriesFilter = (props: Props) => {
  const handleClick = (id: any) => {
    props.setTopProductsList(id);

  console.log(props.category)
  };
  return (
    <div className="divide-y">
      <div className="p-3 text-2xl capitalize font-semibold text-slate-800">
        Categories
      </div>
      <div className="divide-y">
        {props.category?.websiteCategory?.edges.map((item: any, i: any) => (
          <div key={i} className="p-5 flex items-center justify-between">
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 mr-2 text-primary " />
              <span
                className="text-lg capitalize hover:text-primary cursor-pointer font-light"
                onClick={() => handleClick(item.node.id)}
              >
                {/* {item.node.productsByCategory.totalCount > 0 && item.node.name} */}
                {item.node.name}
              </span>
            </div>
            <div className="border-r border-l border-primary px-2">
              {item.node.productsByCategory.totalCount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFilter