import React, { Component } from 'react';
import './education.css'
import Ryerson from '../../../images/Ryerson.webp'
import UofT from '../../../images/UofT.jpg'
import Dame from '../../../images/NDAME.jpg'

function Study(props) {
    return (
        <div className="study">
            <div className="school-img">
                <img className="img-sch" src={props.image} alt="School"></img>
            </div>
            <div className="school-info">
                <h4 className="institution">{props.name}</h4>
                <p className="educ-level">{props.educ_level}</p>
                <p className="years">{props.year}</p>
                <p className="course-heading">Relevant Courses:</p>
                <p className="relevant-courses">{props.rel_courses}</p>
            </div>
        </div>
    )
}

function Sections(props) {
    return (
        <div className="educ-sections">
            {props.educ.map((e, i) => {
                return(<Study name={e.name} 
                              educ_level={e.educ_level}
                              year={e.year}
                              rel_courses={e.rel_courses}
                              image={e.image}></Study>)
            })}
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
                    <Sections educ={this.educations}></Sections>
                </div>
                <span className="educ-Next" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
}

export default Education