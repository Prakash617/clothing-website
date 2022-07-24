import React from 'react'

type Props = {
  setBox:any
  text:string
 
}

const DescBotton = (props: Props) => {

  const {text , setBox} = props


  return (
    <>
    

    {/* <Button className=' border border-indigo-600 '>
        DESCRIPTIONS
    </Button> */}
    <button className="rounded-t-2xl  border-x-2 border-t-2 border-pink-600 p-5" onClick = {()=>setBox(text)}>{text}</button>
    
    </>
  )
}
//  onClick = {()=>showBox(text)}

export default DescBotton