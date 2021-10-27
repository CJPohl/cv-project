import React from "react";

import General from './General';
import Education from './Education';
import Practical from './Practical';

export default function Form() {
    return (
        <div className="form">
            <General />
            <Education />
            <Practical />
            <button className="finish" type="button">Finish</button>
        </div>
      
    )
}