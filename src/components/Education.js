import React, { useState } from "react";

const Education = (props) => {
  const [isSubmitted, changeSubmit] = useState(false);

  const { nValue, sValue, dsValue, deValue, gValue } = props.education;

  const handleInputChange = (e) => {
    props.onInputChange(e);
  };

  const handleSubmit = () => {
    changeSubmit(!isSubmitted);
  };

  if (!isSubmitted) {
    return (
      <div className="container">
        <h3 className="title">Education</h3>
        <form>
          <input
            type="text"
            id="education"
            name="nValue"
            placeholder="School Name"
            value={nValue}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            id="education"
            name="sValue"
            placeholder="Program of Study"
            value={sValue}
            onChange={handleInputChange}
            required
          />

          <input
            type="date"
            id="education"
            name="dsValue"
            placeholder="Date Started"
            value={dsValue}
            onChange={handleInputChange}
            required
          />

          <input
            type="date"
            id="education"
            name="deValue"
            placeholder="Date Finished"
            value={deValue}
            onChange={handleInputChange}
            required
          />

          <input
            type="number"
            id="education"
            name="gValue"
            placeholder="GPA"
            value={gValue}
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
        <h3 className="title">Education</h3>
        <form className="submitted-form">
          <p>School Name: {nValue}</p>

          <p>Field of Study: {sValue}</p>

          <p>Date Started: {dsValue}</p>

          <p>Date Finished: {deValue}</p>

          <button type="button" onClick={handleSubmit}>
            Edit
          </button>
        </form>
      </div>
    );
  }
};

export default Education;
