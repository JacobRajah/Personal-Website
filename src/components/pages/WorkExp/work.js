import React, { Component } from 'react';
import './work.css';

function Timeline(props) {
    return (
        <div className="timeline">
            <span className="line-1"></span>
            <span className="circle-1"></span>
            <span className="line-2"></span>
            <span className="circle-1"></span>
            <span className="line-2"></span>  
        </div>
    )
}

function DropDown(props) {
    const [drop, setDrop] = React.useState(0);
    return (
        <div className="WK-comp">
            <span className="drop-down-WK"
                onClick={() => {drop ? setDrop(0) : setDrop(1)}}
                drop={drop}>
                <p className="d1-WK"></p><p className="d2-WK"></p>
            </span>
            <div className="WK-data">
                <h4 className="WK-Cat" onClick={() => {drop ? setDrop(0) : setDrop(1)}}>{props.type}</h4> 
            </div>
            <div className="WK-content">
                {drop ? <Content></Content>: null}
            </div>
        </div>
    )
}

function Content(props) {
    return (
        <div>
            <p className="text-WK">Controls Engineering Intern</p>
            <p className="text-WK">Software Used: Python, C, Java, Fortran</p>
            <p className="text-WK">Automated the production of object files for NASA’s simulators using Python to analyze, interpret and format given data. Ensured production code validity by integrating an efficient automized testing algorithm.</p>
        </div>
    )
}

class Work extends Component {
    render(){
        return (
            <div>
                <div className="panel-wk">
                    <h3 className="wk-heading">Work Experience</h3>
                    <Timeline></Timeline>
                    <h3 className="section-id-1">Internships</h3>
                    <DropDown type="Summer 2020"></DropDown>
                </div>
                <span className="Next-WK" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
}

export default Work;