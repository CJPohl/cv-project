import React, { useState } from "react";

import General from "./General";
import Education from "./Education";
import Practical from "./Practical";

const Form = (props) => {
  const [isFinished, changeFinish] = useState(false);

  const { general, practical, education, onInputChange } = props;

  const submitForm = () => {
    changeFinish(!isFinished);
  };

  if (!isFinished) {
    return (
      <div className="form">
        <General general={general} onInputChange={onInputChange} />
        <Practical practical={practical} onInputChange={onInputChange} />
        <Education education={education} onInputChange={onInputChange} />
        <button type="button" onClick={submitForm}>
          Finish
        </button>
      </div>
    );
  } else {
    return (
      <div className="finish">
        <div>
          <h1>Thank you. Your application is now submitted!</h1>
        </div>
      </div>
    );
  }
};

export default Form;
