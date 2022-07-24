import React from 'react'
import { text } from 'stream/consumers'
import BlueBtn from '../Buttons/PinkBtn'
import Tbox from '../DescriptionBotton/Tbox'
import CommentBox from './CommentBox'

type Props = {
    title: string
}

const Comment = (props: Props) => {
    const { title } = props
    return (
        <>
            <Tbox>
                <h1>{title}</h1>
                <div className='p-4'>

                    <div className='flex'>
                        <div className='w-5/6'>
                            <input type="text" className='p-3  border-b-2 border-pink-600 outline-none  mt-2 w-full' placeholder='Comments' />
                        </div>
                        <div className='w-1/6'>
                            <BlueBtn text={'Submit'} />
                        </div>

                    </div>

                </div>
                <CommentBox />
                <CommentBox />
                <CommentBox />
            </Tbox>

        </>
    )
}

export default Comment