import React from 'react'

type Props = {}

const PriceFilter = (props: Props) => {
  return (
    <div className='p-3'>
      <div className=' text-2xl capitalize font-semibold text-slate-800'>Filter By Price</div>
      <br />
      <input type="range" min="1" max="100" className='accent-primary' />
      <p>price: 50-100</p>
    </div>
  )
}

export default PriceFilter