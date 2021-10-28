import React from "react";

export default class General extends React.Component {
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
        const { fnValue, lnValue, eValue, mValue } = this.props.general;
        let content;
        if (this.state.isSubmitted === false) {
            content = 
                <div className="container">
                    <h3 className="title">General</h3>
                    <form>
                        <div className="names">
                            <input type='text' id="general" name="fnValue" placeholder="First Name" value={fnValue} onChange={this.handleInputChange} required></input>

                            <input type='text' id="general" name="lnValue" placeholder="Last Name" value={lnValue} onChange={this.handleInputChange} required></input>
                        </div>
                    

                        <input type='email' id="general" name="eValue" placeholder="Email" value={eValue} onChange={this.handleInputChange} required></input>

                        <input type='number' id="general" name="mValue" placeholder="Phone Number" value={mValue} onChange={this.handleInputChange} required></input>

                        <button type="button" onClick={this.submitInputs}>Submit</button>
                    </form>
                </div>
            ;
        }
        else {
            content =
                <div className="container">
                    <h3 className="title">General</h3>
                    <form>
                        <div className="names">
                            <p>First Name: {fnValue}</p>

                            <p>Last Name: {lnValue}</p>
                        </div>

                        <p>Email: {eValue}</p>

                        <p>Phone Number: {mValue}</p>

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