import { KeyIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import ErrorMessage from "../Message/ErrorMessage";

type Props = {
  handleChange: any;
  value: any;
  clickHandler?: any;
  name: string;
  validation?: any;
  placeholder?: any;
};

const PasswordField = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setShowPassword(true);
    if (showPassword == true) {
      setShowPassword(false);
    }
  };
  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        className="w-full h-20 pl-4 p-2 shadow-xl border outline-0"
        placeholder={props.placeholder}
      />
      <div className="absolute top-6 right-5 text-slate-600 z-10 border-l pl-2">
        <button onClick={handleClick}>
          {showPassword ? (
            <EyeIcon className="w-8 h-8" />
          ) : (
            <EyeOffIcon className="w-8 h-8" />
          )}
        </button>
      </div>
      {props.validation?.password && (
        <ErrorMessage message={props.validation.password} />
      )}
    </div>
  );
};

export default PasswordField;
