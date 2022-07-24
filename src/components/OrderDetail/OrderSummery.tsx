import React from 'react'
import Button1 from '../reusable/Buttons/Button1'
import PinkBtn from '../reusable/Buttons/PinkBtn'
import TextField from '../reusable/FormComponents/TextField'
import InputField1 from '../reusable/InputField/InputField1'

const OrderSummery = () => {
    return (
        <>
            <div className=' shadow-md p-2 w-[28rem] mt-[1.5rem] ml-4'>
                <h1 className='p-1'>Order Summery</h1>
                <div className='flex justify-between p-1'>
                    <span className='text-slate-400 '>Subtotal (0 items)</span>
                    <span>Rs. 0</span>
                </div>
                <div className='flex justify-between'>
                    <InputField1 text={'Enter Voucher Code'} />
                    
                    <PinkBtn text={'Apply'} type={'submit'} name={'apply'}/>
                </div>
                <div className='flex justify-between p-1'>
                    <span>Total:</span>
                    <span className='text-yellow-500'>Rs. 0</span>
                </div>
                <div className='flex justify-center'>

                    <Button1 text={'PROCEED TO CHECKOUT'} />
                </div>

            </div>
        </>
    )
}

export default OrderSummery