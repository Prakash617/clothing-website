import React from 'react'

type Props = {
    children:any
}

const Tbox = (props: Props) => {
    const {children} =  props
  return (
    <>
        <div className='p-10 border-t-4 w-[49rem]  border-pink-600 shadow-xl'>
                
                
                {children}
            </div>
    </>
  )
}

export default Tbox