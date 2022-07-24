import React from 'react'
import TitleComponent from '../reusable/TitleComponent'

type Props = {}

const NewsEvents = (props: Props) => {
  return (
    <div>
      <TitleComponent center={true} title="News and Events" subTitle='OUR BLOGS' />
    </div>
  )
}

export default NewsEvents