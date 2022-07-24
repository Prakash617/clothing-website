import { StarIcon } from '@heroicons/react/outline'
import React from 'react'
import Button1 from '../Buttons/Button1'
import QuantityBox from '../InputField/quantityBox'

type Props = {
  id:any
}

const DescCard = (props: Props) => {
const {id} = props
  return (
    <>
     <div>
                            {/* Product-Image */}
        <div className=" w-[49rem] flex pr-5 pt-5 ">
          <div>
            <img src="/beanie-2.jpg" className="w-96 h-96" alt="beanie-2.jpg" />
          </div>
                            {/* Product-Detail */}
          <div className="flex flex-col">

          <div className="p-8">
            <h1 className="text-2xl font-bold">Beanie {id}</h1>
            <div className="flex">

            <span className="flex mt-1">
              <StarIcon className="h-4 w-4 text-pink-700"/>
              <StarIcon className="h-4 w-4 text-pink-700"/>
              <StarIcon className="h-4 w-4 text-pink-700"/>
              <StarIcon className="h-4 w-4 text-pink-700"/>
              <StarIcon className="h-4 w-4 text-pink-700"/>
            
            </span>
            <span className="text-lg" >(5593 customer reviews)</span>
            </div>
            <div>
              <span className="line-through m-2 text-lg ml-3">20.00$</span>
              <span className="text-pink-700 text-lg">18.00$</span>
            </div>
            <h1 className="text-lg my-2">This is a simple product.</h1>
            <div className="flex justify-center">
              <div><QuantityBox/></div>
              <div className="mt-6 ml-2"><Button1 text={"ADD TO CART"}/></div>
            </div>
            <hr />
            <p className="my-4">SKU: woo-beanie</p>
            <hr />
            <p className="my-4 ">Category: <span className="text-pink-600">Accessories</span> </p>
            <hr />
          </div>
          <div></div>
          </div>
          
        </div>

        </div>
    </>
  )
}

export default DescCard