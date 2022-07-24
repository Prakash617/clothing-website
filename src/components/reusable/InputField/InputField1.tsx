import React, { useState } from 'react'

type Props = {
    text:string
}

const InputField1 = (props: Props) => {
    const {text} = props
    const [userInput, setuserInput] = useState('')

    const setUserInput=(e: React.ChangeEvent<HTMLInputElement>)=>setuserInput(e.target.value)
  return (
    <>
    <input type="text" placeholder={text} value={userInput}  onChange={(e)=>setUserInput(e)} height="100%" className='border-2 m-1 p-3 border-pink-600  focus:border-pink-800  active:bg-pink-100'/>
    </>
  )
}

export default InputField1


