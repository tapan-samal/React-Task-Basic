import React, { useState } from "react";

const DisplayFormData = () => {
  const [formData, setFormData] = useState({ fullname: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(null);

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmitBtn = (e) => {
    e.preventDefault();
    setIsSubmitted(formData);
    setFormData({ fullname: "", email: "" });
  };

  return (
    <>
      <h2>Form Data</h2>
      <form onSubmit={handleSubmitBtn}>
        <div>
          <label>Full Name: </label> <br />
          <input
            type="text"
            placeholder="Full Name..."
            name="fullname"
            value={formData.fullname}
            onChange={handleInputData}
            required
          />
        </div>{" "}
        <br />
        <div>
          <label>Email: </label> <br />
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={formData.email}
            onChange={handleInputData}
            required
          />
        </div>{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div>
          <h2>Form Data:</h2>
          <h4>{isSubmitted.fullname}</h4>
          <h4>{isSubmitted.email}</h4>
        </div>
      )}
    </>
  );
};

export default DisplayFormData;
