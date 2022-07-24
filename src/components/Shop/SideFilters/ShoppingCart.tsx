import React from 'react'

type Props = {}

const ShoppingCart = (props: Props) => {
  return (
    <div className='p-5'>
      <div className='text-2xl capitalize font-semibold text-slate-800'>Shopping Cart</div>
      <br />
      <p>No product in cart</p>
    </div>
  )
}

export default ShoppingCart