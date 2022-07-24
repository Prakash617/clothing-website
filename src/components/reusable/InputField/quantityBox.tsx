import React, { useState } from 'react'
import {ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline'

type Props = {}



const QuantityBox = (props: Props) => {
  const[number, setNumber] = useState(0)
  const [arrowUP,setarrowUP] = useState(false)
  const onInputChange=(e:any)=>{
    // console.log(e.target.value)
    setNumber(e.target.value)
      
    };
   const increase = ()=>{
     setNumber(number + 1)
   }
   const decrement = ()=>{
     if (number <= 0){
       setNumber(0)
       
     }
     else{

       setNumber(number - 1)
     }
     
   }
  return (
    <div className='h-15 w-24 m-3 shadow-2xl relative'>
        
            <input type="text" className='outline-none p-2 h-12 w-12 mt-5 mb-3 ml-3' value={number}  onChange ={(e) => {
              onInputChange(e)}}/>
       
        <div className='flex flex-col absolute right-2 top-4'>
            <div>
                <ChevronUpIcon className='h-4 w-4 mb-4 text-pink-600 cursor-pointer '  onClick={()=>increase()}/>
            </div>
            <div>
                <ChevronDownIcon className='h-4 w-4 text-pink-600 cursor-pointer 'onClick={()=>decrement()}/>
            </div>
        </div>

    </div>
  )
}

export default QuantityBox