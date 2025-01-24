import React from 'react'
import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link';
const Category_card = ({text,index}) => {

      const currentPath = usePathname();
   
  return (
    <Link href={`${currentPath}/${index}`}>
      <div className="my-2 bg-amber-200 w-1/2 ">{text}</div>
    </Link>
  );
}

export default Category_card
