import React from "react";
import BreadCrumbs from "../reusable/BreadCrumbs";
import ErrorMessage from "../reusable/Message/ErrorMessage";
import MiniGallery from "../reusable/MiniGallery";
import OtherInfo from "../reusable/OtherInfo";
import LoginForm from "./LoginForm";

type Props = {
  handleLoginInfo: any;
};

const LoginComponent = (props: Props) => {
  return (
    <>
      {
        <div className="sm:px-10">
          <BreadCrumbs />
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full mt-10">
              <img
                src="http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/gallery-05-1170x780.jpg"
                alt="login img"
                height={1000}
                width={800}
              />
            </div>
            <LoginForm handleLoginInfo={props.handleLoginInfo} />
          </div>
          <br />
          <br />
          <br />
          <MiniGallery />
          <br />
          <br />
          <OtherInfo />
          <br />
          <br />
        </div>
      }
    </>
  );
};

export default LoginComponent;
