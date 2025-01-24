import React from 'react'
import Publisher_card from './Publisher_card'

const Publisher_list = () => {
  return (
    <div className="flex w-full bg-slate-400 my-5 flex-col">
      <span>Publishers you follow</span>
      <div className="flex max-w-full overflow-x-auto ">
        <Publisher_card name={"publisher"} url={"https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Person-icon-Graphics-43204353-1.jpg"} />
      </div>
    </div>
  );
}

export default Publisher_list
