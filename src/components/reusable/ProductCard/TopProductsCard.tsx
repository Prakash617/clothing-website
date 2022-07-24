import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import React from 'react'

type Props = {
  imageUrl: any;
  title: string;
  price: any;
  id:string
};

const TopProductsCard = (props: Props) => {
  return (
    <div className="flex mt-6">
      <div className="max-w-[70px]">
        <img
          src={
            props.imageUrl?.length === 0
              ? "/notfound.webp"
              : props.imageUrl?.[0].media
          }
          height={600}
          width={600}
          alt={"**"}
        />
      </div>
      <div className="flex flex-col space-y-1 ml-2 justify-center text-sm">
        <Link href = {`/productDetail/${props.id}`}><h4 className='cursor-pointer hover:text-primary'>{props.title}</h4></Link>
        
        <div className="flex">
          <StarIcon className="w-3 h-3 text-primary" />
          <StarIcon className="w-3 h-3 text-primary" />
          <StarIcon className="w-3 h-3 text-primary" />
          <StarIcon className="w-3 h-3 text-primary" />
          <StarIcon className="w-3 h-3 text-primary" />
        </div>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default TopProductsCard