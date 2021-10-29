import React from "react";

import General from "./General";
import Education from "./Education";
import Practical from "./Practical";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isFinished: false };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    this.setState({ isFinished: true });
  }

  render() {
    const { general, practical, education, onInputChange } = this.props;
    let content;
    if (this.state.isFinished === false) {
      content = (
        <div className="form">
          <General general={general} onInputChange={onInputChange} />
          <Practical practical={practical} onInputChange={onInputChange} />
          <Education education={education} onInputChange={onInputChange} />
          <button type="button" onClick={this.submitForm}>
            Finish
          </button>
        </div>
      );
    } else {
      content = (
        <div className="finish">
          <div>
            <h1>Thank you. Your application is now submitted!</h1>
          </div>
        </div>
      );
    }
    return content;
  }
}
