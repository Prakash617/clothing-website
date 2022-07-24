import React from 'react'

type Props = {}

const Vouchers = (props: Props) => {
  return (
    <>
      <div className="w-4/5 p-4 shadow-xl">
    
    
    <table className="border-collapse w-full ">
  <thead className="bg-gray-100">
    <tr className=" border-gray-300 outline-none  ">
      <th scope="col" className="p-2  text-pink-300 ">Active</th>
        <th scope="col"   className="p-2 text-pink-300">Uses</th>
        <th scope="col"  className="p-2 text-pink-300">Voucher Code</th>
        <th scope="col"  className="p-2 text-pink-300">Valid From</th>
        <th scope="col"  className="p-2 text-pink-300">Valid Until</th>
        <th scope="col"  className="p-2 text-pink-300">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-center">
      <td className="p-2">True</td>
      <td className="">something</td>
      <td className="">1235</td>
      <td className="">1938-12-6</td>
      <td className="">1938-12-30</td>
      <td className="">30</td>
    </tr>

  </tbody>
</table>
</div>

    </>
  )
}

export default Vouchers