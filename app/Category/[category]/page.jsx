"use client"
import Category_list from '@/app/components/Category_list';
import Nav from '@/app/components/Nav';
import MainData from '@/utils/data';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

const Coursepage = () => {
    const params=useParams()
    const {category}=params;
    let temp_data=MainData.streams;
    temp_data=temp_data[category]
    
 const [data, setData] = useState(temp_data);

 // Function to search streams by name
 function searchStreams(query) {
   let temp = MainData.streams.filter((stream) =>
     stream.name.toLowerCase().includes(query.toLowerCase())
   );
   setData((prev) => {
     return temp;
   });
 }
 return (
   <main className="flex h-screen  flex-col items-center px-60">
     <Nav />
     <div className="flex w-full bg-slate-100 max-h-full h-full overflow-y-auto flex-col items-center p-5  ">
       <div className="w-full flex">{data.name}</div>
       <Category_list data={data.courses} />
     </div>
   </main>
 );
}

export default Coursepage
