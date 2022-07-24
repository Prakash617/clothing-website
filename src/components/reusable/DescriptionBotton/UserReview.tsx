import { StarIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {}

const UserReview = (props: Props) => {
    return (
        <>
        <div className='p-2'>
            
            <div className='flex mt-4'>
                <div>
                    <img src="/beanie-2.jpg" alt="beanie-2.jpg" className=' h-[7.75rem] w-[7.75rem]' />
                </div>
                <div className='flex-col p-2'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-gray-600 font-bold'>Bob</h1>
                        </div>
                        <div>
                            <h1 className='text-gray-600 font-bold'>21 MAY</h1>
                        </div>

                    </div>

                    <div>
                        <span className="flex mt-1">
                            <StarIcon className="h-4 w-4 text-pink-700" />
                            <StarIcon className="h-4 w-4 text-pink-700" />
                            <StarIcon className="h-4 w-4 text-pink-700" />
                            <StarIcon className="h-4 w-4 text-pink-700" />
                            <StarIcon className="h-4 w-4 text-pink-700" />

                        </span>
                    </div>
                    <div>
                        <p className='text-gray-500'>Your email address will not be published. Your email address will not be published.</p>
                    </div>

                </div>

            </div>
            </div>
            <hr />
        </>
    )
}

export default UserReview