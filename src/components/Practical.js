import React from "react";

export default class Practical extends React.Component {
    constructor(props) {
        super(props)
        this.state = {nValue: '', ptValue: '', mtValue: '', ttValue: ''};
    }


    setNValue(e) {
        this.setState({nValue: e.target.value});
    }
    
    setPtValue(e) {
        this.setState({ptValue: e.target.value});
    }

    setMtValue(e) {
        this.setState({mtValue: e.target.value});
    }

    setTtValue(e) {
        this.setState({ttValue: e.target.value});
    }


    render() {
        const { nValue, ptValue, mtValue, ttValue } = this.state;
        return (
            <div className="container" id="container-3">
                <h3 className="title">Practical</h3>
                <form>
                    <input type='text' id="company-name" placeholder="Company Name" value={ nValue } onChange={this.setNValue.bind(this)} required></input>

                    <input type='text' id="position-title" placeholder="Position Title" value={ ptValue } onChange={this.setPtValue.bind(this)} required></input>

                    <input type='text' id="main-tasks" placeholder="Main Tasks" value={ mtValue } onChange={this.setMtValue.bind(this)} required></input>

                    <input type='number' id="total-time" placeholder="Duration of Position" value={ttValue } onChange={this.setTtValue.bind(this)} required></input>

                    <button type="button">Submit</button>
                </form>
            </div>
           
        )
    }
}