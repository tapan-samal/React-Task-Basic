import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }
  return (
    <>
      <h2>Toggle Switch</h2>
      <div>
        <label>
          <input type="checkbox" onChange={handleToggle} />
        </label>
        <h3>{isToggled ? "On" : "Off"}</h3>
      </div>
    </>
  );
};

export default ToggleSwitch;