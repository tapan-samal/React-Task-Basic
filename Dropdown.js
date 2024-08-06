import React, { useState } from "react";

const Dropdown = () => {
  const cities = ["Mumbai", "Kolkata", "Bangalore", "Delhi"];
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div>
      <h2>Dropdown</h2>
      <select name="city" onChange={(e) => setSelectedCity(e.target.value)}>
        <option>Select City</option>
        {cities.map((city, index) => (
          <option value={city} key={index}>{city}</option>
        ))}
      </select>
      {selectedCity && <p>You have selected: {selectedCity}</p>}
    </div>
  );
};

export default Dropdown;
