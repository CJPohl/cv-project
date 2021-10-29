import React from "react";

export default class Practical extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitInputs = this.submitInputs.bind(this);
    this.editInputs = this.editInputs.bind(this);

    this.state = { isSubmitted: false };
  }

  handleInputChange(e) {
    this.props.onInputChange(e);
  }

  submitInputs() {
    this.setState({ isSubmitted: true });
  }

  editInputs() {
    this.setState({ isSubmitted: false });
  }

  render() {
    const { cValue, ptValue, mtValue, ttValue } = this.props.practical;
    let content;
    if (this.state.isSubmitted === false) {
      content = (
        <div className="container">
          <h3 className="title">Practical</h3>
          <form>
            <input
              type="text"
              id="practical"
              name="cValue"
              placeholder="Company Name"
              value={cValue}
              onChange={this.handleInputChange}
              required
            />

            <input
              type="text"
              id="practical"
              name="ptValue"
              placeholder="Position Title"
              value={ptValue}
              onChange={this.handleInputChange}
              required
            />

            <textarea
              id="practical"
              placeholder="Main Tasks"
              name="mtValue"
              value={mtValue}
              onChange={this.handleInputChange}
              required
            />

            <input
              type="number"
              id="practical"
              name="ttValue"
              placeholder="Duration of Position"
              value={ttValue}
              onChange={this.handleInputChange}
              required
            />

            <button type="button" onClick={this.submitInputs}>
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      content = (
        <div className="container">
          <h3 className="title">Practical</h3>
          <form className="submitted-form">
            <p>Company Name: {cValue}</p>

            <p>Position Title: {ptValue}</p>

            <p>Main Tasks: {mtValue}</p>

            <p>Total Time: {ttValue} years</p>

            <button type="button" onClick={this.editInputs}>
              Edit
            </button>
          </form>
        </div>
      );
    }
    return content;
  }
}
