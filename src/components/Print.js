import React from "react";

export default class Print extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            fnValue: 'First',
            lnValue: 'Last',
            eValue: 'thisisasamplemail@fake.universe',
            mValue: '###-###-####',
            cValue: 'Google',
            ptValue: 'Fullstack Engineer',
            mtValue: 'Leader of implementing both the front-end and back-end of company web applications',
            ttValue: '5',
            nValue: 'Harvard University',
            sValue: 'BS Computer Science',
            dsValue: '8/17/14',
            deValue: '5/5/18',
            gValue: '3.8'
        }
    }

    render() {
        // deconstruct
        const {
            fnValue,
            lnValue,
            eValue,
            mValue,
            cValue,
            ptValue,
            mtValue,
            ttValue,
            nValue,
            sValue,
            dsValue,
            deValue,
            gValue,
        } = this.state;
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