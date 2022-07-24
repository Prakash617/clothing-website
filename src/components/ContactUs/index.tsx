import React from 'react'
import BreadCrumbs from '../reusable/BreadCrumbs'
import MiniGallery from '../reusable/MiniGallery'
import OtherInfo from '../reusable/OtherInfo'
import TitleComponent from '../reusable/TitleComponent'
import ContactForm from './ContactForm'
import GetInTouch from './GetInTouch'

type Props = {
  handleContactFormSubmit: any;
};

const ContactUs = (props: Props) => {
  return (
    <div className="sm:px-10">
      <BreadCrumbs />
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* <div className="flex justify-between"> */}
        <ContactForm handleContactFormSubmit={props.handleContactFormSubmit} />
        <GetInTouch />
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
};

export default ContactUs