import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import EmailField from "../reusable/FormComponents/EmailField";
import TitleComponent from "../reusable/TitleComponent";

type Props = {
  data?: any;
};

const NewsLetter = (props: Props) => {
  const [enterdEmail, setEnterdEmail] = useState("");

  const handleChange = (e: any) => {
    setEnterdEmail(e.target.value);
  };
  const clickHandler = (e: any) => {
    e.preventDefault();
    props.data(enterdEmail);
    setEnterdEmail("");
  };
  return (
    <div className="relative">
      <hr />
      <div
        className="absolute -top-9 left-[50%] transform -translate-x-1/2 z-10 
      bg-white p-2 px-4 rounded-full w-fit shadow-lg border
       text-slate-700 flex"
      >
        <SocialIcon
          network="twitter"
          fgColor="#9fede0"
          bgColor="white"
          style={{ height: 50, width: 50 }}
        />
        <SocialIcon
          network="facebook"
          fgColor="#3452eb"
          bgColor="white"
          style={{ height: 50, width: 50 }}
        />
        <SocialIcon
          network="linkedin"
          fgColor="#3452eb"
          bgColor="white"
          style={{ height: 50, width: 50 }}
        />
        <SocialIcon
          network="instagram"
          fgColor="#e44a7a"
          bgColor="white"
          style={{ height: 50, width: 50 }}
        />
      </div>
      <br />
      <br />
      <TitleComponent
        center={true}
        title="Our News letter"
        subTitle="subscribe"
      />
      <div className="mx-auto px-[20%]">
        <EmailField
          handleChange={handleChange}
          value={enterdEmail}
          clickHandler={clickHandler}
          name="email"
          validation={null}
          placeholder="Enter your email address"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
