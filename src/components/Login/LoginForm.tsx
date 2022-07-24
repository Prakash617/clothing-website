import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button1 from "../reusable/Buttons/Button1";
import EmailField from "../reusable/FormComponents/EmailField";
import PasswordField from "../reusable/FormComponents/PasswordField";
import TitleComponent from "../reusable/TitleComponent";
import { useRouter } from "next/router";
import { getSessionKey } from "../../sessionKey";

type Props = {
  handleLoginInfo?: any;
};

const LoginForm = (props: Props) => {
  const router = useRouter();
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // const token = getSessionKey("token");
    // if (token) {
    //   router.push("/dashboard");
    // }
  }, [inputValues.email, inputValues.password]);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
    setValidation({ ...validation, [name]: "" });
  }

  const checkValidation = () => {
    let errors = { ...validation };

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

    setValidation(errors);
  };

  const onClick = (e: any) => {
    e.preventDefault();
    checkValidation();
    if (inputValues.email === "" || inputValues.password === "") {
    } else {
      props.handleLoginInfo(inputValues.email, inputValues.password);
    }
    const token = getSessionKey("token");
    if (token) {
      router.push("/dashboard");
    }
  };
  return (
    <>
      {
        <div className="mx-5">
          <TitleComponent title={"Login Form"} subTitleTracking={false} />
          <div className="space-y-5">
            <form onSubmit={onClick}>
              <div className="space-y-5">
                <EmailField
                  handleChange={handleChange}
                  clickHandler={null}
                  value={inputValues.email}
                  name={"email"}
                  validation={validation}
                  placeholder={"Enter Email"}
                />
                <PasswordField
                  handleChange={handleChange}
                  clickHandler={null}
                  value={inputValues.password}
                  name={"password"}
                  validation={validation}
                  placeholder={"Enter Password"}
                />
                <br />
                <div className="flex gap-x-5">
                  <Button1 text="Log in" />
                  <Link href={"/register"} passHref>
                    <Button1 text="Register" type={"submit"} onClick={null} />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  );
};

export default LoginForm;
