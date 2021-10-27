import React from "react";

export default class Practical extends React.Component {
    constructor(props) {
        super(props)
        this.state = {nValue: '', ptValue: '', mtValue: '', ttValue: ''}
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
                    <label htmlFor="company-name">Company Name</label>
                    <input type='text' id="company-name" value={ nValue } onChange={this.setNValue.bind(this)} required></input>

                    <label htmlFor="position-title">Position Title</label>
                    <input type='text' id="position-title" value={ ptValue } onChange={this.setPtValue.bind(this)} required></input>

                    <label htmlFor="main-tasks">Main Tasks</label>
                    <input type='text' id="main-tasks" value={ mtValue } onChange={this.setMtValue.bind(this)} required></input>

                    <label htmlFor="total-time">Years Worked</label>
                    <input type='number' id="total-time" value={ttValue } onChange={this.setTtValue.bind(this)} required></input>

                    <button type="button">Submit</button>
                </form>
            </div>
           
        )
    }
}