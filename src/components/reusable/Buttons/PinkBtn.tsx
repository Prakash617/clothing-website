import React from 'react'

type Props = {
  text:string
  type:any
  name:string
  
}

const BlueBtn = (props: Props) => {
    const {name ,type ,text}=props
  return (
    <div>
        <button name={name} type={type}  className=" m-2 px-6 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 p-3">{text}</button>
    </div>
  )
}
export default BlueBtn