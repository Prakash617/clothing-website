import React from 'react'
import TitleComponent from '../reusable/TitleComponent'

type Props = {}

const Intro = (props: Props) => {
  return (
    <div className='px-10 overflow-x-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 mr-[-5rem] relative'>
        <img src={"http://webdesign-finder.com/qtex/wp-content/uploads/2018/06/about.png"}
          height={750}
          width={500}
          alt={"**"}
        />
        <div className='w-full lg:ml-[-5rem] lg:mt-[8rem] z-10 row-start-2 col-span-2 lg:row-start-1 lg:col-start-2'>
          <TitleComponent title='organic textilles' subTitle={"for a better future"} />
          <p className='text-slate-500 tracking-widest font-light'>
            We&#39;re an eco-friendly company certified by Control Union
            certifications with GOTS and Organic Content Standard
            (Organic 100 and Organic Blended) and able to produce a
            wide range of organic cotton, bamboo and Tencel clothing.
            We located in Aegean, one of the best regions in the world
            in high quality organic cotton production.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro