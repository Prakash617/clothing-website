import { ExternalLinkIcon, ShareIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {}

const MiniGallery = (props: Props) => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
      <div className='relative mx-auto' >
        <img src={"http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/gallery-01-1170x780.jpg"}
          alt={"**"}
          width={500}
          height={400}
        />
        <div className='absolute opacity-0 hover:opacity-100 bg-black/50 w-full h-[100%] top-0 flex items-center justify-center'>
          <ExternalLinkIcon className="h-14 w-14 mr-2 text-white hover:text-primary cursor-pointer" />
        </div>
      </div>
      <div className='relative mx-auto'>
        <img src={"http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/gallery-02-1170x780.jpg"}
          alt={"**"}
          width={500}
          height={400}
        />
        <div className='absolute opacity-0 hover:opacity-100 bg-black/50 w-full h-[100%] top-0 flex items-center justify-center'>
          <ExternalLinkIcon className="h-14 w-14 mr-2 text-white  hover:text-primary cursor-pointer" />
        </div>
      </div>
      <div className='relative mx-auto'>
        <img src={"http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/gallery-04-1170x780.jpg"}
          alt={"**"}
          width={500}
          height={400}
        />
        <div className='absolute opacity-0 hover:opacity-100 bg-black/50 w-full h-[100%] top-0 flex items-center justify-center'>
          <ExternalLinkIcon className="h-14 w-14 mr-2 text-white hover:text-primary cursor-pointer" />
        </div>
      </div>
      <div className='relative mx-auto'>
        <img src={"http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/gallery-01-1170x780.jpg"}
          alt={"**"}
          width={500}
          height={400}
        />
        <div className='absolute opacity-0 hover:opacity-100 bg-black/50 w-full h-[100%] top-0 flex items-center justify-center'>
          <ExternalLinkIcon className="h-14 w-14 mr-2 text-white  hover:text-primary cursor-pointer" />
        </div>
      </div>
    </div >
  )
}

export default MiniGallery