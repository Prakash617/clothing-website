import React, { useEffect, useState } from "react";
import BlueBtn from "../reusable/Buttons/PinkBtn";
import DropDown from "../reusable/DropDown/DropDown";
import AddressBook from "./AddressBook";
import PaymentOption from "./PaymentOption";
import ProfileDetail from "./ProfileDetail";
import Vouchers from "./Vouchers";

const ProfileNav = () => {
  const [profile, setProfile] = useState(true);
  const [address, setAddress] = useState(false);
  const [Payment, setPayment] = useState(false);
  const [vouchers, setVouchers] = useState(false);
 
  const data: any = [
    { id: "1", value: "My Profile" },
    { id: "2", value: "Address Book" },
    { id: "3", value: "My Payment" },
    { id: "4", value: "Voucher" },
  ];

  const display = (id: any) => {
    switch (id) {
      case "1":
        setProfile(true);
        setAddress(false);
        setPayment(false);
        setVouchers(false);
        
        break;
      case "2":
        setProfile(false);
        setAddress(true);
        setPayment(false);
        setVouchers(false);
        
        
        break;
      case "3":
        setProfile(false);
        setAddress(false);
        setPayment(true);
        setVouchers(false);
      
        break;
      case "4":
        setProfile(false);
        setAddress(false);
        setPayment(false);
        setVouchers(true);
        
        break;
    
      default:
        break;
    }
  };
  return (
    <>
      <hr />
      <div className="flex space-x-2 mb-10 mt-4 mr-7 ">
        <div className="w-1/5  shadow-xl p-4 ml-12">
          <div className="flex-col">
            <div>
              <p className="font-light text-sm ">Hello, User_Name</p>
            </div>
            <div>
              <button>
                <p className="text-pink-400 text-lg mt-2 flex-col ">
                  Manage My Account
                </p>
              </button>
              {data.map((elem: any, i: any) => (
                <p
                  key={i}
                  className="text-gray-400 ml-4 font-extralight cursor-pointer"
                  onClick={() => display(elem.id)}>
                  {elem.value}
                </p>
              ))}
            </div>
            <div>
              <p className="text-pink-400 text-lg mt-2 flex-col cursor-pointer ">My Orders</p>
              <p className="text-gray-400 ml-4 font-extralight cursor-pointer ">My Returns</p>
              <p className="text-gray-400 ml-4 font-extralight cursor-pointer ">
                My Cancellations
              </p>
            </div>
            <div>
              <p className="text-pink-400 text-lg mt-2 flex-col cursor-pointer ">My Reviews</p>
            </div>
            <div>
              <p className="text-pink-400 text-lg mt-2 flex-col cursor-pointer ">
                My Wishlist
              </p>
            </div>
            <div>
              <p className="text-pink-400 text-lg mt-2 flex-col cursor-pointer  ">
       Cart
              </p>
            </div>
      
          </div>
        </div>
        {profile && <ProfileDetail />}
        {address && <AddressBook />}
        { vouchers && <Vouchers/>}
        { Payment && <PaymentOption />}
        
        
      </div>
      <div>
        <DropDown/>
      </div>
    </>
  );
};

export default ProfileNav;
