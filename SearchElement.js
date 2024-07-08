import React, { useEffect, useState } from "react";

const SearchInput = () => {
  let arr = [
    "Dhoni",
    "Rahul",
    "Raina",
    "Jadega",
    "Rohit",
    "Virat",
    "Bumrha",
    "Pandya",
  ];
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState(arr);

  useEffect(() => {
    setSearchList(
      arr.filter((list) => list.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} /> &nbsp;
      </div>{" "}
      <br />
      <div>
        {searchList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default SearchInput;
