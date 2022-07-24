import React from 'react'
import BreadCrumbs from '../reusable/BreadCrumbs'
import MiniGallery from '../reusable/MiniGallery'
import OtherInfo from '../reusable/OtherInfo'
import RegisterForm from "./RegisterForm";

type Props = {}

const RegisterComponent = (props: Props) => {
  return (
    <div className="sm:px-10">
      <BreadCrumbs />
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full mt-10">
          <img
            src="http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/gallery-09-780x520.jpg"
            alt="register img"
            height={1000}
            width={800}
          />
        </div>

        <RegisterForm />
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
  );
}

export default RegisterComponent