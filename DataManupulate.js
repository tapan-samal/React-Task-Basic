//Array and Object Manupulatuion
import React, { useState } from "react";

const DataManupulate = () => {
  const movies = [
    { id: 1, name: "Main Kiya Hun", relese: 2025 },
    { id: 2, name: "Main Alien Hun", relese: 2030 },
  ];
  const languages = ["JavaScript", "Node", "MongoDB"];
  const [language, setLanguage] = useState(languages);
  const [person, setPerson] = useState({ name: "Ram", location: "Ayodha" });
  const [movie, setMovie] = useState(movies);

  const addData = () => setLanguage([...language, "Phython"]);

  const removeData = () =>
    setLanguage(language.filter((item) => item !== "Phython"));

  const updateData = () =>
    setLanguage(
      language.map((lang) =>
        lang === "MongoDB" ? "MySQL" : lang === "MySQL" ? "MongoDB" : lang
      )
    );

  const handleUpdatePerson = () => {
    setPerson({ ...person, location: "Baranasi" });
  };

  const handleUpdateMovie = () => {
    setMovie(
      movie.map((movi) =>
        movi.id === 2 ? { ...movie, name: "Main Manab Hun"} : movi
      )
    );
  };

  return (
    <>
      <h2>Data Manupulation::</h2>
      <h3>Update Array:</h3>
      {language.map((lang) => (
        <div key={Math.random()}>{lang}</div>
      ))}
      <button onClick={addData}>Add</button>{" "}
      <button onClick={removeData}>Remove</button>{" "}
      <button onClick={updateData}>Update</button>

      <h3>Update Object:</h3>
      <div>
        Name: {person.name}, Location: {person.location} <br />
        <button onClick={handleUpdatePerson}>Update</button>
      </div>
      
      <h3>Update Array of Object:</h3>
      {movie.map((film) => {
        return (
          <div key={Math.random()}>
            {film.name}, {film.relese}
          </div>
        );
      })}
      <br />
      <button onClick={handleUpdateMovie}>Update Movie</button>
    </>
  );
};

export default DataManupulate;
