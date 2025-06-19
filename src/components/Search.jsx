import { useState } from "react";

const Search = ({ searchQuery, setSearchQuery, onKeyUp }) => {
  const handleSearch = (e) => {
    onKeyUp(e);
  };

  return (
    <div className="flex bg-light-100/5 w-[50%] mx-auto p-4 rounded-full mb-10 max-md:w-full">
      <img
        src="/search.svg"
        className="cursor-pointer"
        alt="search icon"
        onClick={() => onKeyUp({ key: 'Enter' })}
      />

      <input
        className="text-white w-full bg-transparent mx-4 outline-none"
        type="text"
        id="Search"
        placeholder="Search Through Thousands Of Movies"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={handleSearch}
      />
      <label htmlFor="Search"></label>
    </div>
  );
};

export default Search;
