import {
  HeartIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import OrderDetail from "../../pages/OrderDetail";
import QuantityBox from "../reusable/InputField/quantityBox";
import OrderCard from "./OrderCard";



const OrderDetailComponent = () => {
 
  return (
    <>

    <div className="flex-col justify-center">

    <OrderCard/>
    </div>
    </>
  );
};

export default OrderDetailComponent;
