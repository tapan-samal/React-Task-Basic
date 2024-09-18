import React, { useEffect, useState } from "react";

const SearchApi = () => {
  const [apiData, setApiData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();

        setApiData(result.slice(0, 10)); 
        setFilteredData(result.slice(0, 10));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    setFilteredData(
      apiData.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, apiData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2>Fetch Data and Search Name</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredData.map((data) => (
        <div key={data.id}>
          <h4>{data.name}</h4>
        </div>
      ))}
    </>
  );
};

export default SearchApi;
