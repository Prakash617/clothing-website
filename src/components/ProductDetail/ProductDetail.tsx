import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/outline";
import QuantityBox from "../reusable/InputField/quantityBox";
import Button1 from "../reusable/Buttons/Button1";
import CategoriesFilter from "../Shop/SideFilters/CategoriesFilter";
import DescBotton from "../reusable/DescriptionBotton/DescBotton";
import DescBox from "../reusable/DescriptionBotton/DescBox";
import DescCard from "../reusable/DescriptionBotton/DescCard";
import DescMoreInfo from "../reusable/DescriptionBotton/DescMoreInfo";
import Review from "../reusable/DescriptionBotton/Review";
import Comment from "../reusable/Comment/Comment";


type Props = {
  categoryData:any
  id:any
};

const ProductDetailComponent = (props: Props) => {
  const {categoryData, id} = props
  console.log(categoryData)
 
  const [Box, setBox] = useState("DESCRIPTION")


  return (
    <>
      <div className="flex ">
        
        <div className="w-1/3  p-4 flex justify-center">
        <CategoriesFilter category={categoryData}/>

        </div>
        <div className="flex flex-col ">
          <div className="mb-[10rem]">
        <DescCard  id={id}/>
          </div>

            {/* Descriptions_Detail */}

        <div className="flex flex-col">
          <div className="flex">
          <div className="mr-1">
        <DescBotton text={"DESCRIPTION"} setBox={setBox} />
          </div>
        <div className="mr-1">
            <DescBotton text={"ADDITIONAL INFORMATION"}  setBox={setBox}/>
          </div>
          <div className="mr-1">
            <DescBotton text={"REVIEWS"} setBox={setBox}/>
          </div> 
          <div className="mr-1">
            <DescBotton text={"COMMENT"} setBox={setBox}/>
          </div> 
          
         
          </div>
          <div  >
            {Box === "DESCRIPTION"?<DescBox title="DESCRIPTION"/>:null}
            {Box === "ADDITIONAL INFORMATION"?<DescMoreInfo title="ADDITIONAL INFORMATION" />:null}
            {Box === "REVIEWS"?<Review title="REVIEWS" />:null} 
            {Box === "COMMENT"?<Comment title="COMMENT" />:null}
            {/* <DescMoreInfo/> */}
            {/* <Review/> */}
            {/* <Comment title={"COMMENT"}/> */}
           
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default ProductDetailComponent;
