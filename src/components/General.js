import React from "react";

export default class General extends React.Component {
    constructor(props) {
        super(props)
        this.state = {fnValue: '', lnValue: '', eValue: '', mValue: ''}
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
                    <label htmlFor="first-name">First Name</label>
                    <input type='text' id="first-name" value={fnValue} onChange={this.setFnValue.bind(this)} required></input>

                    <label htmlFor="last-name">Last Name</label>
                    <input type='text' id="last-name" value={lnValue} onChange={this.setLnValue.bind(this)} required></input>

                    <label htmlFor="email">Email</label>
                    <input type='email' id="email" value={eValue} onChange={this.setEValue.bind(this)} required></input>

                    <label htmlFor="mobile-number">Mobile Phone Number</label>
                    <input type='number' id="mobile-number" value={mValue} onChange={this.setMValue.bind(this)} required></input>

                    <button type="button">Submit</button>
                </form>
            </div>
           
        )
    }
}