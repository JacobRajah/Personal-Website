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
                <h4>{props.title}</h4>
                <div className="sw-used">
                    <p className="sw-used-heading">Software Used:</p>
                    <p className="sw-used-data">{props.sw}</p>
                </div>
                <p className="proj-description">{props.description}</p>
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
                                        sw={e.sw} 
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
                title: "LyricFynder",
                sw: "Node.js, React.js, MongoDB, Puppeteer, Genius/Spotify API, YouTube API",
                description: "Full Stack Application which uses a user’s lyrical input" + 
                            " along with the YouTube API and Puppeteer web scraping, "
                            + "to determine the song related to the user’s lyrical input. "
                            + "Offers other features such as Top charts of the week and trending music."
            },
            {
                img: RecipeReady,
                title: "Recipe Ready",
                sw: "Java, Android Studio",
                description: "Interactive app which allows users to streamline" +
                " the process of deciding what meals to cook based on the amount" +
                " of time they have. I worked on designing the UI and the functions" +
                " for accessing recipe data. Built for UofTHacks VII"
            },
            {
                img: Wave,
                title: "Wave Simulator",
                sw: "MatLab",
                description: "Interactive UI that allows users to visualize the " +
                "construction and desconstruction of sinusoidal waves with " + 
                "features such as variable amplitude"
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