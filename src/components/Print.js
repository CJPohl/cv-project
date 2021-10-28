import React from "react";

export default class Print extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        // deconstruct
        const {
            fnValue,
            lnValue,
            eValue,
            mValue
        } = this.props.general;

        const {
            cValue,
            ptValue,
            mtValue,
            ttValue,
        } = this.props.practical;

        const {
            nValue,
            sValue,
            dsValue,
            deValue,
            gValue,
        } = this.props.education;
        
        return (
            <div className="print">
                <div className="print-name">
                    <h1 className="first-name">{ fnValue }</h1>
                    <h1 className="last-name">{ lnValue }</h1>
                </div>
                <div className="print-sub">
                    <p>{ eValue }</p>
                    <p>{ mValue }</p>
                </div>
                <div className="print-spacer"></div>
                <div className="print-practicals">
                    <h2>Practical Experience</h2>
                    <div className="print-practical">
                        <h3>{ptValue} - { cValue }</h3>
                        <ul>
                            <li>{ mtValue }</li>
                            <li>{ ttValue } Years</li>
                        </ul>
                    </div>
                </div>
                <div className="print-spacer"></div>
                <div className="print-educations">
                    <h2>Education</h2>
                    <div className="print-education">
                        <h3>{ nValue }</h3>
                        <ul>
                            <li>{ sValue }</li>
                            <li>{ dsValue }</li>
                            <li>{ deValue }</li>
                            <li>{ gValue } GPA</li>
                        </ul>
                    </div>
                </div>
               
            </div>
        )
    }
}