import React from 'react'

type IButton1Props = {
  text: string;
  onClick?: any;
  type?: any;
  color?: any;
};

const Button1 = (props: IButton1Props) => {
  const { color, text, onClick, ...other } = props;
  return (
    <button
      className={`uppercase p-5 px-6 text-sm font-medium 
      tracking-widest rounded-full border-2 hover:border-primary text-slate-700 ${color}`}
      onClick={onClick}
      type={props.type}
      {...other}
    >
      {text}
    </button>
  );
}

export default Button1