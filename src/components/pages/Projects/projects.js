import React, { Component } from 'react';
import './projects.css'
import Wave from '../../../images/waves.png';
import LyricFynder from '../../../images/lyricfynder.png'
import RecipeReady from '../../../images/recipeready.JPG'
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
                    {this.projects.map((e,i) => {
                        return(<img src={e.img} width="300" height="200" alt="cover"></img>)
                    })}
                </div>
                <span className="Next-PRJ" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
}

export default Projects