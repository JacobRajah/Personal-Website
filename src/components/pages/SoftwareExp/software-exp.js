import React, { Component } from 'react';
import './software-exp.css';

function DropDown(props) {
    const [drop, setDrop] = React.useState(0);
    return (
        <div className="SW-comp">
            <span className="drop-down"
                onClick={() => {drop ? setDrop(0) : setDrop(1)}}
                drop={drop}>
                <p className="d1"></p><p className="d2"></p>
            </span>
            <div className="SW-data">
                <h4 className="SW-Cat" onClick={() => {drop ? setDrop(0) : setDrop(1)}}>{props.type}</h4>
                {drop ? <ExpandData items={props.items}/>: null}
            </div>
        </div>
    )
}

function ExpandData(props) {
    return (
        <div className="exp-data">
            {props.items.map((e,i) => {
                return (<ExperienceBar prog={e.exp} skill={e.sw}></ExperienceBar>)
            })}
        </div>
    );
}

function ExperienceBar(props) {
    return (
        <div className="progbar">
           <div className="sec1" style={{"width": props.prog}}>
                <p className="skill">{props.skill}</p>
           </div>
        </div>
    )
}

function Legend(props) {
    return (
        <div>
            <p className="l-legend">Unfamiliar</p>
            <p className="r-legend">Experienced</p>
            <div className="progbar-legend">
                <div className="sec1-legend" style={{"width": props.prog}}>
                        <p className="skill-legend">{props.skill}</p>
                </div>
            </div>
        </div>
    )
}

class Software extends Component{

    constructor(props) {
        super();
        this.state = {
            web: [
                {sw: "Node.js", exp: "85%"},
                {sw: "React.js", exp: "80%"},
                {sw: "MongoDB", exp: "70%"},
                {sw: "HTML/CSS", exp: "75%"}
            ],

            sys: [
                {sw: "C", exp: "85%"},
                {sw: "MatLab", exp: "60%"}
            ],

            oop: [
                {sw: "Python", exp: "90%"},
                {sw: "Java", exp: "80%"}
            ],

            unix: [
                {sw: "Bash", exp: "85%"}, {sw: "Git", exp: "80%"}
            ]

        }
    }
    
    render() {
        return (
            <div>
                <div className="panel-software">
                    <h2 className="sw-heading">Software Experience</h2>
                    <div className="sw-top">
                        <div className="sw-web">
                            <DropDown items={this.state.web} type="Web Development"></DropDown>
                        </div>
                        <div className="sw-sys">
                            <DropDown items={this.state.sys} type="Systems Development"></DropDown>
                        </div>
                    </div>
                    <div className="sw-bottom">
                        <div className="sw-oop">
                            <DropDown items={this.state.oop} 
                                    type="Object Oriented Programming"></DropDown>
                        </div>
                        <div className="sw-unix">
                            <DropDown items={this.state.unix} type="Unix Shell"></DropDown>
                        </div>
                    </div>
                    
                    <div className="sw-legend">
                        <Legend skill="Example" prog="60%"></Legend>
                    </div>
                </div>
                <span className="Next-SW" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
    
}

export default Software;