import React from 'react'
import Link from 'next/link'

type Props = {
  setdropDown:any
}

const DropDown = (props: Props) => {
  const {setdropDown} = props
  return (
    <>
    <div className='w-48 bg-white shadow-2xl m-2 p-4 mt-6 mr-9 '>

        {/* Currency */}
        <h1 className='font-semibold text-center'>My Account</h1>
        <Link href='/login'><a>
        <p onClick={()=>{setdropDown(false)}} className='font-normal ml-9 mt-2 transition delay-150 duration-200 ease-in-out hover:text-pink-600'>LOG IN</p>
        </a></Link>
        <Link href='/register'><a>
        <p onClick={()=>{setdropDown(false)}} className='font-normal ml-9 mt-2 transition delay-150 duration-200 ease-in-out hover:text-pink-600'>REGISTER</p>
        </a>
        </Link>
   
    </div>
    </>
  )
}

export default DropDown