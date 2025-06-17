import { useState } from "react";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className=" flex bg-light-100/5 w-[50%] mx-auto p-4 rounded-full mb-10 max-md:w-full ">
      <img
        src="../../public/search.svg"
        className=" cursor-pointer"
        alt="search icon"
      />

      <input
        className="text-white w-full bg-transparent mx-4 outline-none"
        type="text"
        id="Search "
        placeholder="Search Through Thousands Of Movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label htmlFor="Search"></label>

      <h3 className="text-white">{searchTerm}</h3>
    </div>
  );
};

export default Search;
