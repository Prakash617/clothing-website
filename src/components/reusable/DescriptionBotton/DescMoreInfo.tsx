import React from 'react'
import Tbox from './Tbox'

type Props = {
  title:string
}

const DescMoreInfo = (props: Props) => {
  const {title} = props
  return (
    <>
        <Tbox>
        <h1 className='font-bold font-sans text-2xl'>{title}</h1>
          <div className='flex'>
          
          <div className='h-[4rem] w-[20rem]  border-y-2 border-l-2 border-gray-300 ml-6 mt-6  '>
          <p className='text-gray-500 mt-3 ml-2'>Color</p>
          </div>
          <div className='h-[4rem] w-[20rem]  border-2 border-gray-300  mt-6  '>
          <p className='text-gray-500 mt-3 ml-2'>Red</p>
          </div>
        
          </div>
        </Tbox>
    </>
  )
}

export default DescMoreInfo