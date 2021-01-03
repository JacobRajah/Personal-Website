import React, { Component } from 'react';
import './work.css';

function Timeline() {
    return (
        <div className="timeline">
            <span className="line-1"></span>
            <span className="circle-1"></span>
            <span className="line-1"></span>
            <span className="circle-1"></span>
            <span className="line-1"></span>
            <span className="circle-1"></span>
            <span className="line-2"></span>  
        </div>
    )
}

function Experiences(props) {
    return (
        <div className="jobs">
            {props.jobs.map((e, i) => {
                return (
                    <div className="WK-section">
                    {/* Need this div class to set 
                    the height of a div to have enough 
                    space for the expanded content */}
                        <DropDown type={e.date} 
                                    title={e.title} 
                                    sw_used={e.sw_used}
                                    description={e.description}
                                    id={i}></DropDown>
                                  
                    </div>
                )
            })}
        </div>
    )
}

function DropDown(props) {
    const [drop, setDrop] = React.useState(0);
    
    return (
        <div className="WK-comp" id={props.id}>
            <span className="drop-down-WK"
                onClick={() => {drop ? setDrop(0) : setDrop(1)}}
                drop={drop}>
                <p className="d1-WK"></p><p className="d2-WK"></p>
            </span>
            <div className="WK-data">
                <h4 className="WK-Cat" onClick={() => {drop ? setDrop(0) : setDrop(1)}}>{props.type}</h4> 
            </div>
            <div className="WK-content">
                {drop ? <Content title={props.title} 
                                 sw_used={props.sw_used} 
                                 description={props.description}
                        ></Content> : null}
            </div>
        </div>
    )
}

function Content(props) {
    return (
        <div>
            <p className="title-WK">{props.title}</p>
            <p className="SW-USD-WK">{props.sw_used}</p>
            <p className="DSCR-WK">{props.description}</p>
        </div>
    )
}

class Work extends Component {

    constructor(props) {
        super();
        this.jobs = [
            {
                date: "Summer 2020",
                title: "Controls Engineering Intern",
                sw_used: "Software Used: Python, C, Java, Bash",
                description: "Automated the production of object files" 
                + " for NASA’s simulators using Python to analyze, interpret" 
                + " and format given data. Ensured production code validity by" 
                + " integrating an efficient automized testing algorithm."
            },
            {
                date: "Summer 2019",
                title: "Controls Engineering Intern",
                sw_used: "Software Used: MATLAB, LUA, Bash",
                description: "Validated Canada Arm 3 prototypes by testing"
                + " its ability to align autonomously from various staring "
                + " positions and in different lighting conditions."
            },           
        ]
    }

    render(){
        return (
            <div>
                <div className="panel-wk">
                    <h3 className="wk-heading">Work Experience</h3>
                    <Timeline></Timeline>
                    <h3 className="section-id-1">Internships</h3>
                    <Experiences jobs={this.jobs}></Experiences>
                </div>
                <span className="Next-WK" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
}

export default Work;