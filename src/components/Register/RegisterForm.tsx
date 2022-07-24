import Link from "next/link";
import React, { useState } from "react";
import Button1 from "../reusable/Buttons/Button1";
import EmailField from "../reusable/FormComponents/EmailField";
import PasswordField from "../reusable/FormComponents/PasswordField";
import TextField from "../reusable/FormComponents/TextField";
import TitleComponent from "../reusable/TitleComponent";

type Props = {};

const RegisterForm = () => {
  const [inputValues, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event: any) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
    setValidation({ ...validation, [name]: "" });
  }

  const checkValidation = () => {
    let errors = { ...validation };
    //first Name validation
    if (!inputValues.name.trim()) {
      errors.name = "Full name is required";
    } else {
      errors.name = "";
    }
    //email  validation
    if (!inputValues.email.trim()) {
      errors.email = "Email  is required";
    } else {
      errors.email = "";
    }
    //password  validation
    if (!inputValues.password.trim()) {
      errors.password = "Password is required";
    } else {
      errors.password = "";
    }
    //conform password  validation
    if (!inputValues.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm your password";
    } else if (inputValues.confirmPassword !== inputValues.password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.confirmPassword = "";
    }
    setValidation(errors);
  };

  const onClick = (e: any) => {
    e.preventDefault();
    checkValidation();
    if (
      inputValues.name === "" ||
      inputValues.email === "" ||
      inputValues.password === "" ||
      inputValues.confirmPassword !== inputValues.password ||
      inputValues.confirmPassword === ""
    ) {
    } else {
      const data = {
        name: inputValues.name,
        email: inputValues.email,
        password: inputValues.password,
        confirmPassword: inputValues.confirmPassword,
      };
      console.log("Register data", data);
    }
  };
  return (
    <div className="mx-5">
      <TitleComponent title={"Register Form"} subTitleTracking={false} />
      <form onSubmit={onClick}>
        <div className="space-y-5">
          <TextField
            placeholder={"Full name"}
            name={"name"}
            value={inputValues.name}
            handleChange={handleChange}
            clickHandler={null}
            validation={validation}
          />
          <EmailField
            placeholder={"Email Address"}
            handleChange={handleChange}
            clickHandler={null}
            value={inputValues.email}
            name={"email"}
            validation={validation}
          />
          <PasswordField
            handleChange={handleChange}
            clickHandler={null}
            value={inputValues.password}
            name={"password"}
            validation={validation}
            placeholder={"Enter Password"}
          />
          <PasswordField
            handleChange={handleChange}
            clickHandler={null}
            value={inputValues.confirmPassword}
            name={"confirmPassword"}
            validation={validation}
            placeholder={"Confirm Password"}
          />
          <br />
          <div className="flex gap-x-5">
            <Button1 text="Register" type={"submit"} onClick={null} />
            <Link href="/login" passHref>
              <Button1 text="Log in" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};


export default RegisterForm;
