import { UserIcon } from "@heroicons/react/solid";
import React from "react";
import ErrorMessage from "../Message/ErrorMessage";

type Props = {
  handleChange: any;
  value: any;
  clickHandler: any;
  name: any;
  validation?: any;
  placeholder?: any;
};

const TextField = (props: Props) => {
  return (
    <div className="relative">
      <input
        value={props.value}
        onChange={props.handleChange}
        type="text"
        name={props.name}
        className="w-full h-20 p-2 shadow-xl border outline-0"
        placeholder={props.placeholder}
      />
      <div className="absolute top-6 right-5 text-slate-600 z-10 border-l pl-2">
        <UserIcon className="w-8 h-8" />
      </div>
      {props.validation?.name && (
        <ErrorMessage message={props.validation.name} />
      )}
    </div>
  );
};

export default TextField;
