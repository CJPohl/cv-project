import React from "react";

export default class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {nValue: '', sValue: '', dsValue: '', deValue: ''}
    }


    setNValue(e) {
        this.setState({nValue: e.target.value});
    }
    
    setSValue(e) {
        this.setState({sValue: e.target.value});
    }

    setDsValue(e) {
        this.setState({dsValue: e.target.value});
    }

    setDeValue(e) {
        this.setState({deValue: e.target.value});
    }


    render() {
        const { nValue, sValue, dsValue, deValue } = this.state;
        return (
            <div className="container">
                <h3 className="title">Education</h3>
                <form>
                    <label htmlFor="school-name">School Name</label>
                    <input type='text' id="school-name" value={ nValue } onChange={this.setNValue.bind(this)} required></input>

                    <label htmlFor="study-name">Field of Study</label>
                    <input type='text' id="study-name" value={ sValue } onChange={this.setSValue.bind(this)} required></input>

                    <label htmlFor="date-started">Date Started</label>
                    <input type='date' id="date-started" value={ dsValue } onChange={this.setDsValue.bind(this)} required></input>

                    <label htmlFor="date-finished">Date Finished</label>
                    <input type='date' id="date-finished" value={deValue } onChange={this.setDeValue.bind(this)} required></input>

                    <button type="button">Submit</button>
                </form>
            </div>
           
        )
    }
}