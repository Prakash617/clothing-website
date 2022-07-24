import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const BreadCrumbs = (props: Props) => {
  const router = useRouter()

  return (
    <div className='w-full h-40 bg-[url(http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/breadcrumbs.jpg)] bg-cover bg-center'>
      <div className='w-full h-full flex justify-center items-center gap-x-6'>
        <Link href={"/home"} passHref>
          <div className='hover:text-primary cursor-pointer font-light tracking-widest uppercase'>
            HOMEPAGE
          </div>
        </Link>
        <div className='font-light tracking-widest uppercase'>
          {router.asPath}
        </div>

      </div>
    </div>
  )
}

export default BreadCrumbs