import React from 'react'
import LoginComponent from '../../components/Login'
import { LOGIN_MUTATION } from "../../graphql/mutation";
import { useMutation } from "@apollo/client";
import { backendErrorDisplay } from "../../utils/ErrorDisplay";
import { toast } from "react-toastify";
import { setSessionKey } from "../../sessionKey";

type Props = {};

const Login = (props: Props) => {
  const [userInfo] = useMutation(LOGIN_MUTATION);
  const handleLoginInfo = async (email: any, password: any) => {
    const response = await userInfo({
      variables: {
        email: email,
        password: password,
      },
    });
    if (response?.data?.tokenAuth?.success === false) {
      const errors = response?.data?.tokenAuth?.errors;
      backendErrorDisplay(errors);
    } else {
      const token = response?.data?.tokenAuth?.token;
      setSessionKey("token", token);
      toast.success("Login success full!");
    }
  };
  return <LoginComponent handleLoginInfo={handleLoginInfo} />;
};

export default Login