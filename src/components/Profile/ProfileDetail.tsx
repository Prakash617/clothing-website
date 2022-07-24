import React from "react";
import BlueBtn from "../reusable/Buttons/PinkBtn";

type Props = {};

const ProfileDetail = (props: Props) => {
  return (
    <>
      <div className="w-4/5 p-4 shadow-xl">
        <div className=" grid grid-rows-2 grid-flow-col gap-4 ">
          <div>
            <h1 className="text-sm">Full Name</h1>
            <p>Profile_name</p>
          </div>
          <div>
            <h1>Birthday</h1>
            <p className="text-gray-300">Please enter your birthday</p>
          </div>
          <div>
            <h1>Email Address</h1>
            <p className="text-gray-300">123@example.com</p>
          </div>
          <div>
            <h1>Gender</h1>
            <p className="text-gray-300">gender</p>
          </div>
          <div>
            <h1>Mobile</h1>
            <p className="text-gray-300">Please enter your mobile</p>
          </div>
        </div>
        <div className="mt-12  mb-3">
          <p className="text-pink-300 hover:text-pink-500">Subscribe to our Newsletter</p>
        </div>
        <div>
          <BlueBtn text={"EDIT PROFILE"} />
        </div>
        <div>
          <BlueBtn text={"CHANGE PASSWORD"} />
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
