import React from 'react'

type ITitleComponentProps = {
  center?: boolean;
  title: string;
  subTitle?: string;
  subTitleTracking?: boolean;
}

const TitleComponent = (props: ITitleComponentProps) => {
  const { center = false, title, subTitle, subTitleTracking = true } = props
  return (
    <div className='py-10'>
      <h1 className={`text-4xl ${center ? "text-center" : ""} capitalize font-semibold text-slate-800`}>
        {title}
      </h1>
      <br />
      <h3 className={`${center ? "text-center" : ""} ${subTitleTracking ? "tracking-[0.8rem] font-semibold uppercase text-sm" : "font-light"} text-slate-800`}>
        {subTitle}
      </h3>
    </div>
  )
}

export default TitleComponent