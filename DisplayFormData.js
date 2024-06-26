import React, { useState } from "react";

const DisplayFormData = () => {
  const [formData, setFormData] = useState({ userName: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // setFormData({ userName: "", email: "" });
  };

  return (
    <>
      <h2>Input Form Data</h2>
      <form onSubmit={handleSubmitClick}>
        <label>User Name: <input type="text" name="userName" value={formData.userName} onChange={handleInputChange} /></label>{" "}
        <label>Email: <input type="email" name="email" value={formData.email} onChange={handleInputChange} /></label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <>
          <h3>Display Form Data:</h3>
          <p>User Name: {formData.userName}</p>
          <p>Email: {formData.email}</p>
        </>
      )}
    </>
  );
};

export default DisplayFormData;
