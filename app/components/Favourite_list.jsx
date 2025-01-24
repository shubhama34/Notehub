import React from "react";

import Favourite_card from "./Favourite_card";

const Favourite_list = () => {
  return (
    <div className="flex w-full bg-slate-400 my-5 flex-col">
      <span>Favourites</span>
      <div className="flex max-w-full overflow-x-auto ">
        <Favourite_card />
        <Favourite_card />
        <Favourite_card />
        <Favourite_card />
        <Favourite_card />
        <Favourite_card />
        <Favourite_card />
        <Favourite_card />
        <Favourite_card />
        <Favourite_card />
        <Favourite_card />
      </div>
    </div>
  );
};

export default Favourite_list;
