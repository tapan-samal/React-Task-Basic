import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLOading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setData(result.slice(0, 6));
        setLOading(false);
      } catch (error) {
        console.error("Error: ", error.message);
        setError(error.message);
        setLOading(false);
      }
    };
    fetchApi();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error: {error} </div>;
  }
  return (
    <>
      <h2>Fetch Data</h2>
      {data.map((d) => {
        return (
          <div key={d.id}>
            <h4>{d.id}</h4>
            <h4>{d.name}</h4>
            <p>{d.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default FetchApi;
