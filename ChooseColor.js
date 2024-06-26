import React, { useState } from "react";

const ChooseColor = () => {
  const [color, setColor] = useState("#000000");

  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <h2>Color Picker</h2>
      <div>
        <input type="color" onChange={handleChange} />
        <div
          style={{ width: "300px", height: "50px", backgroundColor: color }}
        ></div>
      </div>
    </>
  );
};

export default ChooseColor;
