import React, { Component } from 'react';
import './about.css'
import './work.css'
import Software from './pages/software-exp'

function Media(props) {
    const [move, setmove] = React.useState(0);
    return (
        <div className="Main" 
             onClick={() => {setmove(1);}} 
             onAnimationEnd={() => {setmove(0); props.toOptions()}} 
             move={move}>
            <h1 className="Hello">Hi, I'm Jacob</h1>
        </div>
    )
}

function MediaOptions(props) {
    return (
        <div className="options">
            <h4 className="software" onClick={() => props.toSoftware()}>Software</h4>
            <h4 className="work" onClick={() => props.toWork()}>Work Experience</h4>
            <h4 className="projects" onClick={() => props.toProjects()}>Projects</h4>
            <h4 className="education" onClick={() => props.toEducation()}>Education</h4>
            <h4 className="contact" onClick={() => props.toContact()}>Contact</h4>
        </div>
    )
}

function Work(props) {
    return (
        <div>
            <div className="panel">
                <h3>Work Experience</h3>
                <span className="w1">
                    <p className="experience">Controls Engineering Intern, MDA</p>
                    <p className="dates">May-Aug 2020</p>
                </span>
                <ul className="notes">
                    <li>Automated the production of object files for NASA’s simulators using Python</li>
                    <li className="x">Used{<p className="webexp">Python</p>}
                        {<p className="webexp">Java</p>}
                        {<p className="webexp">C</p>}
                    </li>
                </ul>
                <p className="dates-2">May-Aug 2019</p>
                <ul className="notes">
                    <li>Validated Canada Arm 3 prototypes by testing
                     its ability to align autonomously from various 
                     staring positions and in different lighting conditions</li>
                    <li className="x">Used{<p className="webexp">LUA</p>}
                        {<p className="webexp">MatLab</p>}
                        {<p className="webexp">Bash</p>}
                    </li>
                </ul>                              
            </div>
            <span className="Next" onClick={() => props.backOptions()}>
                <p className="a1"></p><p className="a2"></p>
            </span>
        </div>
    )
}

function Projects(props) {
    return (
        <div>
            <div className="panel">
                <h3>Projects</h3>
            </div>
            <span className="Next" onClick={() => props.backOptions()}>
                <p className="a1"></p><p className="a2"></p>
            </span>
        </div>
    )
}

function Education(props) {
    return (
        <div>
            <div className="panel">
                <h3>Education</h3>
                <h4>Ryerson University</h4>
                <h4>Computer Science, BS</h4>
            </div>
            <span className="Next" onClick={() => props.backOptions()}>
                <p className="a1"></p><p className="a2"></p>
            </span>
        </div>
    )
}

function Contact(props) {
    return (
        <div>
            <div className="panel">
                <h3>Contact</h3>
            </div>
            <span className="Next" onClick={() => props.backOptions()}>
                <p className="a1"></p><p className="a2"></p>
            </span>
        </div>
    )
}



class About extends Component {

    constructor(props) {
        super()
        this.state = {
            main: 1,
            options: 0,
            software: 0,
            work: 0,
            projects: 0,
            education: 0,
            contact:0
        }

        this.toOptions = this.toOptions.bind(this)
        this.toSoftware = this.toSoftware.bind(this)
        this.backOptions = this.backOptions.bind(this)
        this.toWork = this.toWork.bind(this)
        this.toProjects = this.toProjects.bind(this)
        this.toEducation = this.toEducation.bind(this)
        this.toContact = this.toContact.bind(this)
        
    }

    toOptions() {
        this.setState({main: 0})
        this.setState({options: 1})
    }

    toSoftware() {
        this.setState({
            options: 0,
            software: 1
        })
    }

    toWork() {
        this.setState({
            options: 0,
            work: 1
        })
    }

    toProjects() {
        this.setState({
            options: 0,
            projects: 1
        })
    }

    toEducation() {
        this.setState({
            options: 0,
            education: 1
        })
    }

    toContact() {
        this.setState({
            options: 0,
            contact: 1
        })
    }

    backOptions() {
        this.setState({
            software: 0,
            work: 0,
            projects: 0,
            education: 0,
            contact:0,
            options: 1
        })
    }

    render (){
        return (
            <div className="about">
                {this.state.main ? <Media toOptions={this.toOptions}></Media> : null}
                {this.state.options ? <MediaOptions toSoftware={this.toSoftware} 
                toWork={this.toWork} toProjects={this.toProjects} toEducation={this.toEducation}
                toContact={this.toContact}></MediaOptions> : null}
                {this.state.software ? <Software backOptions={this.backOptions}></Software> : null}
                {this.state.work ? <Work backOptions={this.backOptions}></Work> : null}
                {this.state.projects ? <Projects backOptions={this.backOptions}></Projects> : null}
                {this.state.education ? <Education backOptions={this.backOptions}></Education> : null}
                {this.state.contact ? <Contact backOptions={this.backOptions}></Contact> : null}
            </div>
            )
        };
}

export default About