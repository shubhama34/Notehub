import React from 'react'
import SearchBar from './SearchBar';

const Nav = () => {
  return (
    <div className="flex bg-blue-200 justify-between w-full py-5 px-2">
      <span>NoteHub</span>
      {/* <SearchBar/> */}
      <div className="flex  w-max">
        <span className="mx-4 bg-red-500">Profile</span>
        <span className="mx-4 bg-red-500">Sign Out</span>
      </div>
    </div>
  );
}

export default Nav
