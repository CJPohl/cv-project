import React, { useState } from "react";

const Practical = (props) => {
  const [isSubmitted, changeSubmit] = useState(false);

  const { cValue, ptValue, mtValue, ttValue } = props.practical;

  const handleInputChange = (e) => {
    props.onInputChange(e);
  };

  const handleSubmit = () => {
    changeSubmit(!isSubmitted);
  };

  if (!isSubmitted) {
    return (
      <div className="container">
        <h3 className="title">Practical</h3>
        <form>
          <input
            type="text"
            id="practical"
            name="cValue"
            placeholder="Company Name"
            value={cValue}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            id="practical"
            name="ptValue"
            placeholder="Position Title"
            value={ptValue}
            onChange={handleInputChange}
            required
          />

          <textarea
            id="practical"
            placeholder="Main Tasks"
            name="mtValue"
            value={mtValue}
            onChange={handleInputChange}
            required
          />

          <input
            type="number"
            id="practical"
            name="ttValue"
            placeholder="Duration of Position"
            value={ttValue}
            onChange={handleInputChange}
            required
          />

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h3 className="title">Practical</h3>
        <form className="submitted-form">
          <p>Company Name: {cValue}</p>

          <p>Position Title: {ptValue}</p>

          <p>Main Tasks: {mtValue}</p>

          <p>Total Time: {ttValue} years</p>

          <button type="button" onClick={handleSubmit}>
            Edit
          </button>
        </form>
      </div>
    );
  }
};

export default Practical;
