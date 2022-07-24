import { ChatIcon } from "@heroicons/react/outline";
import React from "react";
import ErrorMessage from "../Message/ErrorMessage";

type Props = {
  handleChange: any;
  value: any;
  clickHandler: any;
  name: string;
  validation?: any;
  placeholder?: any;
};

const TextAreaField = (props: Props) => {
  return (
    <div>
      <textarea
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        className="w-full h-40 p-2 shadow-xl border outline-0"
        placeholder={props.placeholder}
        rows={8}
      />
      {props.validation?.message && (
        <ErrorMessage message={props.validation.message} />
      )}
    </div>
  );
};

export default TextAreaField;
