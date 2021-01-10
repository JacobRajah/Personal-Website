import React, { Component } from 'react';
import './projects.css'
import Wave from '../../../images/waves.png';
import LyricFynder from '../../../images/lyricfynder.png'
import RecipeReady from '../../../images/recipeready.JPG'

function Section(props) {
    return (
        <div className="proj-section">
            <div className="proj-img">
                <img src={props.img} width="300" height="200" alt="cover"></img>
            </div>
            <div className="proj-content">
                <h4>Insert Heading Here</h4>
                <div className="sw-used">
                    <p className="sw-used-heading">Software Used:</p>
                    <p className="sw-used-data">Enter Software Used</p>
                </div>
                <p className="proj-description">Enter Description</p>
            </div>
            
        </div>
    )
}


function ProjectComp(props) {
    return(
        <div className="proj-data">
            {props.projects.map((e,i) => {
                        return(<Section img={e.img} 
                                        title={e.title} 
                                        description={e.description}></Section>)
            })}
        </div>
    )
}

class Projects extends Component {

    constructor(props) {
        super();
        this.projects = [
            {
                img: LyricFynder,
                title: "",
                description: ""
            },
            {
                img: RecipeReady,
                title: "",
                description: ""
            },
            {
                img: Wave,
                title: "",
                description: ""
            }
        ]
    }

    render() {
        return (
            <div>
                <div className="panel-PRJ">
                    <h3 className="prj-heading">Projects</h3>
                    <ProjectComp projects={this.projects}></ProjectComp>
                </div>
                <span className="Next-PRJ" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
}

export default Projects