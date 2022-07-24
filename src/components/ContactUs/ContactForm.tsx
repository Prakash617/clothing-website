import React, { useState } from "react";
import Button1 from "../reusable/Buttons/Button1";
import EmailField from "../reusable/FormComponents/EmailField";
import PhoneNumberField from "../reusable/FormComponents/PhoneNumberField";
import TextAreaField from "../reusable/FormComponents/TextAreaField";
import TextField from "../reusable/FormComponents/TextField";
import TitleComponent from "../reusable/TitleComponent";

type Props = {
  handleContactFormSubmit?: any;
};

const ContactForm = (props: Props) => {
  const [inputValues, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [validation, setValidation] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
    setValidation({ ...validation, [name]: "" });
  };

  const checkValidation = () => {
    let errors = { ...validation };

    //first Name validation
    if (!inputValues.name.trim()) {
      errors.name = "First name is required";
    } else {
      errors.name = "";
    }
    //email  validation
    if (!inputValues.email.trim()) {
      errors.email = "Email  is required";
    } else {
      errors.email = "";
    }
    //phone  validation
    if (!inputValues.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (inputValues.phone.length < 10) {
      errors.phone = "Phone number must be at least 10 characters";
    } else {
      errors.phone = "";
    }
    //message  validation
    if (!inputValues.message.trim()) {
      errors.message = "Message name is required";
    } else {
      errors.message = "";
    }
    setValidation(errors);
  };

  const onClick = (e: any) => {
    e.preventDefault();
    checkValidation();
    if (
      inputValues.name === "" ||
      inputValues.email === "" ||
      inputValues.phone === "" ||
      inputValues.phone.length < 10 ||
      inputValues.message === ""
    ) {
    } else {
      const data = {
        name: inputValues.name,
        email: inputValues.email,
        phone: inputValues.phone,
        message: inputValues.message,
      };
      const stringifyData = JSON.stringify(data);
      props.handleContactFormSubmit(stringifyData);
    }
    inputValues.name = "";
    inputValues.email = "";
    inputValues.phone = "";
    inputValues.message = "";
  };
  return (
    <div>
      <TitleComponent
        title={"Contact Form"}
        subTitleTracking={false}
        subTitle={
          "Your email address will not be published. We promise not to spam"
        }
      />
      <div className="space-y-5">
        <form onSubmit={onClick}>
          <div className="space-y-5">
            <TextField
              name={"name"}
              value={inputValues.name}
              handleChange={handleChange}
              clickHandler={null}
              validation={validation}
              placeholder={"Full name"}
            />
            <EmailField
              handleChange={handleChange}
              clickHandler={null}
              value={inputValues.email}
              name={"email"}
              validation={validation}
              placeholder={"Email Address"}
            />
            <PhoneNumberField
              name={"phone"}
              value={inputValues.phone}
              handleChange={handleChange}
              clickHandler={null}
              validation={validation}
              placeholder={"Phone Number"}
            />
            <TextAreaField
              name={"message"}
              value={inputValues.message}
              handleChange={handleChange}
              clickHandler={null}
              validation={validation}
              placeholder={"Message"}
            />
            <Button1 type={"submit"} onClick={null} text="send message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
