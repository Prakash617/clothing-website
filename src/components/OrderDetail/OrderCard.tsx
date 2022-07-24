import { HeartIcon, TrashIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import QuantityBox from '../reusable/InputField/quantityBox'

type Props = {}

const OrderCard = (props: Props) => {
    // const [userInput, setuserInput] = useState<number>(0);

    // const onInputChange = (e: any) => {
    //   setuserInput(e.target.value);
    //   console.log(userInput);
    // };
    // const decrement = () => {
    //   setuserInput(userInput - 1);
    // };
    // const increment = () => {
    //   setuserInput(userInput + 1);
    // };
  return (
    <>
       <div className="shadow-md hover:shadow-2xl  m-4 bg-white flex items-center w-[40rem] space-x-4 p-4">
        <div>
          <img src="one.png" alt="" className="w-24" />
        </div>
        <div className="w-60 ml-4">
          <p className="text-left ...">
            So I started to walk into the water...
          </p>
          <p className="font-style: italic; font-thin decoration-gray-100">
            The quick brown fox ...
          </p>
        </div>
        {/* cash */}
        <div>
          <p>
            <span className="text-red-400">Rs. 797</span>
            <br />
            <span className="line-through">Rs.1499</span>
            <br />
            <span>-47%</span>
            <br />{" "}
            <span className="flex text-gray-300">
              <HeartIcon className="h-6 w-6 cursor-pointer" />
              <TrashIcon className="h-6 w-6 cursor-pointer"/>
            </span>
          </p>
        </div>
        {/* increament and decrement */}

        <div className="flex ml-2">
          {/* <MinusCircleIcon
            className="h-8 w-8"
            onClick={() => {
              decrement();
            }}
          /> */}
          {/* <input
            type="text"
            className="border-gray-600 focus:outline-none focus-visible:ring focus:border-blue-400 active:bg-gray-300 w-7 pl-2"
            onChange = {(e) => {
              onInputChange(e);
            }}
            value={userInput}
          /> */}
          <div><QuantityBox/></div>
          {/* <PlusCircleIcon
            className="h-8 w-8"
            onClick={() => {
              increment();
            }}
          /> */}
        </div>
      </div>
    </>
  )
}

export default OrderCard