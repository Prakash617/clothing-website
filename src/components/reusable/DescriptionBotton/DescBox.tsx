import React from 'react'
import Tbox from './Tbox'

type Props = {
    title:string
}

const DescBox = (props: Props) => {
    const{title} = props
    
    return (
        <>

        <Tbox>
        <h1 className='font-bold font-sans text-2xl'>{title}</h1>
                
                <p className='text-gray-400 m-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.
                </p>
                
          

        </Tbox>
           
        </>
    )
}

export default DescBox