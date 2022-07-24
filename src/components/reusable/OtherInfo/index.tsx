import { ArchiveIcon, CashIcon, LocationMarkerIcon, MailIcon, PhoneIcon, StatusOnlineIcon } from '@heroicons/react/outline'
import React from 'react'
import TitleComponent from '../TitleComponent'

type Props = {}

const OtherInfo = (props: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 p-4 text-center lg:text-left'>
      <div className=' md:col-span-2 col-span-1 lg:col-span-1'>
        <TitleComponent title={'Qtex'} />
        <div className='text-gray-500 text-lg font-light -mt-8 '>
          <div className='flex items-center justify-center lg:justify-start'>
            <PhoneIcon className="h-5 w-5 mr-2" />
            +977-928377488
          </div>
          <div className='flex items-center justify-center lg:justify-start'>
            <MailIcon className="h-5 w-5 mr-2" />
            cottonside@example.com
          </div>
          <div className='flex items-center justify-center lg:justify-start'>
            <LocationMarkerIcon className="h-5 w-5 mr-2" />
            Kathmandu, Nepal 44000
          </div>
        </div>
      </div>

      <div className=''>
        <TitleComponent title='Hours' />
        <div className='text-gray-500 text-lg font-light -mt-8'>
          <div className='flex justify-around lg:justify-between '>
            <span>Weekdays</span><span>8:00 - 20:00</span>
          </div>
          <div className='flex justify-around lg:justify-between'>
            <span>Saturday</span><span>9:00 - 16:00</span>
          </div>
          <div className='flex justify-around lg:justify-between'>
            <span>Sunday</span><span>Closed</span>
          </div>
          <div className='flex justify-around lg:justify-between'>
            <span>Holidays</span><span>9:00 - 16:00</span>
          </div>
        </div>
      </div>

      <div>
        <TitleComponent title='Details' />
        <div className='text-gray-500 text-lg font-light -mt-8'>
          <div className='flex items-center justify-center lg:justify-start'>
            <ArchiveIcon className="h-5 w-5 mr-2" />
            Worldwide 100&#37; Free Shipping
          </div>
          <div className='flex items-center justify-center lg:justify-start'>
            <StatusOnlineIcon className="h-5 w-5 mr-2" />
            Fast and Excellent Customer Support
          </div>
          <div className='flex items-center justify-center lg:justify-start'>
            <CashIcon className="h-5 w-5 mr-2" />
            100&#37; Moneyback Guarantee
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherInfo