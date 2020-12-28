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
                <h4 className="SW-Cat" onClick={() => {drop ? setDrop(0) : setDrop(1)}}>Web Development</h4>
                {drop ? <ExpandData/>: null}
            </div>
        </div>
    )
}

function ExpandData(props) {
    return (
        <div className="exp-data">
            <div>Node.js</div>
        </div>
    );
}

function ExperienceBar(props) {
    return (
        <div>
            {/* Progress bar here */}
        </div>
    )
}

class Software extends Component{
    
    render() {
        return (
            <div>
                <div className="panel-software">
                    <h2 className="sw-heading">Software Experience</h2>
                    <DropDown></DropDown>
                </div>
                <span className="Next" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
    
}

export default Software;