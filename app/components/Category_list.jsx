import React from 'react'
import Category_card from './Category_card'

const Category_list = ({data,data_name}) => {
  
  return (
    <div className="w-full flex my-2 flex-col overflow-y-scroll max-h-full h-full px-2 ">
      {data.map((item,i)=>{
        return <Category_card text={item.name} index={i} />;
      
      })}
    </div>
  );
}

export default Category_list
