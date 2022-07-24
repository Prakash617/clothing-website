import { ChevronRightIcon , TrashIcon , HeartIcon ,MinusCircleIcon ,PlusCircleIcon} from '@heroicons/react/outline'
import React, { useState } from 'react'

import BreadCrumbs from '../reusable/BreadCrumbs'
import MiniGallery from '../reusable/MiniGallery'
import OtherInfo from '../reusable/OtherInfo'
import TitleComponent from '../reusable/TitleComponent'

type Props = {}

const AboutComponent = (props: Props) => {

 
  return (
    <div className='sm:px-10'>
      <BreadCrumbs />
      <br /><br />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <TitleComponent title='Welcome to Cotton Side' subTitle='About our company' />
          <p className='font-light text-slate-500 text-lg'>
            Alterum offendit torquatos sea at, ex quot sonet albucius
            cum. Ne has primis verear detracto duo, nec no tamquam
            repudiandae. Qui eirmod ornatus ex:
            <br /><br />
            <ul className='text-slate-700'>
              <li className='flex items-center'>
                <ChevronRightIcon className="h-3 w-3 mr-2 text-primary " /> Nulla audire delenit simul suscipit bonorum mundi ludus
              </li>
              <li className='flex items-center'>
                <ChevronRightIcon className="h-3 w-3 mr-2 text-primary " />Cibo nemore adversarium mel homero corpora
              </li>
              <li className='flex items-center'>
                <ChevronRightIcon className="h-3 w-3 mr-2 text-primary " />Scripta facete diceret dolorum tollit amet philosophia
              </li>
            </ul>
            <br />
            Mel cu oratio mucius accusamus, in duis accusata intellegam impetus eruditi perpetua mei ea. Munere ignota incorrupte an quo,
            ea eos has option fabellas torquatos. Eu veniam primis impetus
            nam, et tollit iriure est. Omnium honestatis id sed, vim ea magna
            solet signiferumque. Mazim accumsan amet definitionem usu at, nam ex
            velit iudico suscipiantur.</p>
        </div>
        <div className='w-full '>
          <img src='http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/about.jpg'
            alt='about_page_image'
            height={600}
            width={600}
          />
        </div>
      </div>
      <br /><br />
      <MiniGallery />
      <br /><br />
      <OtherInfo />
      <br /><br />
      <div className='pb-12'>
   
      </div>
    </div>
  )
}

export default AboutComponent