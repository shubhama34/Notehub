import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex w-96 ml-24 h-7 '>
      <button className='px-1'>search</button>
      <input 
      className='w-full'
      type="text" />
    </div>
  )
}

export default SearchBar
