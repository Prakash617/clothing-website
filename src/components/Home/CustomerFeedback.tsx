import React from 'react'

type Props = {}

const CustomerFeedback = (props: Props) => {
  return (
    <div className='bg-[url(http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/testimonials.jpg)] 
    w-full h-[32rem] bg-cover bg-center bg-fixed'>
      <div className='bg-white/60 h-full w-full '>
        <div className='flex flex-col items-center justify-center h-full'>
          <img src={"http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/01.jpg"}
            alt={"**"}
            width={150}
            height={150}
            className="rounded-full"
          />
          <br />
          <div className='mx-[15%] text-center text-lg text-slate-700 font-light italic tracking-widest'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quam cumque eveniet illo facere, rem libero atque quidem
              aperiam impedit soluta, dicta magnam optio eius! Repellendus
            </p>
            <br />
            <p className='font-semibold'>ADAM FRANSWORTH</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerFeedback