import React from "react";

export default class Print extends React.Component {
    render() {
        return (
            <div className="print">
                <div className="print-name">
                    <h1>Christopher Pohl</h1>
                </div>
                <div className="print-sub">
                    <p>cjpohldev@gmail.com</p>
                    <p>908-745-1845</p>
                </div>
                <div className="print-spacer"></div>
                <div className="print-practicals">
                    <h2>Practical Experience</h2>
                    <div className="print-practical">
                        <h3>Google</h3>
                        <ul>
                            <li>Junior Fullstack Developer</li>
                            <li>Front-End Development, HTML-CSS-JS, React, NodeJs, Back-end...</li>
                            <li>3 Years</li>
                        </ul>
                    </div>
                    <div className="print-practical">
                        <h3>PohlHaus Brewing</h3>
                        <ul>
                            <li>Assistant Brewing Engineer</li>
                            <li>Brewing and creating of worldclass German style beer</li>
                            <li>3 Years</li>
                        </ul>
                    </div>
                </div>
                <div className="print-spacer"></div>
                <div className="print-educations">
                    <h2>Education</h2>
                    <div className="print-education">
                        <h3>Indiana University</h3>
                        <ul>
                            <li>Computer Science</li>
                            <li>8/17/14</li>
                            <li>5/6/18</li>
                            <li>3.9 GPA</li>
                        </ul>
                    </div>
                </div>
               
            </div>
        )
    }
}