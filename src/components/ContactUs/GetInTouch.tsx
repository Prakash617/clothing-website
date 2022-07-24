import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
import React from 'react'
import TitleComponent from '../reusable/TitleComponent'

type Props = {}

const GetInTouch = (props: Props) => {
  return (
    <div>
      <TitleComponent title={'get in touch'}
        subTitleTracking={false}
        subTitle={"An illud nemore sanctus eam. Homero dicunt apeirian et sea bonorum sapientem consequuntur sea ea. Cum paulo aperiri molestie id, amet eam omnes electram."}
      />
      <div className='border-t border-b divide-y'>
        <div className='p-7 flex items-center divide-x'>
          <PhoneIcon className="h-12 w-12 mr-7 text-orange-400" />
          <div className='pl-5 space-y-2'>
            <div className='text-4xl font-semibold text-slate-800'>Phone</div>
            <div className='font-light text-slate-500'>+977-928377488</div>
          </div>
        </div>

        <div className='p-7 flex items-center divide-x'>
          <MailIcon className="h-12 w-12 mr-7 text-blue-400" />
          <div className='pl-5 space-y-2'>
            <div className='text-4xl font-semibold text-slate-800'>Email</div>
            <div className='font-light text-slate-500'>cottonside@gmail.com</div>
          </div>
        </div>

        <div className='p-7 flex items-center divide-x'>
          <LocationMarkerIcon className="h-12 w-12 mr-7 text-purple-400" />
          <div className='pl-5 space-y-2'>
            <div className='text-4xl font-semibold text-slate-800'>Location</div>
            <div className='font-light text-slate-500'>Kathmandu, Nepal 44000 </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch