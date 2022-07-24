import React from "react";
import BlueBtn from "../reusable/Buttons/PinkBtn";

type Props = {};

const AddressBook = (props: Props) => {
  return (
    <>
      
        {/* <div classNameName=" flex flex-col items-center ">
          <div classNameName="w-5/6 bg-gray-100 p-2 flex">
                <div></div>
          </div>
          
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Address</th>
              <th scope="col">Region</th>
              <th scope="col">Phone Number</th>
          </div> */}
          <div className="w-4/5 p-4 shadow-xl">
<table className="border-collapse w-full ">
  <thead className="bg-gray-100">
    <tr className=" border-gray-300 outline-none  ">
      <th scope="col" className="p-2  text-pink-300 ">Full Name</th>
        <th scope="col"   className="p-2 text-pink-300">Address</th>
        <th scope="col"  className="p-2 text-pink-300">Region</th>
        <th scope="col"  className="p-2 text-pink-300">Phone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-center">
      <td className="">Indiana</td>
      <td className="p-4">Indianapolis</td>
      <td className="p-4">Indianapolis</td>
      <td className="p-4">Indianapolis</td>
    </tr>
    <tr className="text-center">
      <td className="">Indiana</td>
      <td className="p-4">Indianapolis</td>
      <td className="p-4">Indianapolis</td>
      <td className="p-4">Indianapolis</td>
    </tr>
    <tr className="text-center">
      <td className="">Indiana</td>
      <td className="p-4">Indianapolis</td>
      <td className="p-4">Indianapolis</td>
      <td className="p-4">Indianapolis</td>
    </tr>


 
 
  </tbody>
</table>
</div>
    </>
  );
};

export default AddressBook;
