import React from 'react'
import Tbox from './Tbox'
import UserReview from './UserReview'

type Props = {
  title:string
}

const Review = (props: Props) => {
  const{title} = props
  return (
    <>
        <Tbox>
        <h1 className='font-bold font-sans text-2xl'>{title}</h1>
            <div className='mt-2'>
                <hr />
                <div className='flex-col'>
                    <UserReview/>
                    <UserReview/>
                    <UserReview/>
                    <UserReview/>


                </div>
            </div>
        </Tbox>

    </>
  )
}

export default Review