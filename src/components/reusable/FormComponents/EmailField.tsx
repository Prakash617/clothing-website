import { MailIcon } from '@heroicons/react/outline'
import React from "react";
import ErrorMessage from "../Message/ErrorMessage";

type Props = {
  handleChange: any;
  value: any;
  clickHandler?: any;
  name: string;
  validation?: any;
  placeholder?: any;
};

const EmailField = (props: Props) => {
  return (
    <div className="relative">
      <input
        type="email"
        className="w-full h-20 pl-4 p-2 shadow-xl border outline-0"
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
      <div className="absolute top-6 right-5 text-slate-600 z-10 border-l pl-2">
        <button onClick={props.clickHandler}>
          <MailIcon className="w-8 h-8" />
        </button>
      </div>
      {props.validation?.email && (
        <ErrorMessage message={props.validation.email} />
      )}
    </div>
  );
};

export default EmailField