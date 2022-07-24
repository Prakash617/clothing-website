import React from 'react'

type Props = {}

const CommentBox = (props: Props) => {
    return (
        <>
            <div className='w-[43rem] h-[7rem] mt-6 flex shadow-md  mb-8' >
                {/* profile image */}
                <div className='mt-1 ml-2 '>
                    <div className=' h-[5rem] w-[5rem] rounded-[43px]  '>
                        <img src="/headphone.png" alt="" className='h-[4rem] rounded-[12px] ml-2 mt-3 ' />
                    </div>
                </div>
                <div className='p-4 ml-4'>
                    <h1 className='text-lg'>Is this product good..</h1>
                    <p className='text-gray-300'>time_stamp</p>
                </div>

            </div>
           {/* <hr className='mb-2'/> */}

        </>
    )
}

export default CommentBox