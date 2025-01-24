"use client"
import { useState } from 'react';
import Nav from '../components/Nav';
import MainData from '@/utils/data';
import Category_list from '../components/Category_list';


const Catpage = () => {
//   let data = MainData.streams;
const [data,setData]=useState(MainData.streams);

  // Function to search streams by name
  function searchStreams(query) {
    let temp= MainData.streams.filter((stream) =>
      stream.name.toLowerCase().includes(query.toLowerCase())
    );
    setData((prev)=>{
        return temp
    });
  }
  return (
    <main className="flex h-screen  flex-col items-center px-60">
      <Nav />
      <div className="flex w-full bg-slate-100 max-h-full h-full overflow-y-auto flex-col items-center p-5  ">
        <div className="w-full flex">Categories</div>
         <Category_list data={data}/>
      </div>
    </main>
  );
}

export default Catpage
