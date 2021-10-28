import React from "react";

import Form from "./Form";
import Print from "./Print";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                general: {
                    fnValue: '',
                    lnValue: '',
                    eValue: '',
                    mValue: '',
                },
                practical: {
                    cValue: '',
                    ptValue: '',
                    mtValue: '',
                    ttValue: '',  
                },
                education: {       
                    nValue: '',
                    sValue: '',
                    dsValue: '',
                    deValue: '',
                    gValue: ''
                }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const inputType = e.target.id;
        const value = e.target.value;
        const inputName = e.target.name;
        this.setState({
            [inputType]: {
                ...this.state[inputType],
                [inputName]: value
            }
        });
    }

    
    
    render() {
        const { general, practical, education } = this.state;
        return (
            <div className="main">
                <Form
                general={general}
                practical = {practical}
                education = {education}
                onInputChange = {this.handleInputChange}
                />
                <Print
                general = {general}
                practical = {practical}
                education = {education}
                 />
            </div>
        )  
    } 
}