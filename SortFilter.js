import React, { useState } from "react";

const SortFilter = () => {
  const leaders = [
    { name: "Narendra Modi", position: "PM", age: 66 },
    { name: "MS Dhoni", position: "Captain", age: 44 },
    { name: "Drapadi Murmu", position: "President", age: 55 },
    { name: "Vikash Dibyakriti", position: "Motivator", age: 48 },
    { name: "Ratan Tata", position: "Entrepreneur", age: 60 },
    { name: "B K Shivani", position: "Spiritual", age: 42 },
  ];

  const [filterByAge, setFilterByAge] = useState(false);
  const [sortBy, setSortBy] = useState("");

  // Handle filter and sorting state
  const handleAllData = () => {
    setFilterByAge(false);
    setSortBy("");
  };
  const handleFilterByAge = () => setFilterByAge(true);
  const handleSortBySenior = () => setSortBy("senior");
  const handleSortByJunior = () => setSortBy("junior");

  const getSortedLeaders = (leaders) => {
    if (sortBy === "senior") {
      return [...leaders].sort((a, b) => a.age - b.age);
    } else if (sortBy === "junior") {
      return [...leaders].sort((a, b) => b.age - a.age);
    } else {
      return leaders;
    }
  };

  const getFilteredLeaders = () => {
    let filteredLeaders = filterByAge
      ? leaders.filter((person) => person.age > 50)
      : leaders;

    return getSortedLeaders(filteredLeaders); 
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <button onClick={handleAllData}>All Data</button>{" "}
        <button onClick={handleSortBySenior}>Sort By Senior</button>{" "}
        <button onClick={handleSortByJunior}>Sort By Junior</button>{" "}
        <button onClick={handleFilterByAge}>Filter above 50</button>{" "}
      </div>

      {getFilteredLeaders().map((leader, idx) => (
        <h2 key={idx}>
          {leader.name} : {leader.age} years 
        </h2>
      ))}
    </div>
  );
};

export default SortFilter;
