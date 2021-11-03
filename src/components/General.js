import React, { useState } from "react";

const General = (props) => {
  const [isSubmitted, changeSubmit] = useState(false);

  const { fnValue, lnValue, eValue, mValue } = props.general;

  const handleInputChange = (e) => {
    props.onInputChange(e);
  };

  const handleSubmit = () => {
    changeSubmit(!isSubmitted);
  };

  if (!isSubmitted) {
    return (
      <div className="container">
        <h3 className="title">General</h3>
        <form>
          <div className="names">
            <input
              type="text"
              id="general"
              name="fnValue"
              placeholder="First Name"
              value={fnValue}
              onChange={handleInputChange}
              required
            />

            <input
              type="text"
              id="general"
              name="lnValue"
              placeholder="Last Name"
              value={lnValue}
              onChange={handleInputChange}
              required
            />
          </div>

          <input
            type="email"
            id="general"
            name="eValue"
            placeholder="Email"
            value={eValue}
            onChange={handleInputChange}
            required
          />

          <input
            type="number"
            id="general"
            name="mValue"
            placeholder="Phone Number"
            value={mValue}
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
        <h3 className="title">General</h3>
        <form className="submitted-form">
          <div className="names">
            <p>First Name: {fnValue}</p>

            <p>Last Name: {lnValue}</p>
          </div>

          <p>Email: {eValue}</p>

          <p>Phone Number: {mValue}</p>

          <button type="button" onClick={handleSubmit}>
            Edit
          </button>
        </form>
      </div>
    );
  }
};

export default General;
