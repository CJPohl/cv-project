import React from "react";

export default class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {nValue: '', sValue: '', dsValue: '', deValue: '', gValue: ''};
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

    setGValue(e) {
        this.setState({gValue: e.target.value});
    }


    render() {
        const { nValue, sValue, dsValue, deValue, gValue } = this.state;
        return (
            <div className="container">
                <h3 className="title">Education</h3>
                <form>
                    <input type='text' id="school-name" placeholder="School Name" value={ nValue } onChange={this.setNValue.bind(this)} required></input>

                    <input type='text' id="study-name" placeholder="Program of Study" value={ sValue } onChange={this.setSValue.bind(this)} required></input>

                    <input type='date' id="date-started" placeholder="Date Started" value={ dsValue } onChange={this.setDsValue.bind(this)} required></input>

                    <input type='date' id="date-finished" placeholder="Date Finished" value={deValue } onChange={this.setDeValue.bind(this)} required></input>

                    <input type='number' id="gpa" placeholder="GPA" value={ gValue } onChange={this.setGValue.bind(this)} required></input>

                    <button type="button">Submit</button>
                </form>
            </div>
           
        )
    }
}