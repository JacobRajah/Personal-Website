import React, { Component } from 'react';
import './projects.css'
class Projects extends Component {
    render() {
        return (
            <div>
                <div className="panel-PRJ">
                    <h3 className="prj-heading">Projects</h3>
                </div>
                <span className="Next-PRJ" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
}

export default Projects