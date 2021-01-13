import React, { Component } from 'react';
import './education.css'
import Ryerson from '../../../images/Ryerson.webp'
import UofT from '../../../images/UofT.jpg'
import Dame from '../../../images/NDAME.jpg'

function Study(props) {
    return (
        <div className="study">
            <div className="school-img">
                <img className="img-sch" src={UofT} alt="School"></img>
            </div>
            <div className="school-info">
                <h4 className="institution">Insert Institution</h4>
                <p className="educ-level">Insert Education Level</p>
                <p className="years">Insert Years</p>
                <p className="course-heading">Relevant Courses:</p>
                <p className="relevant-courses">Insert relevant coursework</p>
            </div>
        </div>
    )
}

class Education extends Component {

    constructor(props){
        super()
        this.educations = [
            {
                name: "Ryerson University",
                educ_level: "Bachelor of Science",
                year: "2020-2023",
                rel_courses: "CPS633 - Computer Security, CPS420 - Discrete Structures," +
                             " CPS506 - Comparative Programming Languages," +
                             " CPS590 - Operating Systems I" +
                             " CPS305 - Data Structures",
                image: Ryerson
            },
            {
                name: "University of Toronto",
                educ_level: "Bachelor of Science",
                year: "2018-2020",
                rel_courses: "CSC148 - Intro to Comp Sci, "+
                             "CSC165 - Mathematical Expressions & Reasonings for CS" +
                             "CSC207 - Software Design, CSC258 - Computer Organization," +
                             "CSC209 - Software Tools and Systems Programming",
                image: UofT                
            },
            {
                name: "Notre Dame CSS",
                educ_level: "High School",
                year: "2014-2018",
                rel_courses: "Computer Science I & II - Intended to" +
                             "introduce Java to High School students",
                image: Dame                
            }
        ]
    }
    render() {
        return(
            <div>
                <div className="educ-panel">
                    <h3 className="educ-heading">Education</h3>
                    <Study></Study>
                </div>
                <span className="educ-Next" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
}

export default Education