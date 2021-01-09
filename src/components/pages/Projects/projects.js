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
                <p>Insert Heading Here</p>
                <p>Enter Software Used</p>
                <p>Enter Description</p>
            </div>
            
        </div>
    )
}


// function ProjectComp(props) {
//     return(
//         <div>
//             {this.projects.map((e,i) => {
//                         return(<img src={e.img} width="300" height="200" alt="cover"></img>)
//             })}
//         </div>
//     )
// }

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
                    <Section img={this.projects[0].img}></Section>
                </div>
                <span className="Next-PRJ" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
}

export default Projects