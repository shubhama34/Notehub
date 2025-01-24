import Image from 'next/image'
import React from 'react'

const Publisher_card = ({url,name}) => {
  return (
    <article className="mx-8 items-center flex flex-col min-w-28 bg-amber-500 ">
      <img
        src={url}
        className='w-16 h-16 object-cover rounded-full'
      ></img>
      <span>{name}</span>
    </article>
  );
}

export default Publisher_card
