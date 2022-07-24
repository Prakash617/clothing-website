import { PhoneIcon } from '@heroicons/react/outline'
import React from 'react'
import ErrorMessage from "../Message/ErrorMessage";

type Props = {
  handleChange: any;
  value: any;
  clickHandler: any;
  name: string;
  validation: any;
  placeholder: any;
};

const PhoneNumberField = (props: Props) => {
  return (
    <div className="relative">
      <input
        value={props.value}
        onChange={props.handleChange}
        type="tel"
        name={props.name}
        className="w-full h-20 pl-4 p-2 shadow-xl border outline-0"
        placeholder={props.placeholder}
      />
      <div className="absolute top-6 right-5 text-slate-600 z-10 border-l pl-2">
        <PhoneIcon className="w-8 h-8" />
      </div>
      {props.validation?.phone && (
        <ErrorMessage message={props.validation.phone} />
      )}
    </div>
  );
};

export default PhoneNumberField