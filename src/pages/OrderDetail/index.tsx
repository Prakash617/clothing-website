import React from 'react'
import OrderDetailComponent from '../../components/OrderDetail/OrderDetailComponent';
import OrderSummery from '../../components/OrderDetail/OrderSummery';



type Props = {}

const OrderDetail = (props: Props) => {
  return (
    <>
      <div className=' justify-center mt-12 md:flex' >

        <div className=' flex shadow-lg  w-[50rem] m-2 justify-center p-7 border-t-4 border-primary'>
          <div className='flex-col justify-center'>
            <h1 className='text-center font-bold mt-2'>Order Detail</h1>

            <OrderDetailComponent />
            <OrderDetailComponent />
            <OrderDetailComponent />
          </div>
        </div>
          <div>

          <OrderSummery />
          </div>

      </div>
    </>

  )
}

export default OrderDetail