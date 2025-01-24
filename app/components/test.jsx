"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Test = () => {
    const router=useRouter();
  return (
    <div>
      <Link href={"/login"}>test</Link>
    </div>
  )
}

export default Test
