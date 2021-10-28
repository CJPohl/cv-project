import React from "react";

export default class Education extends React.Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitInputs = this.submitInputs.bind(this);
        this.editInputs = this.editInputs.bind(this);

        this.state = {isSubmitted: false}
    }

    handleInputChange(e) {
        this.props.onInputChange(e);
    }

    submitInputs() {
        this.setState({isSubmitted: true});
    }

    editInputs() {
        this.setState({isSubmitted: false});
    }

    render() {
        const { nValue, sValue, dsValue, deValue, gValue } = this.props.education;
        let content;
        if (this.state.isSubmitted === false) {
            content = 
                <div className="container">
                    <h3 className="title">Education</h3>
                    <form>
                        <input type='text' id="education" name="nValue" placeholder="School Name" value={ nValue } onChange={this.handleInputChange} required></input>

                        <input type='text' id="education" name="sValue" placeholder="Program of Study" value={ sValue } onChange={this.handleInputChange} required></input>

                        <input type='date' id="education" name="dsValue" placeholder="Date Started" value={ dsValue } onChange={this.handleInputChange} required></input>

                        <input type='date' id="education" name="deValue" placeholder="Date Finished" value={deValue } onChange={this.handleInputChange} required></input>

                        <input type='number' id="education" name="gValue" placeholder="GPA" value={ gValue } onChange={this.handleInputChange} required></input>

                        <button type="button" onClick={this.submitInputs}>Submit</button>
                    </form>
                </div>
            ;
        }
        else {
            content =
                <div className="container">
                    <h3 className="title">Education</h3>
                    <form>
                        <p>School Name: {nValue}</p>

                        <p>Field of Study: {sValue}</p>

                        <p>Date Started: {dsValue}</p>

                        <p>Date Finished: {deValue}</p>

                        <button type="button" onClick={this.editInputs}>Edit</button> 
                    </form>
                </div>
            ;
        }
        return (
            content
        )
    }
}