import React from "react";

export default class General extends React.Component {
    constructor(props) {
        super(props)
        this.state = {fnValue: '', lnValue: '', eValue: '', mValue: ''};
    }


    setFnValue(e) {
        this.setState({fnValue: e.target.value});
    }
    
    setLnValue(e) {
        this.setState({lnValue: e.target.value});
    }

    setEValue(e) {
        this.setState({eValue: e.target.value});
    }

    setMValue(e) {
        this.setState({mValue: e.target.value});
    }


    render() {
        const { fnValue, lnValue, eValue, mValue } = this.state;
        return (
            <div className="container">
                <h3 className="title">General</h3>
                <form>
                    <div className="names">
                        <input type='text' id="first-name" placeholder="First Name" value={fnValue} onChange={this.setFnValue.bind(this)} required></input>

                        <input type='text' id="last-name" placeholder="Last Name" value={lnValue} onChange={this.setLnValue.bind(this)} required></input>
                    </div>
                   

                    <input type='email' id="email" placeholder="Email" value={eValue} onChange={this.setEValue.bind(this)} required></input>

                    <input type='number' id="mobile-number" placeholder="Phone Number" value={mValue} onChange={this.setMValue.bind(this)} required></input>

                    <button type="button">Submit</button>
                </form>
            </div>
           
        )
    }
}